import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout';

export default function MobileNav({openNav, setOpenNav}) {
  const { user } = useAuthContext();
  const { logout } = useLogout()

  const handleLogOut = () => {
    logout()
    setOpenNav(false)
  }

  return (
    <section className={ openNav ? 'fixed bg-primary-dark-violet w-[90%] mx-auto inset-x-0 z-10 rounded-lg transition-all ease-linear duration-300 mt-8' : 'fixed bg-primary-dark-violet w-[90%] scale-0 mx-auto inset-x-0 z-10 rounded-lg transition-all ease-linear duration-300 mt-8'}>
        <div className='py-8 md:py-12 px-4 text-center flex flex-col gap-8'>
            <div className='flex flex-col gap-6 text-white'>
                <h3>Features</h3>
                <h3>Pricing</h3>
                <h3>Resources</h3>
            </div>
            <div className='w-full h-[0.5px] rounded-full bg-neutral-grayish-violet'></div>
            { user ? 
              <div className='flex flex-col gap-6 text-white'>
                <button className='bg-primary-cyan py-3 px-8 rounded-full cursor-pointer' onClick={handleLogOut}>Log Out</button>
              </div>: 
              <div className='flex flex-col gap-6 text-white'>
                <Link to='/signin' onClick={() => setOpenNav(false)}>Login</Link>
                <Link to='/signup' className='bg-primary-cyan py-3 px-8 rounded-full cursor-pointer' onClick={() => setOpenNav(false)}>Sign Up</Link>
            </div>}
        </div>
    </section>
  )
}
