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
                    <p className='font-normal text-4xl my-3 leading-tight'>Let's get back in and continue your<br/> Apprentice dreams</p>
                </div>

            </div>
            <div className='font-Poppins'>
                <div className='text-center mt-8 mb-14'>
                    <h2 className='text-4xl font-bold my-3'>Password Reset </h2>
                    <p className='text-sm text-gray'>We send an OTP to  <span className='font-semibold text-primary'>veramarquez@gmail.com</span></p>
                </div>
                <div className='flex items-center justify-center'>
                    <form className='w-1/2'>
                        <div>
                            <div className="mb-6">

                                <label
                                    className="block text-start text-[#000] font-semibold text-sm my-1"
                                    htmlFor="lastname"
                                >
                                    OTP
                                </label>
                                <div className='flex'>
                                <input
                                    className=" rounded-lg py-4 px-4 mx-3 leading-tight border border-primary focus:outline-secondary bg-[#F7F7F7] w-14"
                                    id="otp1"
                                    type="text"
                                />

                                <input
                                    className=" rounded-lg py-4 px-4 mx-3 leading-tight border border-primary focus:outline-secondary bg-[#F7F7F7] w-14"
                                    id="otp1"
                                    type="text"
                                />

                                <input
                                    className=" rounded-lg py-4 px-4 mx-3 leading-tight border border-primary focus:outline-secondary bg-[#F7F7F7] w-14"
                                    id="otp1"
                                    type="text"
                                />

                                <input
                                    className=" rounded-lg py-4 px-4 mx-3 leading-tight border border-primary focus:outline-secondary bg-[#F7F7F7] w-14"
                                    id="otp1"
                                    type="text"
                                />
                                
                                <input
                                    className=" rounded-lg py-4 px-4 mx-3 leading-tight border border-primary focus:outline-secondary bg-[#F7F7F7] w-14"
                                    id="otp1"
                                    type="text"
                                />

</div>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='text-primary font-bold'>4:30</div>
                                    <div className='text-gray'>Didn’t see any code? <span className='text-primary font-medium'>Resend OTP</span></div>
                                </div>

                        </div>

                        <button className='bg-primary text-white py-4 px-3 text-center rounded-lg w-full my-4'>
                            Submit
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