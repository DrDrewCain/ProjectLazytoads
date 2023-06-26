import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

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
      <ul className="max-w-5xl mx-auto flex justify-between items-center py-4 px-8 lg:px-12"
       style={{
        backgroundImage: "linear-gradient(to right, teal, purple)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        <li>
          <Link href="/" passHref>
            <span className={router.pathname === '/' ? 'active' : ''}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <span className={router.pathname === '/about' ? 'active' : ''}>About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <span className={router.pathname === '/contact' ? 'active' : ''}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;