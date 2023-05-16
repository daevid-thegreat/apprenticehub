import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from "next/router";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const register_apprentice = () => {
    const router = useRouter();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    const submitHandler = async (e) => {
        e.preventDefault();

        const res = await fetch('https://apprenticehubapi.onrender.com/auth/signin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            const data = await res.json();
            const token = data.data.token;

            localStorage.setItem('jwtToken', token);
            const {is_master} = data.data.user;
            if (is_master) {
                await router.push('/master'
                )
            }else{
                await router.push('/apprentice'
                )
            }

        } else {
            const errorResponse = await res.json();
            const errorMessage = errorResponse.message;

            setError(errorMessage)

            console.error(errorMessage);
        }
    };



    return (
        <div className='grid grid-cols-2 md:grid-cols-1'>
            <div className="bg-[url('/auth_image1.png')] bg-cover h-screen md:hidden">
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
                    <div className="logo my-8 mx-10 hidden md:flex">
                        <Link href="/">
                            <Image src="/logo-1.png" width={225} height={59.52} />
                        </Link>
                    </div>
                    <h2 className='text-4xl font-bold my-3'>Sign In as an Apprentice </h2>
                    <p className='text-lg text-gray'>Please enter your details to login to your account</p>
                </div>
                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>

                <div className='flex items-center justify-center'>
                    <form className='w-1/2 md:w-full md:mx-6' onSubmit={submitHandler}>
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
                                    id="email"
                                    name='email'
                                    type="email"
                                    placeholder="Enter your mail"
                                    onChange={e => setEmail(e.target.value)}
                                />
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
                                    onChange={e => setPassword(e.target.value)}
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

                            <p className='text-sm font-semibold text-primary text-end my-2 cursor-pointer'><Link href='/forgot-password'>Forgot Password</Link></p>
                        </div>

                        <button type='submit' className='bg-primary text-white py-4 px-3 text-center rounded-lg w-full my-4'>
                            Sign In
                        </button>

                        <div className='my-4'>
                            <p className='text-center my-3 text-gray'>Don't have an account? <Link className='text-primary font-semibold' href='/register-apprentice'>Sign Up</Link></p>
                        </div>
                        <div className='my-4'>
                            <p className='text-center my-3 text-gray'>Not an apprentice? <Link className='text-[#EF5D5D] font-semibold' href='/login-master'>Sign In as a skill master</Link></p>
                        </div>

                    </form>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default register_apprentice