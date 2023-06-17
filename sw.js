/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/14/test-category/index.html","a0631e31fad9b9a5c4dbbd34eba1ee11"],["/2023/06/17/Android文件解析/index.html","4d98aceb738156305f993646c55b7bda"],["/2023/06/17/Broadcast/index.html","228b37348bdb7d31edba3107c22ab5b5"],["/2023/06/17/Comparator/index.html","575582f2e70e351060667fcbcb2e2cc6"],["/2023/06/17/HOJ部署/index.html","1a7b88e91873f233d6fce44e9ba82c37"],["/2023/06/17/JUC/index.html","cdbd1b2b91a6579a4412cc220d04030c"],["/2023/06/17/JVM/index.html","f1f0f5de422ad90c089a965a46e619e6"],["/2023/06/17/Java-Comparator/index.html","0bb4d39743a15d4858ea2f82206dda51"],["/2023/06/17/Java基础知识/index.html","e64cc7a310878b2aa956f0629b81518d"],["/2023/06/17/Python基础/index.html","8b9e678046f06e53f4ca222730f0be50"],["/2023/06/17/Python爬虫/index.html","c7dd57ace234a451570619bd8c9af720"],["/2023/06/17/Redis/index.html","60a927b643a9f9999bcfcb705c8903db"],["/2023/06/17/SearchProjects部署/index.html","86cfed7293d90c5ff3983b2c628160e7"],["/2023/06/17/Shiro/index.html","a6bfa66d9123b9b5e5bdbb58c3963afc"],["/2023/06/17/SpringSecurity/index.html","7c5bdda7761a5494957b8fa7f1d0ba95"],["/2023/06/17/Stream流/index.html","0962041219b844a909e62448b1798140"],["/2023/06/17/UI/index.html","419d5995a66cd0d220653858a0e952d1"],["/2023/06/17/Vue/index.html","a0d257e5e56f8c0fb069e5f47784ddae"],["/2023/06/17/小白怎么读开源/index.html","079b2ac0965db6d302d7c6f8177d68d6"],["/2023/06/17/持久化技术/index.html","d09aeae83394e586b305f6d625e8b8d0"],["/2023/06/17/泛型/index.html","23a0726ab8ee311b27cdb303648f84cc"],["/2023/06/17/瑞吉外卖笔记/index.html","80288ba3080faa89ea7597737045082c"],["/2023/06/17/组件/index.html","5f0e51ed889af9a7895dc8ed3b2fcbb0"],["/2023/06/17/面经总结/index.html","e9d0a297779081340e5eb81b52bac01f"],["/2023/06/17/面试--项目工具/index.html","261e0f7ca60b1fef2e926b045a9d8a71"],["/2023/06/17/面试题/index.html","ded845f45a35ec2e6b11aca27601b136"],["/archives/2019/01/index.html","fb138b9613e173059caff14d77fca6ac"],["/archives/2019/index.html","ca55aa9bb222bfc58590c30abf42ed55"],["/archives/2023/06/index.html","4a5446a62d63a4672ea55ac1e2a3c328"],["/archives/2023/06/page/2/index.html","7aa2bd20a11fb5234c7114d7b42ec043"],["/archives/2023/06/page/3/index.html","c65ec83cf64aa2de8be2b67a48678c42"],["/archives/2023/06/page/4/index.html","89c2c13d4968c33cbd69644671cb050d"],["/archives/2023/06/page/5/index.html","75a292c5d35cbf64ce1d02899541084a"],["/archives/2023/index.html","e31dffb7496c9393713fbb8a55d81239"],["/archives/2023/page/2/index.html","1796f936cd322f2528bb2ce6dd3ede6c"],["/archives/2023/page/3/index.html","f2f4a3ff103a21035e502d9e3697b495"],["/archives/2023/page/4/index.html","4f945c8c3edb4d28eb1123a271900a30"],["/archives/2023/page/5/index.html","d6e7405d727ef909aaabbdcd1398cf27"],["/archives/index.html","9f99602f9cd0945fe1bf51ac1b1078e1"],["/archives/page/2/index.html","27737d3fec44b5a074082c6a6d0ca207"],["/archives/page/3/index.html","a2a5c6fcd8ece296aab38ef8b1b60e33"],["/archives/page/4/index.html","8f3592d7ac17b2f5135a87bad530c720"],["/archives/page/5/index.html","cb671dd1025f411ae679af841b0e0dc5"],["/archives/page/6/index.html","7b4ede51e2bbbabb3ae8ab3d4157db5e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","d8db90312145c9eba2491d19c29596c7"],["/categories/Java/index.html","2b0a9a63719be57f0ab3ac589b16d9a6"],["/categories/Java/page/2/index.html","3737851f5f56d16e32217d4cbc8ab872"],["/categories/Python/index.html","e543305818829e3b7584045dd74f8680"],["/categories/Spring/index.html","cd84797486b231b3a64f5216d5512a62"],["/categories/Spring项目/index.html","4bac94089dfe272c4ab18d2a897ad2b7"],["/categories/index.html","afec9ec9ac15d667d42f5faa5f1d53c0"],["/categories/test/index.html","c486746ac34321e37f3f837b25d4bcf2"],["/categories/中间件/index.html","505270692bdd9c3e78934d663eecccfa"],["/categories/前端/index.html","5039abf7f679a3e2a1c863e3a4aacffa"],["/categories/随笔/index.html","15c890d2a9704e7af7e0d63b1a5daee9"],["/categories/面试/index.html","d9edd6a9b4ba19554c160faa4392b15c"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","75e95f885a37513c9edb1c73049756db"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","e4de5c557fb722c82d05f59350cd93a8"],["/page/3/index.html","0be3b10aa81b1cfebf36872fbeba2e08"],["/sw-register.js","9cdaac8e6e20bb26728740642dc3bb03"],["/tags/Android/index.html","f7cabee702cf47fa6d12e7c360c0a7fb"],["/tags/Java/index.html","cd718ff4100c37c950cb62e03cb669dd"],["/tags/Java/page/2/index.html","83091096878eff59fee42a124b35ea45"],["/tags/Python/index.html","0779040be3fee8d4045b4503563a592f"],["/tags/Redis/index.html","1069593f59478804e67772baea16923f"],["/tags/Spring/index.html","bea11575bdcb0c6d03116ca4d762fa08"],["/tags/SpringBoot/index.html","b04318f8f4211ac3857bbd93a3dc9bec"],["/tags/Vue/index.html","8fca03fa31d6ad60f57f918d6c37f1d7"],["/tags/hexo/index.html","f3e1bfa99c77438f304dba869cc9f6d3"],["/tags/index.html","8ef28c633730072aeb61d13fcef0bfd1"],["/tags/test/index.html","7d00090520b97b817b21563084383581"],["/tags/中间件/index.html","4073ba4a9c5d33879fe601e66ecd0dfb"],["/tags/随笔/index.html","3723e294d3fdde804bd69d6e14db9bdb"],["/tags/面试/index.html","81fc1c7cda31419bd6e81fa3387f2aa1"]];
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
