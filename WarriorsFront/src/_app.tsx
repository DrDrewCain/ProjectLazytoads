import { SSRProvider, OverlayProvider } from 'react-aria';
import "../styles/globals.css";
import "../styles/nprogress.css";
import "../styles/home.module.css";
import NProgress from './components/nprogress';
import ResizeHandler from './components/resize-handler';
import { useEffect } from 'react';
import type { ComponentType } from 'react';

type AppProps = {
  Component: ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <SSRProvider>
      <OverlayProvider>
        <Component {...pageProps} />
        <ResizeHandler />
        <NProgress />
      </OverlayProvider>
    </SSRProvider>
  );
}
