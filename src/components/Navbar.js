import React from 'react';
import logo from '../images/logo.svg';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout';

export default function Navbar({openNav, setOpenNav}) {
  const { user } = useAuthContext();
  const { logout } = useLogout()

  return (
    <header className='bg-white w-full'>
        <div className='container mx-auto px-4 sm:px-8 py-4 pt-6 md:pt-4 flex justify-between items-center text-base'>
            <div className='flex gap-8 items-center'>
              <Link to='/' className='cursor-pointer'>
                  <img src={logo} alt="logo" />
              </Link>

              <ul className='hidden lg:flex items-center gap-8 text-neutral-grayish-violet'>
                <li className='cursor-pointer hover:text-neutral-very-dark-blue transition-all duration-200 ease-linear'>Features</li>
                <li className='cursor-pointer hover:text-neutral-very-dark-blue transition-all duration-200 ease-linear'>Pricing</li>
                <li className='cursor-pointer hover:text-neutral-very-dark-blue transition-all duration-200 ease-linear'>Resources</li>
              </ul>
            </div>

            <div className='cursor-pointer text-neutral-grayish-violet lg:hidden' onClick={() => setOpenNav(!openNav)}>
                { openNav ? <HiX size={35} /> : <HiMenu size={35} /> }
            </div>
            { user ? 
            <div className='hidden lg:flex items-center gap-8'>
              <button className='bg-primary-cyan py-2 px-8 rounded-full cursor-pointer text-white hover:opacity-70 transition-all duration-200 ease-linear' onClick={() => logout()}>Log Out</button>
            </div> : <div className='hidden lg:flex items-center gap-8'>
              <Link to='/signin' className='text-neutral-grayish-violet cursor-Linkointer hover:text-neutral-very-dark-blue transition-all duration-200 ease-linear'>Login</Link>
              <Link to='/signup' className='bg-primary-cyan py-2 px-8 rounded-full cursor-pointer text-white hover:opacity-70 transition-all duration-200 ease-linear'>Sign Up</Link>
            </div>}
        </div>
    </header>
  )
}
