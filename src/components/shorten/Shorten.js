import React from 'react'

export default function Shorten() {
  return (
    <div className='w-[85%] mx-auto inset-x-0 bg-primary-dark-violet py-6 lg:p-8 px-4 absolute rounded-lg -top-16 lg:-top-10' id='form'>
        <form className='flex flex-col items-center gap-4 lg:flex-row'>
          <input type="text" placeholder='Shorten a link here...' className='w-full p-2 lg:px-4 rounded-md border-0 focus:outline-none text-base lg:basis-[80%]'/>
          <button className='px-8 py-2 bg-primary-cyan w-full rounded-md text-white cursor-pointer text-base lg:basis-[20%]'>Shorten It!</button>
        </form>
    </div>
  )
}
