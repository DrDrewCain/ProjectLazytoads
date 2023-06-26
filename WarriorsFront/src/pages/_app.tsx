import React from 'react';
import { AppProps } from 'next/app';
import Navigation from '../app/components/Navigation';
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