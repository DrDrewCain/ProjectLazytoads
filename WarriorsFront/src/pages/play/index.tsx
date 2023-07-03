import React from "react";
import Navigation from "../../app/components/Navigation";
import RootLayout from "../../app/layout";

const Play: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen">
        <h1 className="bg-gradient-to-r from-teal-500 to-purple-500">
          <Navigation />
        </h1>
        <main className="bg-gray-100 flex-1 py-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4"></h2>
            <p
              className="text-base text-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl font-bold tracking-wider rounded-xl gradient-text"
    >
              Coming soon...
            </p>
          </div>
        </main>
      </div>
    </RootLayout>
  );
};

export default Play;