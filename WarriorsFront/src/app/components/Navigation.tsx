import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navigation = () => {
  const router = useRouter();

  const isContactPage = router.pathname === '/contact';

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
      <ul
        className="max-w-5xl mx-auto flex justify-between items-center py-4 px-8 lg:px-12"
        style={{
          backgroundImage: "linear-gradient(to right, teal, purple)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <li>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li>
          {isContactPage ? (
            <Link href="/contact/register" passHref>
              Signup
            </Link>
          ) : (
            <Link href="/contact" passHref>
              Contact
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;