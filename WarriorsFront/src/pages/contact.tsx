import React from "react";
import Navigation from "../app/components/Navigation";

const contactMe: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-teal-500 to-purple-500">
      <Navigation />
      </header>

      <main className="bg-gradient-to-r from-teal-500 to-purple-500 flex-1 py-20">
        <div className="max-w-5xl mx-auto">
        <h2 className="text-pink-500 text-4xl font-bold tracking-wider mb-6 italic">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back
            to you as soon as possible.
          </p>

          <form action="" className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700 font-bold mb-2">Name</span>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 text-black bg-gray-100"
              placeholder="John Doe"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-bold mb-2">Email</span>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 text-black bg-gray-100"
              placeholder="johndoe@example.com"
            />
          </label>

            <label className="block">
              <span className="text-gray-700 font-bold mb-2">Message</span>
              <textarea
                name="message"
                rows={5}
                className="text-left mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 text-black text-base border-b border-gray-500 bg-white bg-opacity-50 pb-6 pt-8 backdrop-blur-2xl font-bold tracking-wider rounded-xl"
                style={{
                  backgroundImage: "linear-gradient(to right, teal, purple)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                placeholder="Your message here..."
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default contactMe;
