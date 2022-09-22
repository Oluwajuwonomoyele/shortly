import React from 'react'

export default function Shorten() {
  return (
    <div className='w-[85%] mx-auto inset-x-0 bg-primary-dark-violet py-6 lg:p-8 px-4 absolute rounded-lg -top-16 lg:-top-10' id='form'>
        <form className='flex flex-col lg:items-center gap-6 lg:flex-row relative'>
          <input type="text" placeholder='Shorten a link here...' className='w-full p-2 lg:px-4 rounded-md border-0 focus:outline-none text-base lg:basis-[80%]' id='input'/>
          <span className='absolute text-secondary-red text-sm bottom-10 text-left lg:-bottom-6 ml-2 hidden'>Please add a link</span>
          <button className='px-8 py-2 bg-primary-cyan w-full rounded-md text-white cursor-pointer text-base lg:basis-[20%] hover:brightness-110 transition-all duration-200 ease-linear border-none'>Shorten It!</button>
        </form>
    </div>
  )
}
