import React from "react";

const contactMe: React.FC = () => {
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
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
                placeholder="John Doe"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-bold mb-2">Email</span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
                placeholder="johndoe@example.com"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-bold mb-2">Message</span>
              <textarea
                name="message"
                rows={5}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
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
