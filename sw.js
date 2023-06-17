/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/14/test-category/index.html","4ea1b84176cda13545b549a38b7337d3"],["/2023/06/17/Android文件解析/index.html","987fe893e1edd20f1a9168c1becd3064"],["/2023/06/17/Broadcast/index.html","66807f84ec2fe80b456ea26416f84d61"],["/2023/06/17/Comparator/index.html","64e97c4f7cbe3e605c03e65ef49fc79a"],["/2023/06/17/HOJ部署/index.html","0bf781434a68be1c57c04ca32538492d"],["/2023/06/17/JUC/index.html","b27e2e6bdd8efca45469de91471ae4d6"],["/2023/06/17/JVM/index.html","267b2578e34ecf5b231331e10b2e6f0b"],["/2023/06/17/Java-Comparator/index.html","7b6a4b5e2a97db153e78315c9d1529fa"],["/2023/06/17/Java基础知识/index.html","5840858fde688b416c15c94ff2357884"],["/2023/06/17/Python基础/index.html","7e182231a0d07a22fd036033341a92df"],["/2023/06/17/Python爬虫/index.html","786d77dee43ddfe9e91f563687f4984d"],["/2023/06/17/Redis/index.html","06ed1a9619443be9f2c1f8bd379a56f4"],["/2023/06/17/SearchProjects部署/index.html","505741e428f6cb361a682dfdd2d0326b"],["/2023/06/17/Shiro/index.html","8eae82e1668e1eeb9652ea3d5736821e"],["/2023/06/17/SpringSecurity/index.html","dd77a1120ecb7185cdafd7915d3e080e"],["/2023/06/17/Stream流/index.html","545eab32ac872ba16d211dd59862fd21"],["/2023/06/17/UI/index.html","e8d229652312b2f73737393e04771911"],["/2023/06/17/Vue/index.html","70ba9fc11b35a781a96f2ac625c9b422"],["/2023/06/17/小白怎么读开源/index.html","6fa76e5120781e280c7cd4772b805a81"],["/2023/06/17/持久化技术/index.html","7cd9415826e3145f679046d93095ea05"],["/2023/06/17/泛型/index.html","194ee733b5d86621ba8cb524ba90e4b3"],["/2023/06/17/瑞吉外卖笔记/index.html","2b50219aff9ee3d35ed915b1380d95ea"],["/2023/06/17/组件/index.html","4eb1df9d43bdcca2fee3bdb04c02a5ef"],["/archives/2019/01/index.html","b40e35c23f9dbf2c8219fe5fc9ac2304"],["/archives/2019/index.html","c9949b54a837bd0fb94988feb9590a4c"],["/archives/2023/06/index.html","a24b5e30deedbce23fb3e711e2449186"],["/archives/2023/06/page/2/index.html","7bc29b0219a167f46241a7f1765af018"],["/archives/2023/06/page/3/index.html","71b4e0fdff13fbe240e471c679697cbe"],["/archives/2023/06/page/4/index.html","c3179ebb43a6eeaefae31a9c22998382"],["/archives/2023/06/page/5/index.html","599637c7d91b541a42f85a2017c3a4b6"],["/archives/2023/index.html","e6b36aa86df280cf85a13032b3e5ef9b"],["/archives/2023/page/2/index.html","2a0e829a6254cb3aa4c1013aceedce70"],["/archives/2023/page/3/index.html","21255d9f0f48fdbeadf282f409494c85"],["/archives/2023/page/4/index.html","b5b2fe24119df0deb190eb0afb1ca163"],["/archives/2023/page/5/index.html","0dfdab9a8185cebe3128b948e07ff91e"],["/archives/index.html","c2a2907376fbc7585799834b242167b4"],["/archives/page/2/index.html","c72e00bbd3066e2ef41459f622b5a3dc"],["/archives/page/3/index.html","1cbe027626b0cdb3606b52959625c70f"],["/archives/page/4/index.html","da6fc394e0a53871e87fbc39b24649ef"],["/archives/page/5/index.html","01948dcce4ccb7c6cc9e9a173c24199e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","d1cd3b7e4935f24ed9aa2187e1a0c2a3"],["/categories/Java/index.html","a9eb8dff12687a7a87ec3e23576eccfd"],["/categories/Java/page/2/index.html","a91d00ead0dce8f99c053d80629a01b2"],["/categories/Python/index.html","517e5bfacad3420cb74be89c396afad1"],["/categories/Spring/index.html","121ffc9fde88731b59de965386811d79"],["/categories/Spring项目/index.html","976e46b2aade92adbc2a76318f029f0b"],["/categories/index.html","a85b341e8d742fce011ba295a0d7908c"],["/categories/test/index.html","1f035bb8a924e3b84050d2e14fa907f3"],["/categories/中间件/index.html","3c7443d935c6241845eb2312fbb9e1bf"],["/categories/前端/index.html","a288838e118f6a188a148f55fc305634"],["/categories/随笔/index.html","6e0cdd4ebee9b7759fc854a8a30bfb70"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","2f3ead17eb552c19473a43ac49c26bb5"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","c40f48fa144564e5124cc2f4319ac03d"],["/page/3/index.html","7b80e303c1bfe3323c90addc43dcbdbc"],["/sw-register.js","76a87d8d1f202c2c1934322eab25a09e"],["/tags/Android/index.html","3559f13fdffa75f155acb4fc1d9671cb"],["/tags/Java/index.html","ae47cdf59b058ab544876f17f4c82c49"],["/tags/Java/page/2/index.html","b404df5d15c47a0ee5bd209846a10c32"],["/tags/Python/index.html","d86c809f8392e310cc6a34c7c6e733d5"],["/tags/Spring/index.html","e252d93636df9f16060e8ff1b79dfdbf"],["/tags/SpringBoot/index.html","8bd3adfed7df3e10e6b1bcd80e70d05c"],["/tags/Vue/index.html","3039cf4b31b63c77845edc86c2fb18dc"],["/tags/hexo/index.html","b66b1963ae5dae0c7a65cc25b7ef5583"],["/tags/index.html","183c3f3a39900a7754a474a3d420ffd2"],["/tags/test/index.html","7ce956bf0778f272d4e6bab335c1ea88"],["/tags/中间件/index.html","8e3e46bb03e95dbce12eec9277ba6d01"],["/tags/随笔/index.html","654463987d41ec0e7b7e512eec6c86e2"]];
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
