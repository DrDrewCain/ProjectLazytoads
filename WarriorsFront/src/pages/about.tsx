import React from "react";
import Navigation from "../app/components/Navigation";
import RootLayout from "../app/layout";

const AboutMe: React.FC = () => {
  return (
    <RootLayout>
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-teal-500 to-purple-500">
        <Navigation />
      </header>

      <main className="bg-gray-100 flex-1 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p
            className="text-black text-base text-center border-b border-gray-300 bg-white bg-opacity-50 pb-6 pt-8 backdrop-blur-2xl font-bold tracking-wider rounded-xl"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            This is some information about our company. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </main>
    </div>
    </RootLayout>
  );
};

export default AboutMe;