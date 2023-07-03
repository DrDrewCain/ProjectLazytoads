import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-1 px-1 sm:px-2 flex flex-col items-center justify-center">
      <p className="text-white text-sm sm:text-base mb-2 font-bold"
      style={{
        color: "white",
        background: "linear-gradient(to right, teal, purple)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        &copy; {currentYear} Lazytoads.org. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
