import React from 'react'

export default function Links() {
  return (
    <section>
        <div className='container mx-auto pt-24 flex flex-col gap-4'>
            <div className='bg-white w-[85%] lg:w-[93%] mx-auto py-6 rounded-lg flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between lg:items-center text-base'>
                <p className='px-4'>https://www.frontendmentor.io</p>
                <hr className='lg:hidden'/>
                <div className='px-4 flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center'>
                  <p className='text-primary-cyan'>https://rel.ink/k4lKyk</p>
                  <button className='py-2 lg:px-8
                  bg-primary-cyan w-full rounded-md text-white cursor-pointer text-base hover:opacity-75 transition-all duration-200 ease-linear border-none'>Copy</button>
                </div>
            </div>
            <div className='bg-white w-[85%] lg:w-[93%] mx-auto py-6 rounded-lg flex flex-col gap-4 text-base lg:flex-row lg:gap-0 lg:justify-between lg:items-center'>
                <p className='px-4'>https://www.frontendmentor.io</p>
                <hr />
                <div className='px-4 flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center'>
                  <p className='text-primary-cyan'>https://rel.ink/k4lKyk</p>
                  <button className='py-2 px-8 bg-primary-dark-violet w-full rounded-md text-white cursor-pointer text-base hover:opacity-75 transition-all duration-200 ease-linear border-none'>Copied!</button>
                </div>
            </div>
            <div className='bg-white w-[85%] lg:w-[93%] mx-auto py-6 rounded-lg flex flex-col gap-4 text-base lg:flex-row lg:gap-0 lg:justify-between lg:items-center'>
                <p className='px-4'>https://www.frontendmentor.io</p>
                <hr />
                <div className='px-4 flex flex-col gap-3 lg:gap-8 lg:items-center lg:flex-row'>
                  <p className='text-primary-cyan'>https://rel.ink/k4lKyk</p>
                  <button className='py-2 px-8 bg-primary-cyan w-full rounded-md text-white cursor-pointer text-base hover:opacity-75 transition-all duration-200 ease-linear border-none'>Copy</button>
                </div>
            </div>
        </div>
    </section>
  )
}
