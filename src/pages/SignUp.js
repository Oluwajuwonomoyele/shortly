import { Link } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaEyeSlash, FaEye } from 'react-icons/fa';
import {ImSpinner2} from 'react-icons/im'
import { useSignUp } from '../hooks/useSignUp';
import { useState } from 'react';
import bg from '../images/signup.mp4'

export default function SignUp() {
  const { signUp, isPending, error } = useSignUp()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp(email, password)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }


  return (
    <section className="h-[91vh] bg-black relative flex items-center">
      <div className="container mx-auto px-4">
          <div className='absolute inset-0 w-full h-full overflow-hidden'>
            <video src={bg} autoPlay loop muted type='video/mp4' className='w-full h-full object-cover opacity-40'/>
          </div>
          <div className='max-w-[560px] mx-auto w-full bg-white rounded-lg px-8 pt-8 pb-14 relative z-10'>
            <h1 className='text-neutral-very-dark-blue mb-4 font-semibold'>SIGN UP</h1>
            <form className='text-[15px] flex flex-col gap-6 mb-8' onSubmit={handleSubmit}>
              <label className='flex flex-col gap-1'>
                Email
                <input type="email" className='border border-primary-dark-violet rounded focus:outline-none p-2' value={email} onChange={(e) => {setEmail(e.target.value)}} spellCheck='false' />
              </label>
              <label className='flex flex-col gap-1 relative'>
                Password
                <input type={showPassword ? 'text': "password"} className='border border-primary-dark-violet rounded focus:outline-none p-2' value={password} onChange={(e) => {setPassword(e.target.value)}} spellCheck='false' />
                { showPassword ? <FaEyeSlash className='absolute right-3 bottom-2 text-neutral-very-dark-blue' size={22} onClick={handleShowPassword} /> : <FaEye  className='absolute right-3 bottom-2 text-neutral-very-dark-blue' size={22} onClick={handleShowPassword} />}
              </label>
              { isPending ? <button type="submit" className='flex justify-center w-full bg-primary-cyan text-white py-2 rounded-lg cursor-pointer mb-1 border-2 border-primary-cyan transition-all ease-linear duration-200' disabled><ImSpinner2 size={22} className='animate-spin'/></button> : <button type="submit" className='flex justify-center w-full bg-primary-cyan text-white py-2 rounded-lg cursor-pointer mb-1 border-2 border-primary-cyan hover:text-primary-cyan hover:bg-white transition-all ease-linear duration-200'>SIGN UP</button>}
              { error && <p className='text-center text-red-600'>{error}</p>}
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
