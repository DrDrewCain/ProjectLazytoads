import React from "react";
import Footer from "../app/components/Footer";
import RootLayout from "../app/layout";
import Head from "next/head"
import Navigation from "../app/components/Navigation";

const Home = () => {
  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen">
        <div className="bg-gradient-to-r from-teal-500 to-purple-500">
        <Navigation/>
        </div>
        <main className="bg-gradient-to-r from-teal-500 to-purple-500 flex-1 py-20">
          <div className="px-4 sm:px-6 flex flex-col items-center justify-center text-center w-full">
            <p className="text-white text-base mb-6">
              Currently working hard to bring you the best website possible.
            </p>
            <p className="text-white text-base mb-6 font-bold">Releasing: 2024</p>
            <p className="text-black text-base text-center border-b border-gray-300 bg-white bg-opacity-50 pb-6 pt-8 backdrop-blur-2xl font-bold tracking-wider rounded-xl">
              DEVELOPMENT IN PROGRESS..... LAZYTOADS ARE WORKING ON IT
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </RootLayout>
  );
};

export default Home;