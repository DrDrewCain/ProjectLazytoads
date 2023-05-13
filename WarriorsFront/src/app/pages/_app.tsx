// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import aboutMe from "./aboutMe";
// import contactMe from "./contactMe";
// import homePage from "./homePage";

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route  path="/" Component={homePage} />
//         <Route  path="/aboutMe" Component={aboutMe} />
//         <Route  path="/contactMe" Component={contactMe} />
//         <Route Component={() => <h1>404: page not found</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App
import { SSRProvider, OverlayProvider } from 'react-aria';
;

import '@styles/global.css';
import '@styles/nprogress.css';
import type { AppProps } from 'next/app';
import NProgress from '../components/nprogress';
import ResizeHandler from '../components/resize';
import { useEffect } from 'react';

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