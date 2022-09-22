import React from 'react'
import illustration from '../images/illustration-working.svg';

export default function Hero() {
  return (
    <section>
      <div className='container mx-auto overflow-x-hidden pb-40 lg:flex lg:flex-row-reverse lg:items-center lg:pt-14'>
        <div className='w-[450px] xs:w-[550px] sm:w-[600px] md:w-full lg:w-[] translate-x-4 md:translate-x-0 lg:translate-x-[9rem] md:px-4 lg:px-0 lg:basis-[80%]'>
          <img src={illustration} alt="illustration" />
        </div>

        <div className='px-4 text-center lg:text-left mt-10 lg:mt-0 flex flex-col items-center lg:items-start gap-4 lg:basis-[60%]'>
          <h1 className='text-4xl lg:text-7xl font-bold text-neutral-very-dark-blue'>More than just shorter links</h1>
          <p className='text-neutral-grayish-violet'>Build your brand's recognition and get detailed insights on how your links are performing</p>
          <button className='bg-primary-cyan text-white py-3 px-8 rounded-full cursor-pointer lg:mt-4'>Get Started</button>
        </div>
      </div>
    </section>
  )
}
