import React from 'react';
import logo from '../images/logo.svg';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar({openNav, setOpenNav}) {
  return (
    <header className='bg-white w-full'>
        <div className='container mx-auto px-4 md:px-8 py-6 flex justify-between items-center'>
            <div className='flex gap-8 items-center'>
              <div className='cursor-pointer'>
                  <img src={logo} alt="logo" />
              </div>

              <ul className='hidden lg:flex items-center gap-8 text-neutral-grayish-violet'>
                <li className='cursor-pointer hover:text-neutral-very-dark-blue transition-all duration-200 ease-linear'>Features</li>
                <li className='cursor-pointer hover:text-neutral-very-dark-blue transition-all duration-200 ease-linear'>Pricing</li>
                <li className='cursor-pointer hover:text-neutral-very-dark-blue transition-all duration-200 ease-linear'>Resources</li>
              </ul>
            </div>

            <div className='cursor-pointer text-neutral-grayish-violet lg:hidden' onClick={() => setOpenNav(!openNav)}>
                { openNav ? <HiX size={35} /> : <HiMenu size={35} /> }
            </div>
            <div className='hidden lg:flex items-center gap-8'>
              <p className='text-neutral-grayish-violet cursor-pointer hover:text-neutral-very-dark-blue transition-all duration-200 ease-linear'>Login</p>
              <button className='bg-primary-cyan py-2 px-8 rounded-full cursor-pointer text-white hover:opacity-70 transition-all duration-200 ease-linear'>Sign Up</button>
            </div>
        </div>
    </header>
  )
}
