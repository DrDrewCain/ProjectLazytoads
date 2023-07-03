import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navigation = () => {
  const router = useRouter();

  const handleSourceClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('https://github.com/DrDrewCain/ProjectLazytoads');
  };

  return (
    <nav className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="flex justify-between items-center py-4">
        <h1
          className="text-white text-xl font-bold tracking-wider font-italic"
          style={{
            backgroundImage: 'linear-gradient(to right, teal, purple)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Lazytoads
        </h1>
      </div>
      <ul className="flex justify-center items-center space-x-4 py-4">
        <li>
          <Link href="/" passHref>
            <button className="text-black hover:text-gray-500" type="button">
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link href="/play" passHref>
            <button className="text-black hover:text-gray-500" type="button">
              Play
            </button>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <button className="text-black hover:text-gray-500" type="button">
              About
            </button>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <button className="text-black hover:text-gray-500" type="button">
              Contact
            </button>
          </Link>
        </li>
        <button
          className="text-black focus:outline-none hover:text-gray-300"
          onClick={handleSourceClick}
        >
          Source
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
