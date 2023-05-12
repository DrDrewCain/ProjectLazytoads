import React from 'react';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="bg-max-w-5xl bg-opacity-50 min-h-screen flex-1 py-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-max-w-5xl text-5xl font-bold tracking-wider mb-6 font-style: italic">
            Lazytoads
          </h1>
          <p className="text-black text-lg mb-10">
            Currently working hard to bring you the best website possible. Release: 2024
          </p>
          <p className="fixed left-0 top-0 w-full justify-center border-b border-max-w-5xl-300 bg-max-w-5xl bg-opacity-50 pb-6 pt-8 backdrop-blur-3xl text-black font-bold tracking-wider lg:static lg:mx-auto lg:rounded-xl lg:border lg:max-w-5xly-200 lg:p-4 lg:dark:bg-zinc-800/30 lg:text-center">
            DEVELOPMENT IN PROGRESS..... LAZYTOADS ARE WORKING ON IT
          </p>
        </div>
      </main>
      <div>
        {/* Your page content goes here */}
         <Footer />
      </div>
    </div>
  );
  
};

export default Home;