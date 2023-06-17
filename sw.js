/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/17/Android文件解析/index.html","47175cf312775a219ab9c6d8e4e635b0"],["/2023/06/17/Broadcast/index.html","cb81d78f077dc86312ace459c9f8c53a"],["/2023/06/17/Comparator/index.html","cf255f38c0f81da7f887b3a9d4bd80a7"],["/2023/06/17/HOJ部署/index.html","e7d86e907d3a59aee1ca9b50c5611171"],["/2023/06/17/JUC/index.html","df5f971b4f928e93c3d6ac8a3e960e3f"],["/2023/06/17/JVM/index.html","4ea0c5110e44e0ac1d0e32de4a2ed4f9"],["/2023/06/17/Java-Comparator/index.html","aa6cd4922ccb4e5792ae1307f1193bbc"],["/2023/06/17/Java基础知识/index.html","3481411628ae8ec88a8af55b92c40497"],["/2023/06/17/Python基础/index.html","5ec72f44b3711100f9290e452b4a7920"],["/2023/06/17/Python爬虫/index.html","fea5c7c3ac34737b39cb41d28360c40d"],["/2023/06/17/Redis/index.html","3c2e11caf7d29319dfb627e693614f01"],["/2023/06/17/SearchProjects部署/index.html","22b09feefc0066cc957c0e3a2b524341"],["/2023/06/17/Shiro/index.html","f792356ea301a1fcd97ca6def53e238c"],["/2023/06/17/SpringSecurity/index.html","dd4a11425fe25d93149a34342583403c"],["/2023/06/17/Stream流/index.html","30d6b2bf68589c63002320989c3e516d"],["/2023/06/17/UI/index.html","4462a5c00db0c0dcafea080b4b48f98f"],["/2023/06/17/Vue/index.html","43f34f85b4df23e26c2c0943309738b6"],["/2023/06/17/小白怎么读开源/index.html","8530bb2e508e59b75f9d0af531d46b57"],["/2023/06/17/持久化技术/index.html","a3e2fd891ca3928eaeb097e409b698f9"],["/2023/06/17/泛型/index.html","4370d3da6b5d555122b29eb628587a30"],["/2023/06/17/瑞吉外卖笔记/index.html","288f85b669430b9d4fc9701e6e713e73"],["/2023/06/17/组件/index.html","dfd92366349b5ce6fefe8777b2718ae8"],["/archives/2023/06/index.html","9ead84fb47083127f0a8a52e84f4a2e8"],["/archives/2023/06/page/2/index.html","34e2cfdf6883eb94273f74617078299c"],["/archives/2023/06/page/3/index.html","20eb6c38b6c87fd359c0757b329fe5b1"],["/archives/2023/06/page/4/index.html","54f718ad22fafc87a53603cba2acaf72"],["/archives/2023/06/page/5/index.html","6a59c6e531248b6d08ceb0acb6cc2fb4"],["/archives/2023/index.html","c54666aba73939f88fdd0e7fc7c292f9"],["/archives/2023/page/2/index.html","62ee49a2a6e1d3bba7220f8ac338c161"],["/archives/2023/page/3/index.html","5d26dfab948a7eee75ed4a48647d0945"],["/archives/2023/page/4/index.html","509bff1d8d32b350d87cf88f7b8005e0"],["/archives/2023/page/5/index.html","7844b9541892b633325d17e0a4c1c96b"],["/archives/index.html","5b627ed25b1421eed20f433965bdd4a4"],["/archives/page/2/index.html","182d8a999611f3a57ebdf36fd18b2afd"],["/archives/page/3/index.html","decd941cffc17f4cf3fe36a8ed333ac6"],["/archives/page/4/index.html","c5c80af681d04654d01de57cb23d2fbb"],["/archives/page/5/index.html","55b97f90d6e896eb5b5fc4c7ac9eedb0"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","c023a982f524ed8bb7cf192cd26b4ac4"],["/categories/Java/index.html","b14928d0235e99e096730eb8945f0b8c"],["/categories/Java/page/2/index.html","a3a3b121759a21dab04cd3297e939c92"],["/categories/Python/index.html","cc299c2bb3116030eae0d9b0bd64debb"],["/categories/Spring/index.html","bc598b0960d102e006fe87380d6fe69b"],["/categories/Spring项目/index.html","b9c19bf75262f3348cfa9d3053a62a5f"],["/categories/index.html","dbe6d83fbbf9bcb2b467350f1d9937c2"],["/categories/中间件/index.html","2799d1739241135d6843362a21fb1f8b"],["/categories/前端/index.html","93474dc7112dc64aea7841025f188b49"],["/categories/随笔/index.html","83555ce94f25275add00fd6dc20c7e09"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","23913fa452e0a8e8929780ed66a2ccf4"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","fc115a8623fb1839867268775393796c"],["/page/3/index.html","279ef2daf0df6949804a6d7b6875d024"],["/sw-register.js","d4932f7855fb198261f12ef1fb5d9234"],["/tags/Android/index.html","35031f9c5433f3109f213dc54bd9ab71"],["/tags/Java/index.html","29ffc1f2353511cd774d9a879f4b7ef9"],["/tags/Java/page/2/index.html","6e0c4d04439e3e20a7fed766b55bc9b3"],["/tags/Python/index.html","49bf2f6b3d50e33ccc793beb6ace9f13"],["/tags/Redis/index.html","2afedbea8d23a6fc8cd56f6f107aa4e6"],["/tags/Spring/index.html","1cc221b4241f169d638c26b6f0fa8320"],["/tags/SpringBoot/index.html","c6189da6013c9be2f83e57119db00e6f"],["/tags/Vue/index.html","a21b08d7e31265cc7c8237dbff92f4d5"],["/tags/index.html","5b176495324d343b3bdad8ef06da76d3"],["/tags/中间件/index.html","75be6bf7f643c6ff023f7b17b19c403e"],["/tags/随笔/index.html","19bda478707538bc7125aaa3d919f081"]];
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
