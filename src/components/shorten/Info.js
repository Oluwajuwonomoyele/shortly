import React from 'react';
import Shorten from './Shorten';
import brand from '../../images/icon-brand-recognition.svg';
import record from '../../images/icon-detailed-records.svg';
import customizable from '../../images/icon-fully-customizable.svg';
import Links from './Links';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from "../../hooks/useCollection"

export default function Info() {
    const { user } = useAuthContext()
    const { documents, error } = useCollection('links')
    
  return (
    <section className='relative bg-neutral-gray bg-opacity-20'>
        <Shorten />
        {!error ? <Links data={documents} /> : <p>{error}</p>}
        <div className='container mx-auto px-4 lg:px-8 pt-28 py-8 text-center'>
            <div className='flex flex-col gap-4 md:max-w-[520px] md:mx-auto'>
                <h1 className='text-neutral-very-dark-violet text-2xl font-bold'>Advanced Statistics</h1>
                <p className='text-neutral-grayish-violet'>Track how your links are performing across the web with our advanced statistics dashboard. </p>
            </div>

            <div className='py-20 mx-2 lg:flex lg:items-center'>
                <div className='flex flex-col items-center lg:items-start lg:text-left lg:px-8 gap-4 bg-white pt-20 pb-8 px-4 rounded-lg relative'>
                    <div className='bg-primary-dark-violet p-4 rounded-full absolute -top-8 lg:left-8'>
                        <img src={brand} alt="brand" />
                    </div>
                    <h2 className='text-neutral-very-dark-violet text-xl font-bold'>Brand Recognition</h2>
                    <p className='text-base text-neutral-grayish-violet'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
                </div>
                <div className='w-2 h-20 lg:h-2 lg:w-20 bg-primary-cyan mx-auto'></div>
                <div className='flex flex-col items-center lg:items-start lg:text-left lg:px-8 gap-4 bg-white pt-20 pb-8 px-4 rounded-lg relative lg:mt-12'>
                    <div className='bg-primary-dark-violet p-4 rounded-full absolute -top-8 lg:left-8'>
                        <img src={record} alt="record" />
                    </div>
                    <h2 className='text-neutral-very-dark-violet text-xl font-bold'>Detailed Records</h2>
                    <p className='text-base text-neutral-grayish-violet'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className='w-2 h-20 lg:h-2 lg:w-20 bg-primary-cyan mx-auto'></div>
                <div className='flex flex-col items-center lg:items-start lg:text-left lg:px-8 gap-4 bg-white pt-20 pb-8 px-4 rounded-lg relative lg:mt-28'>
                    <div className='bg-primary-dark-violet p-4 rounded-full absolute -top-8 lg:left-8'>
                        <img src={customizable} alt="customizable" />
                    </div>
                    <h2 className='text-neutral-very-dark-violet text-xl font-bold'>Fully Customizable</h2>
                    <p className='text-base text-neutral-grayish-violet'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
