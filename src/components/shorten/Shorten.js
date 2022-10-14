import React, { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';

export default function Shorten() {
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [link, setLink] = useState('')
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const { addDocument } = useFirestore('links')

  const handleChange = (e) => {
    setLink(e.target.value)
    setIsValid(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitLink = async (linkData) => {
      if(user){
        setIsPending(true)
        try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkData}`, { method: 'POST'})
            if(!res.ok){
              throw new Error('Please enter a valid url');
            }
            const data = await res.json()
            addDocument({code: data.result.code, shortLink: data.result.short_link, originalLink: data.result.original_link, copied: false, uid: user.uid})
            setIsPending(false)
            setErr(null)
            setIsValid(true)
            setLink('')
            console.log('Link shortened')
        } catch (error) {
            setIsPending(false)
            setErr(error.message)
            console.log('Invalid URL')
            setIsValid(false)
        }
      } else {
        navigate('/signin')
      }
  }

    submitLink(link)
  }

  return (
    <div className='w-[85%] mx-auto inset-x-0 bg-primary-dark-violet py-6 lg:p-8 px-4 absolute rounded-lg -top-16 lg:-top-10' id='form'>
        <form className='flex flex-col lg:items-center gap-6 lg:flex-row relative' onSubmit={handleSubmit}>
          <input type="text" placeholder='Shorten a link here...' className={ isValid ? 'w-full p-2 lg:px-4 rounded-md border-0 focus:outline-none text-base lg:basis-[80%] peer' : 'w-full p-2 lg:px-4 rounded-md border-0 focus:outline-none text-base lg:basis-[80%] error'} id='input' onChange={handleChange} value={link} autoComplete='off' />
          <span className={ isValid ? 'absolute text-secondary-red text-sm bottom-10 text-left lg:-bottom-6 ml-2 hidden' : 'absolute text-secondary-red text-[12px] bottom-[2.7rem] text-left lg:-bottom-6 ml-2'}>{err}</span>
          <button className='px-8 py-2 bg-primary-cyan w-full rounded-md text-white cursor-pointer text-base lg:basis-[20%] hover:brightness-110 transition-all duration-200 ease-linear border-none flex justify-center'>{ isPending ? <ImSpinner2  className='animate-spin' size={24} /> : 'Shorten It!'}</button>
        </form>
    </div>
  )
}
