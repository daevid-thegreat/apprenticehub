import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'





const register_apprentice = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };



  return (
    <div className='grid grid-cols-2'>
      <div className="bg-[url('/auth_image.png')] bg-cover h-screen">
        <div className="logo">
          <Link href="/">
            <Image src="/logo-1.png" width={385} height={59.52} />
          </Link>
        </div>
        <div className='text-white ml-10 mt-32'>
          <h1 className='text-4xl font-bold'>Sign Up</h1>
          <p className='font-normal text-2xl my-3 leading-tight'>Join us and start your Apprentice dreams</p>
        </div>

      </div>
      <div className='font-Poppins'>
        <div className='text-center mt-8 mb-14'>
          <h2 className='text-4xl font-bold my-3'>Join as a Skill Master </h2>
          <p className='text-lg text-gray'>Please enter your details to create a new account</p>
        </div>
        <div className='flex items-center justify-center'>
          <form className='w-1/2'>
            <div className="mb-6">
              <label
                className="block text-start text-[#000] font-semibold text-sm my-1"
                htmlFor="lastname"
              >
                Full Name
              </label>
              <input
                className=" rounded-lg py-4 px-3 leading-tight focus:outline-primary bg-[#F7F7F7] focus:shadow-outline w-full"
                id="fullname"
                type="text"
                placeholder="First and Last Name"
              />
            </div>
            <div>
              <div className="mb-6">

                <label
                  className="block text-start text-[#000] font-semibold text-sm my-1"
                  htmlFor="lastname"
                >
                  Email
                </label>
                <input
                  className=" rounded-lg py-4 px-3 leading-tight focus:outline-primary bg-[#F7F7F7] focus:shadow-outline w-full"
                  id="fullname"
                  type="text"
                  placeholder="Enter your mail"
                />
                <p className='text-sm font-semibold text-primary text-end my-2 cursor-pointer'><Link href='/register-apprentice-tel'>Use Phone Instead</Link></p>
              </div>

            </div>


            <div className="mb-6">
              <label
                className="block text-start text-[#000] font-semibold text-sm my-1"
                htmlFor="lastname"
              >
                Password
              </label>
              <div className='flex'>
                <input
                  className=" rounded-lg py-4 px-3 leading-tight focus:outline-primary bg-[#F7F7F7] focus:shadow-outline w-full"
                  id="fullname"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter a new password"
                />
                <div
                  className="-mx-8 mt-2 text-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-gray w-6 h-6" />
                  ) : (
                    <AiOutlineEye className="text-gray w-6 h-6" />
                  )}
                </div>

              </div>
            </div>

            <button className='bg-primary text-white py-4 px-3 text-center rounded-lg w-full my-4'>
              Create Account
            </button>

            <div className='my-4'>
              <p className='text-center my-3 text-gray'>Already have an account? <Link className='text-primary font-semibold' href='/login-master'>Login</Link></p>
            </div>
            <div className='my-4'>
              <p className='text-center my-3 text-gray'>Not a Skil Master? <Link className='text-[#EF5D5D] font-semibold' href='/register-apprentice'>Sign Up as an apprentice</Link></p>
            </div>

          </form>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default register_apprentice