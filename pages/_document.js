/* eslint-disable @next/next/no-css-tags */
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            id="bdt-uikit-css"
            href="/wp-content/plugins/bdthemes-element-pack/assets/css/bdt-uikit.css?ver=3.15.1"
            media="all"
          />
          <link
            rel="stylesheet"
            id="ep-helper-css"
            href="/wp-content/plugins/bdthemes-element-pack/assets/css/ep-helper.css?ver=6.12.2"
            media="all"
          />
          <link
            rel="stylesheet"
            id="ep-total-count-css"
            href="/wp-content/plugins/bdthemes-element-pack/assets/css/ep-total-count.css?ver=6.12.2"
            media="all"
          />
          <link
            rel="stylesheet"
            id="ep-advanced-icon-box-css"
            href="/wp-content/plugins/bdthemes-element-pack/assets/css/ep-advanced-icon-box.css?ver=6.12.2"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-frontend-css"
            href="/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.17.2"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-post-34-css"
            href="/wp-content/uploads/elementor/css/post-34.css?ver=1699620159"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-css"
            href="/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.23.0"
            media="all"
          />
          <link
            rel="stylesheet"
            id="swiper-css"
            href="/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-pro-css"
            href="/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css?ver=3.7.5"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-post-42-css"
            href="/wp-content/uploads/elementor/css/post-42.css?ver=1699620213"
            media="all"
          />
          <link
            rel="stylesheet"
            id="uicore_global-css"
            href="/wp-content/uploads/uicore-global.css?ver=4641"
            media="all"
          />
          <link
            rel="stylesheet"
            id="google-fonts-1-css"
            href="https://fonts.googleapis.com/css?family=Alata%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CInter%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap&ver=6.3.2"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-shared-0-css"
            href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-fa-solid-css"
            href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-fa-regular-css"
            href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/regular.min.css?ver=5.15.3"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-shared-1-css"
            href="/wp-content/plugins/uicore-framework/assets/fonts/themify-icons.css?ver=1.0.0"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-uicore-icons-css"
            href="/wp-content/plugins/uicore-framework/assets/fonts/themify-icons.css?ver=1.0.0"
            media="all"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossorigin
          />

          <link
            rel="shortcut icon"
            href="/wp-content/uploads/2023/11/snapedit_1699357069316.png"
          />
          <link
            rel="icon"
            href="/wp-content/uploads/2023/11/snapedit_1699357069316.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/wp-content/uploads/2023/11/snapedit_1699357069316.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/wp-content/uploads/2023/11/snapedit_1699357069316.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/wp-content/uploads/2023/11/snapedit_1699357069316.png"
          />
          <link
            rel="apple-touch-icon"
            href="/wp-content/uploads/2023/11/snapedit_1699357069316.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window._wpemojiSettings = {
                  "baseUrl": "https://s.w.org/images/core/emoji/14.0.0/72x72/",
                  "ext": ".png",
                  "svgUrl": "https://s.w.org/images/core/emoji/14.0.0/svg/",
                  "svgExt": ".svg",
                  "source": {
                    "concatemoji": "https://bityrummy.in/wp-includes/js/wp-emoji-release.min.js?ver=6.3.2"
                  }
                };
                !function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\uddfa\\ud83c\\uddf3","\\ud83c\\uddfa\\u200b\\ud83c\\uddf3")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!n(e,"\\ud83e\\udef1\\ud83c\\udffb\\u200d\\ud83e\\udef2\\ud83c\\udfff","\\ud83e\\udef1\\ud83c\\udffb\\u200b\\ud83e\\udef2\\ud83c\\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))})}((window,document),window._wpemojiSettings);
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
