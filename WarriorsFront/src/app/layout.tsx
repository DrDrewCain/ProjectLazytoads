import React, { useEffect } from 'react';
import './styles/globals.css';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = document.getElementById('root')!;
    // Add your navigation content here
  }, []);

  return (
    <>
      <div id="root" className={inter.className}>
      </div>
      {children}
    </>
  );
}
