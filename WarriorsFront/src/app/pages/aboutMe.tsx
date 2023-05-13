import React from "react";
import Footer from "../components/Footer";

const aboutMe: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-teal-500 to-purple-500">
        <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-8 lg:px-12">
          <h1
            className="text-white text-xl font-bold tracking-wider font-italic"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lazytoads
          </h1>
          <ul className="flex space-x-4 text-white font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-gray-100 flex-1 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            This is some information about our company. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default aboutMe;
