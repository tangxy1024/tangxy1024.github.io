/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/17/Android文件解析/index.html","431dfa4c302e52744a3b510d36e6f1e0"],["/2023/06/17/Broadcast/index.html","05f57de8bec96516b3e6022be61f8eda"],["/2023/06/17/Comparator/index.html","a209c300d20a334844a1307e09e32c3e"],["/2023/06/17/HOJ部署/index.html","85c7e0ff118eafe76df31eca71e2c79c"],["/2023/06/17/JUC/index.html","e85b4bb2afcdd2b5cf0f1ab73546b900"],["/2023/06/17/JVM/index.html","05f395c5a3ae1b995c4a69c35da7ad11"],["/2023/06/17/Java-Comparator/index.html","7d9594f19d962a3bf492099ecd4654de"],["/2023/06/17/Java基础知识/index.html","21c9c1f6ff64ee5280b3c3778ec70a96"],["/2023/06/17/Python基础/index.html","e8f9d7a40e9b250533642971b77a89db"],["/2023/06/17/Python爬虫/index.html","721c86731d8ea569739f3c16f96912f5"],["/2023/06/17/Redis/index.html","fd40c64d50aa2c69f008f5a19bdd9eb9"],["/2023/06/17/SearchProjects部署/index.html","45ba85b3c8e14b16a540f03cefab5cf6"],["/2023/06/17/Shiro/index.html","22e5e7c287c7574b1b8ed600375453ec"],["/2023/06/17/SpringSecurity/index.html","a503633259006262a0b2f5196cb40462"],["/2023/06/17/Stream流/index.html","fc2795a500fc54ba3b8e2108554089e4"],["/2023/06/17/UI/index.html","79d77bff5eb2c37202ab8a0286687971"],["/2023/06/17/Vue/index.html","7954920c9352b7810b7d397464c0f66c"],["/2023/06/17/小白怎么读开源/index.html","cdca5589ee86a2f6dfe963af2599854b"],["/2023/06/17/持久化技术/index.html","c6f6bea4db3e82867ffe3c48e32f312c"],["/2023/06/17/泛型/index.html","c46d3d28dc13f99a56931bed83a01c96"],["/2023/06/17/瑞吉外卖笔记/index.html","9686088f5eeb89eead55c62f54d4003a"],["/2023/06/17/组件/index.html","b3a8e42508048570829339813b3047c8"],["/2023/06/17/面经总结/index.html","ddf823b83c077c363ac657d68a87a23e"],["/2023/06/17/面试--项目工具/index.html","2025a99fd7c01fded5303149236b2121"],["/2023/06/17/面试题/index.html","e2f1dd75cf43603092278de87dd4ee92"],["/archives/2023/06/index.html","83973b108f3218d1426cd59aa2dfd30c"],["/archives/2023/06/page/2/index.html","cca91f037c63ab73b2c5dfee868b8dfc"],["/archives/2023/06/page/3/index.html","444bd7f28e3d4ec321c0f55ec7dd88a1"],["/archives/2023/06/page/4/index.html","34d68f7da02ca39691023b4d222b889a"],["/archives/2023/06/page/5/index.html","c1f9bf5158bfe37190d723c568ac1f3c"],["/archives/2023/index.html","4069a2fe96c0fddc2a23ea9ab162f9b3"],["/archives/2023/page/2/index.html","47559b22bd3432eb7a24f8c6bab128a7"],["/archives/2023/page/3/index.html","f1ce6312c3e1d16efdc343e56d679baf"],["/archives/2023/page/4/index.html","130ae69bea92892ab682c6210b29d147"],["/archives/2023/page/5/index.html","667a7f6afac36a39801c21c9e40d0d20"],["/archives/index.html","17b7ad3d27b7debbd5f870c7d99ff1eb"],["/archives/page/2/index.html","f64c580a4446893e223b9ac824c67bf3"],["/archives/page/3/index.html","c4868fffe12267dc767b7fe69ebd0411"],["/archives/page/4/index.html","d6d4be56d520e87eb0028068419e3927"],["/archives/page/5/index.html","fb5d24048d9fd48c3e6757ee21b398d4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","494c656d80703cfc5ca3563f720b3036"],["/categories/Java/index.html","e00a313a7be434c871efaf4a791896d0"],["/categories/Java/page/2/index.html","0780080ddbe7584a6b1c8801c32c62a6"],["/categories/Python/index.html","f08bc21f9d414e8b977e599b8fe4980b"],["/categories/Spring/index.html","073fb07bc0f30a62d7b1a9e8d79b87aa"],["/categories/Spring项目/index.html","cb852611b3aef439f5370e6fbfc91ed8"],["/categories/index.html","41b6bef9086dcfd39ebbb43fa69fb07e"],["/categories/中间件/index.html","6088976ad896a7d85db14f4ef19f156b"],["/categories/前端/index.html","613885513bd1b01b16df8f34a4ae49ec"],["/categories/随笔/index.html","dd77d14f46371274ed57a8919043bba7"],["/categories/面试/index.html","1862d6d228594636318e97947fb88262"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","cdc5e35d8c428eab0e6fbef4156d7e72"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","b9ac8a5e4adb9c377554630d91b402e0"],["/page/3/index.html","de21cb7ffcfed3b38a5f4d3a7c0d62b7"],["/sw-register.js","afdf03e22490fa188ec35f08fe2cec15"],["/tags/Android/index.html","e0bc6e98d4fdedc207ed9f552fa9959a"],["/tags/Java/index.html","affa33674edded57c20c789859985b01"],["/tags/Java/page/2/index.html","e417218be13a57f95d2b5d1f5753a31c"],["/tags/Python/index.html","427504008c7324a12a08d313619e626a"],["/tags/Redis/index.html","9419ebbb8559d9e02d0d2268a6dbb4fe"],["/tags/Spring/index.html","9574e65e5f24e93809ff9a7e4366dd01"],["/tags/SpringBoot/index.html","cf4ed5e0cb69a23e278b069799fcd44a"],["/tags/Vue/index.html","4e5e532d5a4e1fe01be0bd92afcbb42a"],["/tags/index.html","f0d33c5e6f641a5753984df2db4dae72"],["/tags/中间件/index.html","e278d8309eb284801c084cd140eb07e4"],["/tags/随笔/index.html","dabe0f4085e4841dd70a8fff3f9b3a6b"],["/tags/面试/index.html","9aa829321775f37e557ce6d25709acb4"]];
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
