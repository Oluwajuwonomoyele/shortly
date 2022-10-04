import { Link } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useSignUp } from '../hooks/useSignUp';
import { useState } from 'react';

export default function SignUp() {
  const { signUp, isPending, error } = useSignUp()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp(email, password)
  }

  return (
    <section className="h-[91vh] bg-neutral-gray pt-12">
      <div className="container mx-auto px-4">
          <div className='max-w-[560px] mx-auto w-full bg-white rounded-lg px-8 pt-8 pb-14'>
            <h1 className='text-neutral-very-dark-blue mb-4 font-semibold'>SIGN UP</h1>
            <form className='text-[15px] flex flex-col gap-6 mb-8' onSubmit={handleSubmit}>
              <label className='flex flex-col gap-1'>
                Email
                <input type="email" className='border border-primary-dark-violet rounded focus:outline-none px-2 py-1' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
              </label>
              <label className='flex flex-col gap-1'>
                Password
                <input type="password" className='border border-primary-dark-violet rounded focus:outline-none px-2 py-1' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
              </label>
              <button type="submit" className='flex justify-center w-full bg-primary-cyan text-white py-2 rounded-lg cursor-pointer border-2 border-primary-cyan hover:text-primary-cyan hover:bg-white transition-all ease-linear duration-200'>SIGN UP</button>
              { error && <p>{error}</p>}
            </form>
            <div className='bg-neutral-grayish-violet h-[1px] text-center rounded-lg relative mb-8'>
              <p className='p-1 absolute inset-x-0 -top-4 w-[50px] mx-auto border border-neutral-grayish-violet bg-white text-base text-neutral-grayish-violet'>OR</p>
            </div>
            <div className='flex justify-center my-4 gap-4 items-center'>
              <div className='border-2 border-secondary-red p-1 rounded-full text-secondary-red cursor-pointer'>
                <AiOutlineGoogle />
              </div>

              <div className='border-2 border-blue-500 p-1 rounded-full text-blue-500 cursor-pointer'>
                <FaFacebookF />
              </div>

              <div className='border-2 border-blue-500 p-1 rounded-full text-blue-500 cursor-pointer'>
                <FaLinkedinIn />
              </div>
            </div>
            <div className='text-[15px] flex items-center gap-1 w-full justify-center'>
              <p>Already a user?</p>
              <Link to='/signin' className='underline'>LOGIN</Link>
            </div>
          </div>
      </div>
    </section>
  )
}