import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/globals.css';

const Navigation = () => {
  const router = useRouter();

  return (
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
          <Link href="/home" passHref>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
             Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;