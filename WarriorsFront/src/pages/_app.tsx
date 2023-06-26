import React from 'react';
import { AppProps } from 'next/app';
import Home from './home';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Always render the Home component
  return <Home {...pageProps} />;
};

export default MyApp;