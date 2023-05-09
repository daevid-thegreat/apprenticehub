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
            <div className="bg-[url('/auth_image1.png')] bg-cover h-screen">
                <div className="logo">
                    <Link href="/">
                        <Image src="/logo-1.png" width={385} height={59.52} />
                    </Link>
                </div>
                <div className='text-white ml-10 mt-32'>
                    <h1 className='text-6xl font-bold'>Get Back In</h1>
                    <p className='font-normal text-4xl my-3 leading-tight'>Let's get back in and continue your<br /> Apprentice dreams</p>
                </div>

            </div>
            <div className='font-Poppins'>
                <div className='text-center mt-8 mb-14'>
                    <h2 className='text-4xl font-bold my-3'>Forgot Password </h2>
                    <p className='text-sm text-gray'>Please enter your email address, you will receive a link to create a new password via email.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <form className='w-1/2'>
                        <div>
                            <div className="mb-6">

                                <label
                                    className="block text-start text-[#000] font-semibold text-sm my-1"
                                    htmlFor="lastname"
                                >
                                    Phone Number
                                </label>
                                <div className='flex items-center w-full bg-[#F7F7F7] rounded-lg'>
                                    <span className='font-medium text-gray mx-2'>+234 </span>
                                    <input
                                        className=" rounded-lg ml-2 py-4 px-3 leading-tight focus:outline-primary bg-[#F7F7F7] focus:shadow-outline w-full"
                                        id="fullname"
                                        type="text"
                                        placeholder="Enter your phone numberr"
                                    />
                                </div>
                                <p className='text-sm font-semibold text-primary text-end my-2 cursor-pointer'><Link href='/forgot-password'>Use Phone Instead</Link></p>
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