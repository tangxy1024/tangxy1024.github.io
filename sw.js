/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/17/Android文件解析/index.html","dd689c10b3810894d16c3f03cee93c15"],["/2023/06/17/Broadcast/index.html","ffa03647dfaa524c041badc9e0e6e3a9"],["/2023/06/17/Comparator/index.html","9e93ce6994c60721e0ac26e05b48d9e3"],["/2023/06/17/HOJ部署/index.html","5a2a0eff1d7a8187846418acc2dec37d"],["/2023/06/17/JUC/index.html","ff60aa7ee2500a3b47a49d728b440820"],["/2023/06/17/JVM/index.html","1e02af7e59bb035774498850e6927a80"],["/2023/06/17/Java-Comparator/index.html","6deb15144913a67a33e26a6d447a387b"],["/2023/06/17/Java基础知识/index.html","508dacd7f23ef3ebe218ffd7bdeb87ea"],["/2023/06/17/Python基础/index.html","dbb18e0fbeed7551d4ff1115e5d05d53"],["/2023/06/17/Python爬虫/index.html","4c992a804c387000e315b15c5c8feebe"],["/2023/06/17/Redis/index.html","4fa845633e33fb420d6cadd5486e7ce2"],["/2023/06/17/SearchProjects部署/index.html","969994a4b62aa0c4565426ca9fcf61f5"],["/2023/06/17/Shiro/index.html","25d14d603fd7c8199aa904380492ffa3"],["/2023/06/17/SpringSecurity/index.html","ec0f026eaa2bf03678c1df3d0d32d400"],["/2023/06/17/Stream流/index.html","a43e588ae08d73dfc2ee0e897b292cf4"],["/2023/06/17/UI/index.html","e8cbf1f13096d0f26d36a29d1c64646e"],["/2023/06/17/Vue/index.html","737b17a1c19d149326227fb545eb9158"],["/2023/06/17/小白怎么读开源/index.html","b11120843afa766f1ffeb61539a83b72"],["/2023/06/17/持久化技术/index.html","e3abda64c256a5ddc66a10500defa0da"],["/2023/06/17/泛型/index.html","be618bf89ce0929e90027b038aec2bea"],["/2023/06/17/瑞吉外卖笔记/index.html","1864c88ee720c0864c5d9bf1fb529ce9"],["/2023/06/17/组件/index.html","63a2aba290754892e34eb9de9626b38f"],["/2023/06/17/面经总结/index.html","52d7ca12d7f4e0d388e0310faa302144"],["/2023/06/17/面试--项目工具/index.html","c78a1fdc99e04b16e3f0e2dadd4a7b2c"],["/2023/06/17/面试题/index.html","3c51bee99a1176227c044df347a604be"],["/archives/2023/06/index.html","70876b862781f19fc8f13cb6c1a15b12"],["/archives/2023/06/page/2/index.html","9505723c74d1a1a4661db2f767348719"],["/archives/2023/06/page/3/index.html","f16ada0b997ac8e9523871475c81c203"],["/archives/2023/06/page/4/index.html","b4a037ad491f394de54fe6760488dff5"],["/archives/2023/06/page/5/index.html","3d0a6820c7cab29f28f87ad00cb6a975"],["/archives/2023/index.html","def71c9c4d8a80f606e68a35ecb86ee6"],["/archives/2023/page/2/index.html","2427c053f4a43264c84e8a79f0a042ba"],["/archives/2023/page/3/index.html","cf49a54cbe0c6fca3a3a4ed2e682f0b3"],["/archives/2023/page/4/index.html","e8df433c85dcffe0740aceaf671f4ef4"],["/archives/2023/page/5/index.html","a245ef882a63b31729e61a71d957e5a7"],["/archives/index.html","82e07f39d8e164338aa7db2acdc45cb1"],["/archives/page/2/index.html","e05b2bd4049c3a4187d933bead7ca69f"],["/archives/page/3/index.html","a2bbaae4cee48e141cdfb45ba899e222"],["/archives/page/4/index.html","567f918c8f9bdcb5c5d0a8c7680152e6"],["/archives/page/5/index.html","d3532e6cc9d30708f988ad29560e734c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","2c49b5582615ff5fa916bd70383cb70a"],["/categories/Java/index.html","1422bfe1a6822314b820fe1af41e7d5f"],["/categories/Java/page/2/index.html","a3fb7414b38d4d9893f0788546af3aed"],["/categories/Python/index.html","2bbd95c662d58f69a9072a5aa614a240"],["/categories/Spring/index.html","66980ba44d93faeb4cab31211ff66a45"],["/categories/Spring项目/index.html","b7b93068522a45cc2717b6f95ba1b7bb"],["/categories/index.html","04605c7633b90b5eadc7893ebb763187"],["/categories/中间件/index.html","4dfb35447e5bceb655de9214e6a75cab"],["/categories/前端/index.html","909a877675f05e48626353f17a93e165"],["/categories/随笔/index.html","2ca0bc6b75c11d26da00974b1bab6987"],["/categories/面试/index.html","23459b79247b731a8fa8954f1aba4862"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","6c34e30b2e7f121c29c4feb9b88dafdf"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","b3acd1bec78315e22e729a8cbe1bfe3e"],["/page/3/index.html","8c30956964c2020c3ade2ae42f9cdba5"],["/sw-register.js","fa2ba6acf76b5f51fcddf0fd21004ee3"],["/tags/Android/index.html","9df6f4a23694dc4180a7d0de3c97b898"],["/tags/Java/index.html","e3bc2c523764a76ede6bf0a5a4e0f694"],["/tags/Java/page/2/index.html","738b1e31e7d8b96317f2dac00be2d2d5"],["/tags/Python/index.html","f4aa56ca5034aeb629eed38352d62bf1"],["/tags/Redis/index.html","4bcfc8952a491ad19969e065caa8eeb2"],["/tags/Spring/index.html","93efd5ac9bf71fdd895647fb9a57b3dc"],["/tags/SpringBoot/index.html","5d94200d9a42e196290c4a2292986b9f"],["/tags/Vue/index.html","d3db940da32c8310b8d23e0a2ec9979e"],["/tags/index.html","ac400964990716df867d35b33cdcb9d8"],["/tags/中间件/index.html","a051410269991223629daab8018a2b8e"],["/tags/随笔/index.html","33b5012129675b7d00d581abd32cf200"],["/tags/面试/index.html","302e962af8f77f3fb107b955499c9ccb"]];
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
