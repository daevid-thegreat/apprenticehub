import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from "next/router";


const register_apprentice = () => {

    const router = useRouter();
    const [email, setEmail] = useState("")
    const [error, setError] = useState('');

    const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch('https://apprenticehubapi.onrender.com/auth/resend_otp/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok){
      await router.push({
            pathname: '/new-password',
            query: { email: email },
          }, '/new-password', {},
      )
    }else{
      const errorResponse = await res.json();
      const errorMessage = errorResponse.message;

      setError(errorMessage)
    }

  };

    return (
        <div className='grid grid-cols-2 md:grid-cols-1'>
            <div className="bg-[url('/auth_image1.png')] bg-cover h-screen md:hidden">
                <div className="logo my-6 mx-4">
          <Link href="/">
            <Image src="/logo-1.png" width={385} height={59.52} />
          </Link>
        </div>
                <div className='text-white ml-10 mt-32'>
                    <h1 className='text-4xl font-bold'>Get Back In</h1>
                    <p className='font-normal text-2xl my-3 leading-tight'>Let's get back in and continue your<br/> Apprentice dreams</p>
                </div>

            </div>
            <div className='font-Poppins'>
                <div className='text-center mt-8 mb-14'>
                    <div className="logo my-8 mx-10 hidden md:flex">
            <Link href="/">
              <Image src="/logo-1.png" width={225} height={59.52} />
            </Link>
          </div>
                    <h2 className='text-4xl font-bold my-3'>Forgot Password </h2>
                    <p className='text-sm text-gray'>Please enter your email address, you will receive a link to create a new password via email.</p>
                </div>
                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
          {error && <p>{error}</p>}
        </div>
                <div className='flex items-center justify-center'>
                    <form className='w-1/2 md:2/3' onSubmit={submitHandler}>
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
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                        </div>

                        <button className='bg-primary text-white py-4 px-3 text-center rounded-lg w-full my-4'>
                            Send OTP
                        </button>

                        <div className='my-4'>
                            <p className='text-center my-3 text-gray'>Remembered password? <Link className='text-primary font-semibold' href='/login-apprentice'>Go back to login</Link></p>
                        </div>

                    </form>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default register_apprentice
