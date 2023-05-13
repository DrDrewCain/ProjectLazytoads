import React from 'react';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="bg-gradient-to-r from-teal-500 to-purple-500 min-h-screen flex-1 py-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl font-bold tracking-wider mb-6 font-style: italic">
            Lazytoads
          </h1>
          <p className="text-white text-lg mb-10">
            Currently working hard to bring you the best website possible. Release: 2024
          </p>
          <p className="fixed left-0 top-0 w-full justify-center border-b border-gray-300 bg-white bg-opacity-50 pb-6 pt-8 backdrop-blur-2xl text-black font-bold tracking-wider lg:static lg:mx-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 lg:text-center">
            DEVELOPMENT IN PROGRESS..... LAZYTOADS ARE WORKING ON IT
          </p>
        </div>
      </main>
      <footer className="w-full text-center text-gray-600 text-sm mt-10">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Lazytoads. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;