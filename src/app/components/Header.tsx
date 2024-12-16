'use client'
import { Menu, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='element fixed top-0 right-0 left-0 w-full'>
      <div className='w-full md:w-[90%] m-auto flex justify-between items-center py-4 px-4 text-white'>
        {/* Logo */}
        <div>
          <Image src="/images/logo.png" alt="logo" width={90} height={24} />
        </div>

        {/* Navigation */}
        <nav>
          <ul className={`hidden lg:flex gap-4 font-normal text-sm items-left mr-36`}>
           <li> <Link href="/" className='hover:underline cursor-pointer'>Services</Link></li>
            <li className='hover:underline cursor-pointer'>Light/Medium</li>
            <li className='hover:underline cursor-pointer'>Heavy Duty</li>
            <li><Link href="/Gallery" className='hover:underline cursor-pointer'>Gallery</Link></li>
            <li className='hover:underline cursor-pointer'>About Us</li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className='flex gap-2'>
          <button className='hidden md:flex gap-2 border border-white font-semibold text-sm px-4 py-2 items-center hover:bg-gray-600'>
            <Phone className='w-4 h-4' /> Call 1111-123-3456
          </button>
          <button className='hidden md:flex text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2'>
            Contact Us
          </button>
          <button className='md:hidden flex gap-2 text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-3 py-1 items-center'>
            <Phone className='w-4 h-4' /> Call Now!
          </button>
          <button
            className='md:hidden gap-2 border border-white font-semibold text-sm px-2 items-center hover:bg-gray-600'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className='w-4 h-4' />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className='w-full h-px bg-slate-50'></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className='bg-gray-800 text-white p-4 md:hidden'>
          <ul className='flex flex-col gap-2'>
           <li> <Link href="/" className='hover:underline cursor-pointer'>Services</Link></li>            
            <li className='hover:underline cursor-pointer'>Light/Medium</li>
            <li className='hover:underline cursor-pointer'>Heavy Duty</li>
            <li><Link href="/Gallery" className='hover:underline cursor-pointer'>Gallery</Link></li>
            <li className='hover:underline cursor-pointer'>About Us</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
