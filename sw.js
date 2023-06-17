/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/17/Android文件解析/index.html","aac77bc0324bc542cc575e34da0b71c4"],["/2023/06/17/Broadcast/index.html","1a1a17e14b42b794c35923e9f28db476"],["/2023/06/17/Comparator/index.html","c49c78dd22dc7045c88dc0f34dfa9646"],["/2023/06/17/HOJ部署/index.html","0721987a0b72a3d5691435154d1cac2e"],["/2023/06/17/JUC/index.html","56ca0a4105d877c054bfc96610170ae5"],["/2023/06/17/JVM/index.html","06f3db4e47938a62a6895b38c8c4dc44"],["/2023/06/17/Java-Comparator/index.html","8c03889edc4a4d1e95eb71841891efef"],["/2023/06/17/Java基础知识/index.html","a2ce22596657b172cfd58b27b38a5904"],["/2023/06/17/Python基础/index.html","f7aa0f842cede9138462fc725ea683dc"],["/2023/06/17/Python爬虫/index.html","5ae598ec7d42a0f996fd9c348dd64fe1"],["/2023/06/17/Redis/index.html","729954572b7cc394d45cf8f9499e3efd"],["/2023/06/17/SearchProjects部署/index.html","c9b4d28f1f514b87540d87c247613e70"],["/2023/06/17/Shiro/index.html","6e4f4e03bc3e29c309775d4d0610d2d2"],["/2023/06/17/SpringSecurity/index.html","5b1c5cb26e2197f9adca6e55981155ba"],["/2023/06/17/Stream流/index.html","400082c3d31d81f34775cc6be9024a74"],["/2023/06/17/UI/index.html","a6e5eaac2ffce58402f561e5eb36c1db"],["/2023/06/17/Vue/index.html","0f9f16f8759d3f83d5905cc73798ee3b"],["/2023/06/17/小白怎么读开源/index.html","7e43ade84ba41923268a733f48989694"],["/2023/06/17/持久化技术/index.html","a30529f9a69f502f91318a72de542905"],["/2023/06/17/泛型/index.html","0d8e35e1f6a06464b57b555889921035"],["/2023/06/17/瑞吉外卖笔记/index.html","693eb4704c4fd70e96ca36c99d8ff32a"],["/2023/06/17/组件/index.html","ebcb9d13afa8d43b8730034270a123d4"],["/2023/06/17/面经总结/index.html","6a0e51478dc8a61bfbec5e3cc77547ae"],["/2023/06/17/面试--项目工具/index.html","c613dce6343076299ce2dae98083077a"],["/2023/06/17/面试题/index.html","08f3cd1353f16ffbe013b16b7b98e58e"],["/archives/2023/06/index.html","194ed885164c9dd4ecfdeb475104c58f"],["/archives/2023/06/page/2/index.html","0345749140d828f36e43d118833f763e"],["/archives/2023/06/page/3/index.html","6b54cd9606f2ef1c22d578f2473b6562"],["/archives/2023/06/page/4/index.html","304ec1df438ffae2b14fb9a2bd8cfb65"],["/archives/2023/06/page/5/index.html","be3c58bb8b0c6ebaec64ab3689c43e6f"],["/archives/2023/index.html","76200c204698abfc71d2bdbdfaf86273"],["/archives/2023/page/2/index.html","a6ca341cff60c4835e52d9c272ccb46d"],["/archives/2023/page/3/index.html","c05ee4f58e5a46b1b9a6948342e82ede"],["/archives/2023/page/4/index.html","3a82415db00aa3f5bfac56c9b2d43e6d"],["/archives/2023/page/5/index.html","11423111bd08f609c846ac8fcae67b30"],["/archives/index.html","21cc7e8476ecb1b8260d1f5a64fb8016"],["/archives/page/2/index.html","b58017a8e1a2395904c9c3b541176d34"],["/archives/page/3/index.html","f52681e8653ad79a615a84c368a97dd3"],["/archives/page/4/index.html","5cb8357fe31dae15c36bd1aaf817cb81"],["/archives/page/5/index.html","a909cd61aae35e622166b74830847192"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","0263218e345e5718d1663668d685171b"],["/categories/Java/index.html","8ee01054376d49c76e34e7148e82f565"],["/categories/Java/page/2/index.html","325da9f0b5df0b16995d2b9f73973ce9"],["/categories/Python/index.html","1ec0c51dd588db8f6b21742dc584c9c1"],["/categories/Spring/index.html","5bce438c8a6be4193fcb11f8f2941b1e"],["/categories/Spring项目/index.html","5fe8862b655dc4815c2aa6b0ec8086a4"],["/categories/index.html","00fe31241a87c759a6674f069b682795"],["/categories/中间件/index.html","22847c03cca4ad039f6f8acbc93f5519"],["/categories/前端/index.html","a21a167c5b2092e80e324d25e298619e"],["/categories/随笔/index.html","d421004213c923ae5d3601d2b25c02ea"],["/categories/面试/index.html","6a6c092757ef1d7760e19efa10dcaff4"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","cc8523ed2c730deaf6b5df0fae962e63"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","4eb41d1dfb02edcaaecadb10dd18d6d6"],["/page/3/index.html","600911a92de3fa2f90be68c6b41d2118"],["/sw-register.js","69c79ed1ecbc67db8febaf365d337602"],["/tags/Android/index.html","ead488e0f5061de895698105724be4a2"],["/tags/Java/index.html","4b06a7fbd44738918366bf6aa86d8016"],["/tags/Java/page/2/index.html","c68aeb60318472bde0f66006d5dc8bcc"],["/tags/Python/index.html","08c88ea50e4f6ec440026bd6c02ade02"],["/tags/Redis/index.html","468fce654790dbc45a9a9aeb8e9acdff"],["/tags/Spring/index.html","85162ac1b8a69fc62c6a60e622abdeac"],["/tags/SpringBoot/index.html","277fd87c3c9a5d88eae65ae714af7f39"],["/tags/Vue/index.html","62560a182247e2d4980fa77977f03c6e"],["/tags/index.html","0b7375a5bfd46dff3e9373161cef9da9"],["/tags/中间件/index.html","807ef1e4f0306bb5a1fb1ff053245740"],["/tags/随笔/index.html","0dad3ab0b36ade1d58e1751561d9cbdb"],["/tags/面试/index.html","35a19f3a9439fbddfd224a76b42404b2"]];
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
