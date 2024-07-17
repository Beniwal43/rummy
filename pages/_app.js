/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/no-sync-scripts */
import "@/styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="/wp-includes/js/jquery/jquery.min.js?ver=3.7.0' id='jquery-core-js"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1' id='jquery-migrate-js"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/uploads/uicore-global.js?ver=4641"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/bdthemes-element-pack/assets/vendor/js/countUp.min.js?ver=2.0.4"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/bdthemes-element-pack/assets/js/bdt-uikit.min.js?ver=3.15.1"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.17.2"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.17.2"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.17.2"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/bdthemes-element-pack/assets/js/modules/ep-total-count.min.js?ver=6.12.2"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/bdthemes-element-pack/assets/js/modules/ep-advanced-icon-box.min.js?ver=6.12.2"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/bdthemes-element-pack/assets/js/common/helper.min.js?ver=6.12.2"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.7.5"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.11"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.7.5"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
      <Script
        src="/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.7.5"
        strategy="lazyOnload"
        onLoad={() => console.log(`Script loaded correctly.`)}
      />
    </>
  );
}

export default MyApp;
