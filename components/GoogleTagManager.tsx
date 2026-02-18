'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

function GoogleTagManagerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Inicializar Google Tag Manager
    if (typeof window !== 'undefined') {
      (function(w: any, d: any, s: string, l: string, i: string) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-PJ83S5F9');
    }
  }, []);

  useEffect(() => {
    // Track PageView on route change
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname + searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PJ83S5F9"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

export function GoogleTagManager() {
  return (
    <Suspense fallback={null}>
      <GoogleTagManagerInner />
    </Suspense>
  );
}

// Helper function para trackear eventos personalizados con GTM
export function trackGTMEvent(event: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
  }
}
