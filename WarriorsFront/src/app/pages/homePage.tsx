import React from "react";
import Footer from "../components/Footer";

const homePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="bg-gradient-to-r from-teal-500 to-purple-500 flex-1 py-20">
        <div className="px-4 sm:px-6 flex flex-col items-center justify-center text-center w-full">
          <h1
            className="text-white text-4xl font-bold tracking-wider mb-6 font-style: italic"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lazytoads
          </h1>
          <p
            className="text-white text-base mb-6"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Currently working hard to bring you the best website possible.
          </p>
          <p
            className="text-white text-base mb-6 font-bold"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Releasing: 2024
          </p>
          <p
            className="text-black text-base text-center border-b border-gray-300 bg-white bg-opacity-50 pb-6 pt-8 backdrop-blur-2xl font-bold tracking-wider rounded-xl"
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
      <Footer />
    </div>
  );
};

export default homePage;
