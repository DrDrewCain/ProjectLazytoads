import React from 'react';
import { AppProps } from 'next/app';
import Home from './home';
import Navigation from '../app/components/Navigation';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
  
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  };
export default MyApp;