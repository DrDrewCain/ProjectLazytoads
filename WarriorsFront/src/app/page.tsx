import React from "react";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <main className="bg-gradient-to-r from-teal-500 to-purple-500 min-h-screen flex-1 py-10 lg:py-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <h1
            className="text-white text-3xl lg:text-5xl font-bold tracking-wider mb-6 italic"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lazytoads
          </h1>
          <p className="text-white text-base lg:text-lg mb-10"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Currently working hard to bring you the best website possible.
          </p>
          <p className="text-white text-base lg:text-lg mb-10 font-bold"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Releasing: 2024
          </p>  
          <p className="fixed left-0 bottom-0 w-full justify-center border-t border-gray-300 bg-white bg-opacity-50 pb-6 pt-8 backdrop-blur-2xl text-black font-bold tracking-wider text-base lg:text-lg lg:static lg:mx-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 lg:text-center"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            DEVELOPMENT IN PROGRESS..... LAZYTOADS ARE WORKING ON IT
          </p>
        </div>
      </main>
      <footer className="w-full text-center text-gray-600 text-xs lg:text-sm mt-4 lg:mt-10">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Lazytoads. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
