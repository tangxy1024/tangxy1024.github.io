/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/17/Android文件解析/index.html","0e04d9a2909009cda5e697d9b2888fa4"],["/2023/06/17/Broadcast/index.html","c6378f8d9d25f1b79d097458f8ed4795"],["/2023/06/17/Comparator/index.html","79a9e0fa66c390795bb6f559bf99878e"],["/2023/06/17/HOJ部署/index.html","1e5b630588d4650b4b6b39ccd55b9ca1"],["/2023/06/17/JUC/index.html","91ff4de1349afb785aa0a2ea0c1d3c32"],["/2023/06/17/JVM/index.html","ad32e315e80d8b402a11b68034f18679"],["/2023/06/17/Java-Comparator/index.html","fddccf141b5162142788da1a9e569c98"],["/2023/06/17/Java基础知识/index.html","99868f26ad65e6b6c9e8403ed7208ee8"],["/2023/06/17/Python基础/index.html","de655fb5f7001f91fd51902808632cd0"],["/2023/06/17/Python爬虫/index.html","194c25a2a508b443a137d8557f48d216"],["/2023/06/17/Redis/index.html","f0354963b4751e9882742a2c670a844b"],["/2023/06/17/SearchProjects部署/index.html","c1ae9322678c618c05273f8eff020c75"],["/2023/06/17/Shiro/index.html","de60189926fd9867156a7c5872f54bc5"],["/2023/06/17/SpringSecurity/index.html","04068bf39ef418f945cc0b61fb2eed8e"],["/2023/06/17/Stream流/index.html","00d3df14d1cca5141e529fb13afe5e27"],["/2023/06/17/UI/index.html","a09089511bd6c0d48dd35cfd7be904f7"],["/2023/06/17/Vue/index.html","00bcb2d7630d8211ceae2abde12ac98f"],["/2023/06/17/小白怎么读开源/index.html","746156120fff61f9e2707a98e8041cf7"],["/2023/06/17/持久化技术/index.html","142c39c3f9f713f208e596d1a16e5110"],["/2023/06/17/泛型/index.html","dbb86b1772a423d3b590c72ead93d064"],["/2023/06/17/瑞吉外卖笔记/index.html","60e56b661591e46dca915abf961112db"],["/2023/06/17/组件/index.html","129968a99e9991f54dfbf32a2a766030"],["/2023/06/17/面经总结/index.html","50e435ea758df9cec6841428d815a9ac"],["/2023/06/17/面试--项目工具/index.html","83ead54a7ea360fb5e10b1244b1e5582"],["/2023/06/17/面试题/index.html","1293412ae2597360c09c60199a4ea0c9"],["/archives/2023/06/index.html","0c15a08f89b1f7ae0be3c3f0cc5aaa4e"],["/archives/2023/06/page/2/index.html","01a34486de1e9c17cb193be5afd76bd3"],["/archives/2023/06/page/3/index.html","af3b7f0afbc265473433ad5ebebe31ac"],["/archives/2023/06/page/4/index.html","e96fdf39cfba624d5bc7612ed56fec48"],["/archives/2023/06/page/5/index.html","084036ace46cc43593bbbc4338cd9d7a"],["/archives/2023/index.html","22edb40802239e3fd591cd792885b454"],["/archives/2023/page/2/index.html","e293c5d75086815794a7c5e8e63a5544"],["/archives/2023/page/3/index.html","aee3586b2e905501f2ae7bffe1266069"],["/archives/2023/page/4/index.html","af999b1062ff14d17fa6ddf5cfe0812b"],["/archives/2023/page/5/index.html","3ce5350ca0021b56a84b5a18afe34dcf"],["/archives/index.html","b8a39c7bba964094748658045003da22"],["/archives/page/2/index.html","75e467f2fb0a7a3e06bf60de41a14950"],["/archives/page/3/index.html","cd0614cb3df456e6eac45ff0a09faf15"],["/archives/page/4/index.html","ddc22b77630d62498feab657bfc9644f"],["/archives/page/5/index.html","907dc8b99279ff1ff047e52583f077e7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","1604e84876fe40294f5f3f8e4591283a"],["/categories/Java/index.html","cc83e68e25078a680f51c1de574db313"],["/categories/Java/page/2/index.html","bcea1c929155c4f35badde91f6d282ca"],["/categories/Python/index.html","ade2147cd33485cd8c519b44fc2eb944"],["/categories/Spring/index.html","0e0b38668bf83f552a1c01b7064cf3f0"],["/categories/Spring项目/index.html","ca8700f1b47d20aaefd08f00bd2ce25e"],["/categories/index.html","bf9960b938dc555384e4c2dffc5554cd"],["/categories/中间件/index.html","63b5f5a872654e7f8462dcfa4f93d66e"],["/categories/前端/index.html","7844f9c7efc2b35df9a1742320d4ed1f"],["/categories/随笔/index.html","7918f4b45eec4aed9c26d0796adecccd"],["/categories/面试/index.html","99faded8457251077648b312f589509e"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","288166a5aeccfa7620c8da9eb9125c24"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","83ed29f47231c536dea4d4d3d76f4d34"],["/page/3/index.html","8ead4c1b03071c3a21e4d67a903c37f2"],["/sw-register.js","3c383c5798e4b76d5e3a9808252df24b"],["/tags/Android/index.html","cc63484592a3a1a25777ce5f668c5fc4"],["/tags/Java/index.html","a63a808251e1036bb9ebae4e6c750edd"],["/tags/Java/page/2/index.html","5d73e483ecfa17b44dd898f6343952b1"],["/tags/Python/index.html","325676dfe86c21fc33af7e962091c005"],["/tags/Redis/index.html","1e6425ceecb2a71a9fc40fbbbea87a03"],["/tags/Spring/index.html","289412b3a6aae70ba8102ad4914e417f"],["/tags/SpringBoot/index.html","bbee652d95b28fd8e3d1093397a663f0"],["/tags/Vue/index.html","50ee337b31903d27a812a38b1566bc0a"],["/tags/index.html","71f6afcf7d803966c40429e346f49c3b"],["/tags/中间件/index.html","752acd83a0faa61e2ff046c170ff934e"],["/tags/随笔/index.html","9cdc04a9a125cd3e742899a6920f783f"],["/tags/面试/index.html","11268a279daae963d3757574bf8cfd86"]];
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
