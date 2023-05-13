import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-2 px-1 sm:px-2 flex flex-col items-center justify-center">
      <p className="text-white text-base mb-6 font-bold"
      style={{
        backgroundImage: "linear-gradient(to right, teal, purple)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        &copy; {currentYear} Lazytoads.org. All rights reserved.
      </p>
      <p className="text-base"
      style={{
        backgroundImage: "linear-gradient(to right, teal, purple)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        <a href="/contact">Contact Us</a>
      </p>
    </footer>
  );
};

export default Footer;