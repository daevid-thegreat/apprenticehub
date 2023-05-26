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
                    <h1 className='text-6xl font-bold'>Sign In</h1>
                    <p className='font-normal text-4xl my-3 leading-tight'>Join us and start your<br/> Apprentice dreams</p>
                </div>

            </div>
            <div className='font-Poppins'>
                <div className='text-center mt-8 mb-14'>
                    <h2 className='text-4xl font-bold my-3'>Sign In as an Apprentice </h2>
                    <p className='text-lg text-gray'>Please enter your details to login to your account</p>
                </div>
                <div className='flex items-center justify-center'>
                    <form className='w-1/2'>
                        <div className="mb-6">
                            <label
                                className="block text-start text-[#000] font-semibold text-sm my-1"
                                htmlFor="lastname"
                            >
                                New Password
                            </label>
                            <div className='flex'>
                                <input
                                    className=" rounded-lg py-4 px-3 leading-tight focus:outline-primary bg-[#F7F7F7] focus:shadow-outline w-full"
                                    id="fullname"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter a new password"
                                />
                                <div
                                    className="-mx-8 mt-3 text-center cursor-pointer"
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

                        <div className="mb-6">
                        <label
                                className="block text-start text-[#000] font-semibold text-sm my-1"
                                htmlFor="lastname"
                            >
                                Confirm New Password
                            </label>
                            <div className='flex'>
                                <input
                                    className=" rounded-lg py-4 px-3 leading-tight focus:outline-primary bg-[#F7F7F7] focus:shadow-outline w-full"
                                    id="fullname"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter a new password"
                                />
                                <div
                                    className="-mx-8 mt-3 text-center cursor-pointer"
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
                            Set Password
                        </button>

                    </form>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default register_apprentice