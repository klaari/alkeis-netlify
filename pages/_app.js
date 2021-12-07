import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import '@styles/globals.css'

function Application({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    Fathom.load('QTSIXZWA', {
      includedDomains: ['alkeis.com'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />
}

export default Application
