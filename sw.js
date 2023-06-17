/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/17/Android文件解析/index.html","b0fc184b37b001a001d42bf7d3f33631"],["/2023/06/17/Broadcast/index.html","4d84422b62662126d01f1a72670c59a1"],["/2023/06/17/Comparator/index.html","d63be79f15b174c51ab72aff2591878e"],["/2023/06/17/HOJ部署/index.html","094d27e7f0ba0bef61b2a01b8e4e1093"],["/2023/06/17/JUC/index.html","2d6ef7f93cd547cbdbb855eac1315678"],["/2023/06/17/JVM/index.html","60bfc1885d05100ffb33d051db413ea1"],["/2023/06/17/Java-Comparator/index.html","a146751520a9223ac12a946e403608e6"],["/2023/06/17/Java基础知识/index.html","e47da3c6cedb37898d9c65931ef644d4"],["/2023/06/17/Python基础/index.html","3aa53a5bf1a2e60bf27637858b99d344"],["/2023/06/17/Python爬虫/index.html","08e9c91b90b8bdde61e866a8e3553304"],["/2023/06/17/Redis/index.html","0d135759c1121a7669f19711c044cb13"],["/2023/06/17/SearchProjects部署/index.html","ddd045490c170a74308949dad83b2052"],["/2023/06/17/Shiro/index.html","baaec50a73126b70a75d9070daf9759a"],["/2023/06/17/SpringSecurity/index.html","8c2b2cd51d1cdafce0fc5de6a4ba4c3f"],["/2023/06/17/Stream流/index.html","64cad39555ee48ef44e486984b057dce"],["/2023/06/17/UI/index.html","7c85d3a42d9918925c8f678b8c5abe32"],["/2023/06/17/Vue/index.html","a1da6beb096cceb42c4d9845afdca031"],["/2023/06/17/小白怎么读开源/index.html","2022248b61495ca3682c6c595479c3d9"],["/2023/06/17/持久化技术/index.html","4aa93f0827530bcbb6a5b6e52fa1a4ba"],["/2023/06/17/泛型/index.html","6c5a18e4ce013070355ed9ba8dbab672"],["/2023/06/17/瑞吉外卖笔记/index.html","752ebccf67514ecfff191f6701c77b13"],["/2023/06/17/组件/index.html","991fa6c5d5f43035000e34e6e8218bc7"],["/archives/2023/06/index.html","180c38d240bf7b81878c14f983a0d69d"],["/archives/2023/06/page/2/index.html","0479919dcf8116208012bcbb7dfa6efe"],["/archives/2023/06/page/3/index.html","0e9ca0ad2c92b2af368a7774472a451a"],["/archives/2023/06/page/4/index.html","794c5e6b8579b22f7e56bf48312e3cae"],["/archives/2023/06/page/5/index.html","53b7264ffab544c1c9fdd287c6ab5e78"],["/archives/2023/index.html","77a11af191925411113ef5e6dece4424"],["/archives/2023/page/2/index.html","663a4f0c32db22f4450345f09184b4dd"],["/archives/2023/page/3/index.html","5924ac9b043e273b8ebc95e48410dd02"],["/archives/2023/page/4/index.html","14f3cf64383baba4c0c50d324e1a5348"],["/archives/2023/page/5/index.html","aeb4b2c448abb6ecb8e70bf07fb74095"],["/archives/index.html","0c6967865c4a0d09a56f4b5eb8f6b2ad"],["/archives/page/2/index.html","4ddb1d0d896ce593cc5e900f4061d272"],["/archives/page/3/index.html","9897d2c13be016026efc4889af4e814b"],["/archives/page/4/index.html","092c6004e8fc8db75d163323891926d6"],["/archives/page/5/index.html","4a44a8015bb1e02a944a7bcefe351efb"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","229f898c12dd20cb4648dfde5fc9b1e2"],["/categories/Java/index.html","7b21cee6d76d5174abad01f94cd88325"],["/categories/Java/page/2/index.html","7aa1704f8b583fa83ddc3b2d8c7cc16d"],["/categories/Python/index.html","17267d00bdae4d5e65721f1c02d097bc"],["/categories/Spring/index.html","d0f5f8b8450210c66c024d26dc498618"],["/categories/Spring项目/index.html","895574686d07791ae49a98ee09d2c354"],["/categories/index.html","c5d4445481157b2a73f354d2f7d4917b"],["/categories/中间件/index.html","cf5f91017ad96bcd0651d997be30836f"],["/categories/前端/index.html","a62726e89a5d48076e6511526f0bddb6"],["/categories/随笔/index.html","1ea8db4bcd0362cad341712c6d2d405e"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","8880ff0e167c26d589dd893270bf2edd"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","eb5db08c00fab59c11be2a4b8bdebe96"],["/page/3/index.html","1563f17da4d526d1086d5bf7ad7c0010"],["/sw-register.js","e1779dd8cacc2a7a6d60cf8572a2008d"],["/tags/Android/index.html","5f90a4a1c35c3d305ab89a965710dfcc"],["/tags/Java/index.html","bfbd4584a9283c978aa5cdfac6c0d06a"],["/tags/Java/page/2/index.html","7d47178029044276fa39aad61e6d0d9d"],["/tags/Python/index.html","a78dea077fe1998b7ef78e6b1858d7ce"],["/tags/Redis/index.html","0a44cac0fd03e10f5cf6fb0c0a874709"],["/tags/Spring/index.html","31c655ef42f438dcc5ca227cd692db56"],["/tags/SpringBoot/index.html","d8c415673ef7d58a821bbaa29e66a8fe"],["/tags/Vue/index.html","7cf9e17a7ee1e4be7756579681234efe"],["/tags/index.html","79657e7d164da5283ba05f8e7b77b1c0"],["/tags/中间件/index.html","6fecf365f5ea0cb57ca481758d85cd90"],["/tags/随笔/index.html","d63834c7aa5816f4466c3900bbb7af3a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
