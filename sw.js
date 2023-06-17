/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/17/Android文件解析/index.html","6b73a6a06d525c0294c5b4864f3c843f"],["/2023/06/17/Broadcast/index.html","022377fb9a6832c855352635c6490efc"],["/2023/06/17/Comparator/index.html","36744072f3deaa9b6229ad0c2e4fdb4c"],["/2023/06/17/HOJ部署/index.html","a53843538cc92c8742f1802b65d9c241"],["/2023/06/17/JUC/index.html","c883a626c5cd59b89a46c397e406e107"],["/2023/06/17/JVM/index.html","7a4b04c6c3994042f61b6f9c5ac6011d"],["/2023/06/17/Java-Comparator/index.html","d86f4ff2383b4b03b1c0521d0ed82944"],["/2023/06/17/Java基础知识/index.html","422ea558333db0eaebe195cfe453d437"],["/2023/06/17/Python基础/index.html","18926cc06b926be14b3310c7f4719eaf"],["/2023/06/17/Python爬虫/index.html","a562ed7b4d7165030a5d2d4e32bbaa4e"],["/2023/06/17/Redis/index.html","09ae4bc8f6c7c65c60baa5e28577b327"],["/2023/06/17/SearchProjects部署/index.html","cf216d6abd0b5932bd8f27fa892f8af9"],["/2023/06/17/Shiro/index.html","11aefafc086070ccf8662c776143108c"],["/2023/06/17/SpringSecurity/index.html","c69bfdbe558320622bd5b01b5f6bf31d"],["/2023/06/17/Stream流/index.html","bc7692aabe0987ea440860bf55e96789"],["/2023/06/17/UI/index.html","e6629d8bc426b946b5bb5cdef34d3f90"],["/2023/06/17/Vue/index.html","e84a6d030fe99bcf3e1e38c4914bb9ad"],["/2023/06/17/小白怎么读开源/index.html","e099a01f8e5fc10dcb661bd9ac851b52"],["/2023/06/17/持久化技术/index.html","517a0f3e9a395e345452540aeabcec7d"],["/2023/06/17/泛型/index.html","aaa96e156c9383684922f6592ed3d886"],["/2023/06/17/瑞吉外卖笔记/index.html","0dfe00fccd90d599f034a2345768dd8d"],["/2023/06/17/组件/index.html","13f36ffa8c9a0a4f0f026d71bb2f0b38"],["/archives/2023/06/index.html","62b56437f80a126d22649d6740537bcd"],["/archives/2023/06/page/2/index.html","5953bac85edfff23c2ec2c40864a9ee4"],["/archives/2023/06/page/3/index.html","9989fd02a3293745e7d3e820018dd8b6"],["/archives/2023/06/page/4/index.html","1cd300707c1b008ad5b4ad93c1dd2046"],["/archives/2023/06/page/5/index.html","e80e475155a0abdc4880f925d5ab454b"],["/archives/2023/index.html","a793127664c575797d72b6740a0cd5b7"],["/archives/2023/page/2/index.html","e5d13aac6f2bfb8de0ea8fcfc7d3ccd3"],["/archives/2023/page/3/index.html","bf460f679bb60e0e2f5cf736f25d4906"],["/archives/2023/page/4/index.html","dbe01b4739f8e4674377356c53c992a8"],["/archives/2023/page/5/index.html","3a5b033b2e39485f174062d85a9a5109"],["/archives/index.html","41b576f6a2917af75ba684336a939bfa"],["/archives/page/2/index.html","4bb7bd05bc69411436d9661145d4b159"],["/archives/page/3/index.html","79841cb1e1c986e04ba746f020d23085"],["/archives/page/4/index.html","1351a5168d3d1bd1eb3733399831b847"],["/archives/page/5/index.html","b4a47263e543a7595bbf26b9142df7cf"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","c7983bc11e8ed1e314ec79ec5fa0f4a2"],["/categories/Java/index.html","62e48d78925e70a56b9994ce833cbe89"],["/categories/Java/page/2/index.html","cad3779248d09a60c4bba239dd860f6c"],["/categories/Python/index.html","0397517289064dde8aa0d4cb5dc3aab6"],["/categories/Spring/index.html","db2ee49daa0a4f53d3bed7b90b522025"],["/categories/Spring项目/index.html","3073e62d79fdc3190f607d96ce271128"],["/categories/index.html","7193912cd16c45222d4e3b56502a65bb"],["/categories/中间件/index.html","be69983ddc9a2fee2afc8c9ea22f1c53"],["/categories/前端/index.html","d5f5b9d5804664ec90fe3854d2ab28d1"],["/categories/随笔/index.html","fcd36fa982a4aeb823782bb9de94e29d"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","5416b7141b220cce3fd5585abca02d97"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","1866c33f661a8daa27f67d69e95f9534"],["/page/3/index.html","bb8c53f367a2b21acc018c25172ae728"],["/sw-register.js","aad3d86a3ddd6bbb8ba27f0fe6f5a9ce"],["/tags/Android/index.html","4fdef8b1623203c3a4b6ea3e4640e84e"],["/tags/Java/index.html","534dd40e48b477b620cffb3714b85d00"],["/tags/Java/page/2/index.html","8668d84949c964ca361e6740609769d6"],["/tags/Python/index.html","844d6d92b58bf28b39e4bc9547f05c48"],["/tags/Redis/index.html","ed077aef66db34144c7384804c2971fc"],["/tags/Spring/index.html","72b619aee0aef607bb0027739a699f55"],["/tags/SpringBoot/index.html","0bd79ed01738131b63ff510e16f45790"],["/tags/Vue/index.html","beaff6f8964ce4dbe0f17b2b84277c07"],["/tags/index.html","a47d2cd94403aab88e002291b8345533"],["/tags/中间件/index.html","fe078f66cfea19af02e33b795b96c46f"],["/tags/随笔/index.html","13f6ef52680830b70bceaf8797601451"]];
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
