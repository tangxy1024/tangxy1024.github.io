/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/14/test-category/index.html","6a952804688724030faf484f3d41b327"],["/2023/06/17/Android文件解析/index.html","c2881683999847cd270ad36201f8ed45"],["/2023/06/17/Broadcast/index.html","01c846f3e9eeeb8cb887d9012d7da92c"],["/2023/06/17/Comparator/index.html","d6f94aca7be0cc0dd264e5f5a65bacff"],["/2023/06/17/HOJ部署/index.html","f339aa2993f44b89bd343f2e6613ca91"],["/2023/06/17/JUC/index.html","93b6a66dfbef187b487b7b828bbe69b7"],["/2023/06/17/JVM/index.html","d0f3e37993cf3aa812fb46bd4f1f7110"],["/2023/06/17/Java-Comparator/index.html","4fed12830a89dd7c296a968a753f4e23"],["/2023/06/17/Java基础知识/index.html","cc1d6ed463c2cafea56d9960fc6c7482"],["/2023/06/17/Python基础/index.html","63c77fbc285ff118cc43e8e83470abd0"],["/2023/06/17/Python爬虫/index.html","a1d56c1205edee5a635d44eda93340db"],["/2023/06/17/Redis/index.html","59fb87440031a77578d0eafeadc1e474"],["/2023/06/17/SearchProjects部署/index.html","f80da63ec2f142ae1e7b9db4a1d8f232"],["/2023/06/17/Shiro/index.html","72eeee4fe02cb5deb681a8a51da95647"],["/2023/06/17/SpringSecurity/index.html","e8843ae60dbb46a4ea42fe5b1d1b3d3e"],["/2023/06/17/Stream流/index.html","3f0e54877643347e9f8ff2c57b2d7cd8"],["/2023/06/17/UI/index.html","3b8f97fd96034fa165ec0fed22f41063"],["/2023/06/17/Vue/index.html","30cfb6e8d6d7d8b0e9cdb4f99309736a"],["/2023/06/17/小白怎么读开源/index.html","d367c61ab108a8de4ac8f0ed1e30a782"],["/2023/06/17/持久化技术/index.html","1c35f05d9295b44c17706a5b1420c2ea"],["/2023/06/17/泛型/index.html","a6cde01e825d6d5db4b2b1d37144d5d9"],["/2023/06/17/瑞吉外卖笔记/index.html","9c14cb423a75f17dae092b56b368d9b2"],["/2023/06/17/组件/index.html","178f86ff1d5723d61c8114de600dc5bb"],["/archives/2019/01/index.html","d81b357dc059edbfb3e918533ffd0537"],["/archives/2019/index.html","d00db9f0985f2edea5a4c180946ddbce"],["/archives/2023/06/index.html","2167e02f49f197d24d72853e9bdc2c3d"],["/archives/2023/06/page/2/index.html","4f17bf9ab91b49f5493b49bba87ebb70"],["/archives/2023/06/page/3/index.html","71878f563566cd325e6a51d13d44bc9c"],["/archives/2023/06/page/4/index.html","f1a2c3497609963a7db8e050b5471bd4"],["/archives/2023/06/page/5/index.html","a86a589d9eeff590914460798b8c4fa4"],["/archives/2023/index.html","03e9da2bfd637459e8582b649c263f03"],["/archives/2023/page/2/index.html","d4d8d46ee02b06178718fe34819a23c0"],["/archives/2023/page/3/index.html","7175c9a0365e4f934a6e11afd65b2649"],["/archives/2023/page/4/index.html","76e09e52d2d76cbca4ec3b34c01230a8"],["/archives/2023/page/5/index.html","9839623b1764ba81549e744cab153387"],["/archives/index.html","0d8fed930adc11e8668d4d0d41e29cdc"],["/archives/page/2/index.html","7d4ec1d238f8cbe98fa55c1f1a114025"],["/archives/page/3/index.html","3d24d4b61a771814b649bf95ee1866d6"],["/archives/page/4/index.html","b6642bcfe5ba629ecce2daf9fbdc62e6"],["/archives/page/5/index.html","64d608c0049054eec21e38a066f40648"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","bed380392949ba26b50bdaaca4e36dde"],["/categories/Java/index.html","989d97227b10c46dfa36ce83b885362e"],["/categories/Java/page/2/index.html","17fb96ced010b2501f157ef5cac39bf3"],["/categories/Python/index.html","8bc09daa594377c91fa74e02b97643fe"],["/categories/Spring/index.html","f53a05d196280dd3853b7f7bffd4660f"],["/categories/Spring项目/index.html","3653386e9c1d205158382728b9f537bd"],["/categories/index.html","73b81e7a6e9a4bd61312b2394d4791b1"],["/categories/test/index.html","aabd294c20245698c75f96afd4d4e90f"],["/categories/中间件/index.html","dc1d873ee9fdb3bc5361baed46a022de"],["/categories/前端/index.html","3b3046ebd267ec39de9eba17e59199db"],["/categories/随笔/index.html","8ec468fb424c93cdeb9c05769fdb232e"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","3b96108e8a687da1d14e94b79f1f0628"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","6b2a7a0e673d16f79aee5980ef5f0e2a"],["/page/3/index.html","9d1f9c7d5f9a38b1ab5ba37e413b9378"],["/sw-register.js","040b22870d50b0798037b54ce47a6f73"],["/tags/Android/index.html","2a297c7f6b9ef1dc257d49e6c1d435b6"],["/tags/Java/index.html","8147be6cf045e4e17f58c747664ddd86"],["/tags/Java/page/2/index.html","1d6d20138915f99670c4bd7f1e32532d"],["/tags/Python/index.html","6a5a47e74238ed45ef4ae559e543e0aa"],["/tags/Spring/index.html","5ffd8806504f7d1544b1308a93b4f4a0"],["/tags/SpringBoot/index.html","7d52a1156563ef422d0b7ec53fdf8c49"],["/tags/Vue/index.html","5fbc9bc420fa45fd4f8d0293c477c709"],["/tags/hexo/index.html","75541a1799ec47ef2af1c88ba6586325"],["/tags/index.html","35ec80990376094c711ec425c6428640"],["/tags/test/index.html","891007bc62d33c8fae1f7833d54cdedc"],["/tags/中间件/index.html","88c33674f191901540533164d13d54fd"],["/tags/随笔/index.html","d525d26e95d3ce5221a912a1f561603d"]];
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
