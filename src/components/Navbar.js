import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 sticky top-0 z-50 shadow-lg bg-gray-900 text-white">
      <div className="text-2xl font-bold">GDSC</div>
      <div className="hidden md:flex space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="#features" className="hover:underline">
          Features
        </Link>
        <Link href="#events" className="hover:underline">
          Events
        </Link>
        <Link href="#testimonials" className="hover:underline">
          Testimonials
        </Link>
      </div>
      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 bg-gray-900 rounded-md shadow-lg md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="#features" className="hover:underline">
              Features
            </Link>
            <Link href="#events" className="hover:underline">
              Events
            </Link>
            <Link href="#testimonials" className="hover:underline">
              Testimonials
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;