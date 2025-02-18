
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.ea70a685b40049cc0428.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9480.latest.pt-BR.f8f9d7cc5362e49c4869.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3103.latest.pt-BR.c0c0a91a2f44cb9e32d0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5816.latest.pt-BR.62966691cce79d1ce69d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.260afd73c5cab965b2d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4100.latest.pt-BR.8e7cc044415897fd13ea.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3147.latest.pt-BR.5cb97deead945b5bc3b3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/794.latest.pt-BR.f8a7f2bbf7aef3e0f8bf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4328.latest.pt-BR.6dc14514286ca744cba7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/648.latest.pt-BR.2027ff23e985eaa03142.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5455.latest.pt-BR.b46fd05b69e5027b2e12.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8024.latest.pt-BR.6bcbecb2da9631843446.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8217.latest.pt-BR.46b7dbd638857fb4ba10.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.c04aa83a1da474662738.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/9480.latest.pt-BR.520a79dd3a3eb9e62c75.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.a5ba0ed2da10cfd10d58.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.adb5111953bedc083ca7.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  