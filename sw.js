/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/14/test-category/index.html","9f372518db78c8e5d4bc797bfacf2671"],["/2023/06/17/Android文件解析/index.html","d77f965ac99958ac8d26c456f5e98130"],["/2023/06/17/Broadcast/index.html","8c2ba85641e9f6a2eacc80e016d93984"],["/2023/06/17/Comparator/index.html","1fc226c80e3fa95d60d853d0af7e61fc"],["/2023/06/17/HOJ部署/index.html","65fa47b6bcc506b151df9d10f5b27a64"],["/2023/06/17/JUC/index.html","8bae37e45f214f9b97c38bd4bee49338"],["/2023/06/17/JVM/index.html","e9bbefa9fed404ea2813fad6ee4c292e"],["/2023/06/17/Java-Comparator/index.html","6f9dd682d89282ba16468c5a894e1fa5"],["/2023/06/17/Java基础知识/index.html","c5caa41694977a33153c81725a2c4f31"],["/2023/06/17/Python基础/index.html","026f257bcb4279d915d748dd372bf873"],["/2023/06/17/Python爬虫/index.html","00abd96623fa960f7a3cb1f1e6df5c76"],["/2023/06/17/Redis/index.html","1d3e8e1a7326d3bd0a0c14dd6abee5c9"],["/2023/06/17/SearchProjects部署/index.html","a4c15d7e3372fb5ec4d85cd5ad5eda21"],["/2023/06/17/Shiro/index.html","0b82279044b980438c09f968adb9f818"],["/2023/06/17/SpringSecurity/index.html","039a102cd82b9afa54ce8c15d9ff6f9d"],["/2023/06/17/Stream流/index.html","6eef8a5cb54d6b1047ace756c39acb1b"],["/2023/06/17/UI/index.html","a75261b851c5829db5925223e0161e4f"],["/2023/06/17/Vue/index.html","94d6fcc3eb56fefce8e3c4ba5afb5b1d"],["/2023/06/17/小白怎么读开源/index.html","d1af965331c92d07952ef2169dcd65ce"],["/2023/06/17/持久化技术/index.html","1abaf787b37e3d4513978694fda2208b"],["/2023/06/17/泛型/index.html","d948ca2b1c1672b4579189d5dc701e40"],["/2023/06/17/瑞吉外卖笔记/index.html","ea744f028b26f630bc28a64b01b88735"],["/2023/06/17/组件/index.html","7d30e59158c4aad03b12af52273aa7cf"],["/archives/2019/01/index.html","7c43ebc3a74ae70fa5ed76a92fbc697d"],["/archives/2019/index.html","a4c4cdddc2c4da801c26ac383db28713"],["/archives/2023/06/index.html","4cf9dd3e56c9de135328455782496f91"],["/archives/2023/06/page/2/index.html","48aa47d2d94cfb798ebcfe69a916f4b7"],["/archives/2023/06/page/3/index.html","0b0d3b952c1417dc542560541349c975"],["/archives/2023/06/page/4/index.html","514aeaa21d8ed0cec2d783e9ecdd5b07"],["/archives/2023/06/page/5/index.html","d2fbb78809ee38c39b61e4ffc86eb390"],["/archives/2023/index.html","70ae9144024b88fcbdfb3ce7ab517db3"],["/archives/2023/page/2/index.html","eb0aa6d70651c276c8c7ffdb4471a40d"],["/archives/2023/page/3/index.html","498e4b5ec8f0a1d86b3a513ecf616279"],["/archives/2023/page/4/index.html","413a88cf057609d21149cec8f5b268c0"],["/archives/2023/page/5/index.html","7bd942232404ba0de585beb57d06aae4"],["/archives/index.html","7b0f85521553523ceb8dae7b51d9e36b"],["/archives/page/2/index.html","5e766d5c2b3edde00da3b009b0a04e07"],["/archives/page/3/index.html","90068d377136d613840d50119c8a1c93"],["/archives/page/4/index.html","81b005ae02295773c14f7d66a626d03f"],["/archives/page/5/index.html","1b386e2acfb372d11506d08906407a8a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","18877a446bd1ee4b5de584bebce81602"],["/categories/Java/index.html","9b8156407d8be85b1929dc815c35fda2"],["/categories/Java/page/2/index.html","b330b0b1ad27582d5b916a10dfb1e628"],["/categories/Python/index.html","e6d501f28bd1c5512b92fbd3fa7b3a71"],["/categories/Spring/index.html","77b0a01fb5149adf370d1fe0f6a5a644"],["/categories/Spring项目/index.html","058ac193498017ff87f9dc3588f41320"],["/categories/index.html","178141390075f7e5ef687f62b8e3efc1"],["/categories/test/index.html","4b094b1054bc3b7ac50d6d16713b5600"],["/categories/中间件/index.html","245afbcbc3205c11b8cbae605980548d"],["/categories/前端/index.html","4c1c209de78bd02cad1c8f69e655f4f1"],["/categories/随笔/index.html","c03b71bf8c0fab21a176c4c1b68f26cb"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","ba4e9034e7e024963bd217b723f5489e"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","2c2202647f35705affe1527a7e7f4dd9"],["/page/3/index.html","2ee5f4c438db76b3f6fca097b341ba1b"],["/sw-register.js","dbd7a9d2b019a652a4291d5873cf231c"],["/tags/Android/index.html","2b2253dcd1b2ec087706b1e91a03e8d0"],["/tags/Java/index.html","5d72c3d6d7bea6c1244a7a3fd79ce778"],["/tags/Java/page/2/index.html","3f0d943130e80d2b6b22f3df0f6affbe"],["/tags/Python/index.html","781c76600ba038cbe061a0859c2b281d"],["/tags/Spring/index.html","1d13ba1f1e39e5d2603e40e35398cf17"],["/tags/SpringBoot/index.html","872d0b7ba8a227d59b7af8e3b7d2f2cf"],["/tags/Vue/index.html","619e9bf5483cfe7b69e69444d56235a4"],["/tags/hexo/index.html","26f3ba2b4f68ce32c8da6315fae823f5"],["/tags/index.html","4c17dc48d1cfd795bb0eac95afedabda"],["/tags/test/index.html","27648d172fac7939b6032077d5d946f3"],["/tags/中间件/index.html","dbdbbe21e2146aad68dca72ac42ef9cd"],["/tags/随笔/index.html","eaad3dc355fb27792addbffb4cc8e962"]];
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
