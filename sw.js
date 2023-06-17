/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/17/Android文件解析/index.html","68977a9c3dec208f28f297c17729e2ab"],["/2023/06/17/Broadcast/index.html","21d0e13fbdf65e7636df09a966413626"],["/2023/06/17/Comparator/index.html","7b9fb1419c9c58e83c80f7883c243bbf"],["/2023/06/17/HOJ部署/index.html","760ececcedfdd8339a9296b33073841c"],["/2023/06/17/JUC/index.html","26e409437a13f63d9d4e82b4e46a18c1"],["/2023/06/17/JVM/index.html","2b34812839b75e04d1d2ecb8970828b9"],["/2023/06/17/Java-Comparator/index.html","2638f0d0a38f4435ab9c04b2e489a3c8"],["/2023/06/17/Java基础知识/index.html","78318a0abe1e01e069bfbc07e5b4826c"],["/2023/06/17/Python基础/index.html","e5bf9ec949529f0fbdc8bf359869fd02"],["/2023/06/17/Python爬虫/index.html","fd0958eeb1e045ddb2a98c90560f7f7f"],["/2023/06/17/Redis/index.html","59fb464f1fd46d0b6d95a1c470328151"],["/2023/06/17/SearchProjects部署/index.html","3da9cf7f6e022e4fe7f9b4bc984f6db5"],["/2023/06/17/Shiro/index.html","07b09240b473a440f36d5c86810d8154"],["/2023/06/17/SpringSecurity/index.html","5ad483819be49819d1d559a74640654b"],["/2023/06/17/Stream流/index.html","28de0cc40019a1ed28f01884e1c4386a"],["/2023/06/17/UI/index.html","122041043624df5cb69bc9af383489d3"],["/2023/06/17/Vue/index.html","361445ea2d9e3f08606d149464f43aa5"],["/2023/06/17/小白怎么读开源/index.html","e4bbdd6246d97751e2cc3dd26a52b9c6"],["/2023/06/17/持久化技术/index.html","6cc3561731aee4e4e46c72ed9a87c2c7"],["/2023/06/17/泛型/index.html","029083479f1749d9b79548cda3fa2b92"],["/2023/06/17/瑞吉外卖笔记/index.html","fa5d7194d8bc208f3b9be0baffb22451"],["/2023/06/17/组件/index.html","3c55a8c025de997df57d5c653161def4"],["/2023/06/17/面经总结/index.html","d9f49c745d4a2f191446a6a8e246f09f"],["/2023/06/17/面试--项目工具/index.html","a123c41716bec9398f9248c2bf7d3c57"],["/2023/06/17/面试题/index.html","21d9c82a1d672ca24c1e87b3df10b9c3"],["/archives/2023/06/index.html","818fde0a32d704c744a81e031c60e52f"],["/archives/2023/06/page/2/index.html","910f3d508b171b0b387eab154d9fa7dc"],["/archives/2023/06/page/3/index.html","99bb8a797a4ebaa874c3b10190bd48c4"],["/archives/2023/06/page/4/index.html","46e6f24883145e05384d098a95a5f034"],["/archives/2023/06/page/5/index.html","b65f4425a58cda0da2532d25dacfc39d"],["/archives/2023/index.html","4574846da4978ca63b3b741619d5336a"],["/archives/2023/page/2/index.html","aa0435f359de85dbd49536e9d84de0da"],["/archives/2023/page/3/index.html","a185b5572887c19a54fc11bd60646e69"],["/archives/2023/page/4/index.html","3aed06cdb233850ab1aa657e8fe02e20"],["/archives/2023/page/5/index.html","2061bf639d99f0dcdccf712659c90370"],["/archives/index.html","a4938555924134bd4f32f376051659bd"],["/archives/page/2/index.html","5e5292727fec3aafd4cfadd19b811c72"],["/archives/page/3/index.html","403626f2a0a1bf8de495686ee89db85a"],["/archives/page/4/index.html","20b5d363e56c134a925b9241d79c4627"],["/archives/page/5/index.html","f83c91f403082f68b6bb48343e5a6d8d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","58135dfe1256258eda799d8d0d490bf8"],["/categories/Java/index.html","c3a7489730dd625e20c7124ecd1214ee"],["/categories/Java/page/2/index.html","95ae23417b80d04a2235208fc0f7c84c"],["/categories/Python/index.html","4f5145f530756d4be4f79497d48dc28d"],["/categories/Spring/index.html","a1de6c0cfb91b62b448f612dff47534f"],["/categories/Spring项目/index.html","8eef7dbb7d4ae4a0a6d57e72944ddea1"],["/categories/index.html","2d6d16924c8af5505ab77b1fc5fc1522"],["/categories/中间件/index.html","bb20395a9a4bca9ae4935ecb39d22323"],["/categories/前端/index.html","61570b435149ea78258b833eece516c3"],["/categories/随笔/index.html","8455f18cabbc54617e9ea3f4795bfd03"],["/categories/面试/index.html","7e1b835afd395513b7ef4868fb863560"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","0af94a98555d368223500bc7752cb656"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","31d4c190cf3bff245077649ac6ab583b"],["/page/3/index.html","2b7c3c0f2625a615a96615906966d76e"],["/sw-register.js","0a130d828409bcd30a0c16ad653e86d6"],["/tags/Android/index.html","527704753933bbcbd5c3224e549582da"],["/tags/Java/index.html","6d1e01558039be5b43cb96b47627a16c"],["/tags/Java/page/2/index.html","c75056c93ae32e118bcabb5f08ed9f86"],["/tags/Python/index.html","b015e0d509a5c3005d84f9301d1f8440"],["/tags/Redis/index.html","6d096845b91aacd191857c6288960d20"],["/tags/Spring/index.html","93ea44f18af70b042bb1c1a8ddfb30cc"],["/tags/SpringBoot/index.html","7febada28e9bb52d92b4a5e43e51ca18"],["/tags/Vue/index.html","b5c027ee6c6262eb56a9bd1a3a23edcf"],["/tags/index.html","672e4dc627454e7ba06afcad0404c498"],["/tags/中间件/index.html","e2a9d91eaefeabef749f73968876d2e5"],["/tags/随笔/index.html","ce25994f4260b01c6282976197729513"],["/tags/面试/index.html","fe8e5a9280da5ed236f10f7491b7d633"]];
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
