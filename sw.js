/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/14/test-category/index.html","0ab54b0a42f07895d956b07efc735b0d"],["/2023/06/17/Android文件解析/index.html","982c1956354c29fee434b4345224c537"],["/2023/06/17/Broadcast/index.html","fb4b0fc855f138860b53682be2763221"],["/2023/06/17/Comparator/index.html","2ebff8dfeb0708a06ac51b5285d03dc0"],["/2023/06/17/HOJ部署/index.html","8980e1042e5410e91d48633286048d68"],["/2023/06/17/JUC/index.html","5142c8a8bf9de387036ffa83dd3038e0"],["/2023/06/17/JVM/index.html","fa4cc6d8aa74088c66ebd4f48317837e"],["/2023/06/17/Java-Comparator/index.html","bd0b65e8e26dc61732802c534f1a7fd4"],["/2023/06/17/Java基础知识/index.html","61432046719683716c44bc915b33d149"],["/2023/06/17/Python基础/index.html","ad4ce992a47ce79770734ff0a05acb67"],["/2023/06/17/Python爬虫/index.html","60f4b15c5bb66c9ee2786affeee4243e"],["/2023/06/17/Redis/index.html","72088b6f2b7c807591c47ace1bbe96b0"],["/2023/06/17/SearchProjects部署/index.html","9279d20f80cb5992857e4e09e80872de"],["/2023/06/17/Shiro/index.html","17140de198aaebd7815227e35fb1f4bf"],["/2023/06/17/SpringSecurity/index.html","17a00af56432a38598615159eda33db1"],["/2023/06/17/Stream流/index.html","3ab3bc6f0c8343509f00e98a431940c9"],["/2023/06/17/UI/index.html","11e1753a1e9b87a81b925bd36eb478ec"],["/2023/06/17/Vue/index.html","90046dd9778d871a81935817c1b82834"],["/2023/06/17/小白怎么读开源/index.html","5fd100b00856e7e11972962d46e53a4b"],["/2023/06/17/持久化技术/index.html","9bad48aae0eb2d3fd7b915290bc4dc11"],["/2023/06/17/泛型/index.html","8ff79d10839389ee936d2ed51f4ae7b1"],["/2023/06/17/瑞吉外卖笔记/index.html","1a47632cb5a73ff8d6eb00e570f8dd19"],["/2023/06/17/组件/index.html","6baf9961d27601deca5afc63cca4ca0b"],["/2023/06/17/面经总结/index.html","3617cba4dda0c0f9145c8407ff6eb9c7"],["/2023/06/17/面试--项目工具/index.html","9e0d616877a2f277fc66c7e975f4cd8f"],["/2023/06/17/面试题/index.html","388099d021d783ac1fdcfd771b2ac659"],["/archives/2019/01/index.html","d894277044c0f55d411ffbff4eeba2d1"],["/archives/2019/index.html","e241b24b1f1102d81e8806b695085a2a"],["/archives/2023/06/index.html","8eb996e8e394debd33746979dbd5d5c2"],["/archives/2023/06/page/2/index.html","236dd553046185e0f2c0753d2947011d"],["/archives/2023/06/page/3/index.html","cab4359af353807cb58e46a4d514bf66"],["/archives/2023/06/page/4/index.html","0844b1bb7f7af76e9f0102cb8ddeb965"],["/archives/2023/06/page/5/index.html","607a84a1e62cce3e32ae98e447aea8b7"],["/archives/2023/index.html","5a16cd05f885ee67f5e6a6e180a81aa6"],["/archives/2023/page/2/index.html","20933c2c9e1fb0afb99237a1f9f17dfe"],["/archives/2023/page/3/index.html","7a1101ee2a51c3930b31b3595cf1f9b4"],["/archives/2023/page/4/index.html","f87a22617650abb2a873a8fe5094d93e"],["/archives/2023/page/5/index.html","07f320e3c0d3042e2582d243d9b7bbf8"],["/archives/index.html","97faccad2bf6369b856e073f9ac5148a"],["/archives/page/2/index.html","6a49d28066b626fc007401d7adec9682"],["/archives/page/3/index.html","954ea9101d1d8dd6aa81ee0b076ac25a"],["/archives/page/4/index.html","ff8d354f2ee562410813affcf112251f"],["/archives/page/5/index.html","32af83452dbaeff4275cc92f25ddf3f0"],["/archives/page/6/index.html","3eaac7a6cb7a79341c3ad344e71264ef"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","1084619f7b7582aa3f6e05d1381c4e70"],["/categories/Java/index.html","5d69c607cb4ee5ee7a715cda05c27e10"],["/categories/Java/page/2/index.html","7f13909a30b4d82ee26cd102ddb33fb9"],["/categories/Python/index.html","cc5b6c7b251387b516069e0202292562"],["/categories/Spring/index.html","c593dec67572c8c4cdd692dd30f1767d"],["/categories/Spring项目/index.html","04590f67c2a7565923a24105aa280785"],["/categories/index.html","e4c35bba0b0b91b3c48dc5f617edb767"],["/categories/test/index.html","d304ed3b62ea6df7a14e1f114e1f6edc"],["/categories/中间件/index.html","d8c95e49757691c20a4b006e9fd89c95"],["/categories/前端/index.html","468d9ace0df546610e81de592e1e574b"],["/categories/随笔/index.html","b8bac918dc45ff400ac2ab0fd3c0eec4"],["/categories/面试/index.html","f829ab647f205d14b040c416625d5018"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","51cc87b67f8b1b075127c8fc55c0b9d4"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","b9b93c3e4130405c7a11b4edaa365569"],["/page/3/index.html","d1c035e0bfc4904f94b052d917c0b3e0"],["/sw-register.js","3306701332f7451f9e4e28753ada912f"],["/tags/Android/index.html","2fb0849daa43c30f1845e128ae81fb29"],["/tags/Java/index.html","592ff7e4b1be3a2bf121d429de904382"],["/tags/Java/page/2/index.html","21b605b9d7e3a71efbb3518ad2853d25"],["/tags/Python/index.html","2b10ab2070fc54291e3b4be2fb1c25d4"],["/tags/Redis/index.html","2344853b31bd294caf507bbc2a2eb7dd"],["/tags/Spring/index.html","daee8c8c5bbdc41d95bbed0600c4630e"],["/tags/SpringBoot/index.html","f81bd57095c1a40cfd777b5958442155"],["/tags/Vue/index.html","197113c7aec628ac675195c95283dc00"],["/tags/hexo/index.html","4dfa72dc2a889e50c75dd1e277967205"],["/tags/index.html","20f2d090b71a04123f411961c2f62504"],["/tags/test/index.html","0669672f5b0c57fc13a92fb818d057cd"],["/tags/中间件/index.html","2edb7d8fbba040a3b003b8f3eb8ce7b2"],["/tags/随笔/index.html","b741a4c6829ca33f64b9f3a072b5dab9"],["/tags/面试/index.html","1b3a2bc1f6f11b558a4b660111df019f"]];
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
