/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/14/test-category/index.html","20c78de9b3d7d0da2be30cb2dc21a2fa"],["/2023/06/17/Android文件解析/index.html","fd4776607b718229aa6afd9d0ee179a3"],["/2023/06/17/Broadcast/index.html","3b7cb1e8d8c99ab8d89b0b4e1a1d36d8"],["/2023/06/17/Comparator/index.html","3b5d2b7177533701f9b510a09e7daeb9"],["/2023/06/17/HOJ部署/index.html","b7328b5dfc2a8863333ccd72854230b4"],["/2023/06/17/JUC/index.html","c2e10c481275d9557483aa06e5344a9a"],["/2023/06/17/JVM/index.html","2b157f8256e91ab35ddd1019855520d8"],["/2023/06/17/Java-Comparator/index.html","c4864e0202d0d8ca61cb41f6cf710e75"],["/2023/06/17/Java基础知识/index.html","c8a432bb173f150ce7823c7be03bb524"],["/2023/06/17/Python基础/index.html","d8081afb152d20fc1c4c6d05ebb7a637"],["/2023/06/17/Python爬虫/index.html","e002b5a1d1c1c39ac9fea08dcf0b3632"],["/2023/06/17/Redis/index.html","970244a2af8950a7defb6d56541c3398"],["/2023/06/17/SearchProjects部署/index.html","57753db2dc7490970e109460b8d89f10"],["/2023/06/17/Shiro/index.html","46f3b6cd3d7068af9d9425f937c950bf"],["/2023/06/17/SpringSecurity/index.html","6d748d1f252a56fafd5680316779e9f8"],["/2023/06/17/Stream流/index.html","cb92afd20714e602c7dfcea516d0754f"],["/2023/06/17/UI/index.html","49cad6c2f8514a2d1a557d2011a07d2b"],["/2023/06/17/Vue/index.html","0af73dce28141cb27ba98c3473a21710"],["/2023/06/17/小白怎么读开源/index.html","9f2ed6ad761d81bea028c69b483ccc77"],["/2023/06/17/持久化技术/index.html","7e03a0a57cfc1bc2f8a29606582c46f0"],["/2023/06/17/泛型/index.html","05d86bd4fd448ad0b51d80a99d243feb"],["/2023/06/17/瑞吉外卖笔记/index.html","4487775b2bd84267420980c1011398ee"],["/2023/06/17/组件/index.html","eaa75486345a788150e1be02c97fe74e"],["/archives/2019/01/index.html","4733a7ce4fdd6b0aa48e6333330deb9e"],["/archives/2019/index.html","0e4d49b6c7be1d8baf48e942e6e34c5e"],["/archives/2023/06/index.html","2593a190da6009e735bcc3e46be82edc"],["/archives/2023/06/page/2/index.html","e70939d9b439d125ed30e2391c036a09"],["/archives/2023/06/page/3/index.html","99df4836915e39357e98a40ee281255f"],["/archives/2023/06/page/4/index.html","8ee6cbb26a54169a18bb5c019c540c02"],["/archives/2023/06/page/5/index.html","47f5857c82532f9750966bfa28854ec8"],["/archives/2023/index.html","9ef9d33849c03e2f1f2812e8b4b37114"],["/archives/2023/page/2/index.html","b4d260327168f58351c868b9f4d8216a"],["/archives/2023/page/3/index.html","e3ca121b21a5a0d748e8e854637934c9"],["/archives/2023/page/4/index.html","b5977c6687a8ff823d5d3446b2409dd6"],["/archives/2023/page/5/index.html","2b28b3b7105003f7aa9d1cbbe5a992c9"],["/archives/index.html","36b3c2e09ab779f66202e3302868528e"],["/archives/page/2/index.html","d796e3b8548e83e251aefa089f7c3b77"],["/archives/page/3/index.html","772fb6afc867bd2be78084f3ea0a0f51"],["/archives/page/4/index.html","4c4c45b2ec853abab9ec4a370ecfb504"],["/archives/page/5/index.html","ca79710d9b7e1a7093a03fcd38213cf5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Android/index.html","a1643f769087883bbe62cfe2fb6635d8"],["/categories/Java/index.html","086243fbb81f80739378f216b0c4f37c"],["/categories/Java/page/2/index.html","26704ded212903ef8f717bc401e8ea62"],["/categories/Python/index.html","9ed39842068a01ea558a1713990fd7fe"],["/categories/Spring/index.html","d763993645ac9670ddff36e9d6bf5641"],["/categories/Spring项目/index.html","abd97f7b95830048c68070426fad4d88"],["/categories/index.html","8ad0cc92845d5b29ecbe826c157e9593"],["/categories/test/index.html","7b914da8eab5c6ecddd531659797aa30"],["/categories/中间件/index.html","173d3041ff7814fcdd077d85e7be266c"],["/categories/前端/index.html","f5161848e82e3146c745c9e8c8704f42"],["/categories/随笔/index.html","cf16b6f63fd2b7a9961492efb5bebae3"],["/css/index.css","870c6b7c39188fe01e673009c9c10979"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.png","92ea6f3a3960c6b89061afe23566a282"],["/img/banner1.jpg","4c6fefeaeca4a59c193ec9a9334de4a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","2af4a9c634d4b3aa53e3b6dc1d733252"],["/index.html","5c36030ff2e2e440ca870d46450736e1"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","11d11a6c3badf41c78d877382e677cde"],["/page/3/index.html","4bd61a68ba42071e40b9bc28d298f3f6"],["/sw-register.js","339b4adf3a1eeb298c58dbc3810920df"],["/tags/Android/index.html","11538ff10bae25f476de0f14434129e8"],["/tags/Java/index.html","69fdc7d41b556cd760e0efbd50e2eaa8"],["/tags/Java/page/2/index.html","cbc3bcb4c12a504a6624fd33b1a22500"],["/tags/Python/index.html","5b6a74f577dbd28f6d5f9fe82041589f"],["/tags/Spring/index.html","70289f800b753b5f54a64b4cc5e1fe00"],["/tags/SpringBoot/index.html","8eb1cc4f0c0888d5cb51f32aed24df36"],["/tags/Vue/index.html","ed0a3409cafe99f873c3b6cd52c41bc3"],["/tags/hexo/index.html","18fed55cb51cdd8bceadef25f1e57515"],["/tags/index.html","5a9c804b20b386452f63c95b0d4ceae7"],["/tags/test/index.html","2f134086673d37cbbeb495f34ad5958c"],["/tags/中间件/index.html","d042ce381855688f8438153dcc6ea875"],["/tags/随笔/index.html","cf5d6caa466569e2d6532563414d81dc"]];
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
