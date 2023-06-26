import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const isRootPage = router.pathname === '/';
  
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  };
export default MyApp;