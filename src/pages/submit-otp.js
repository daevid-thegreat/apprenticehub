import React, {useRef} from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from "next/router";


const register_apprentice = () => {

    const inputRefs = useRef([]);

    const autoTab = (index, e) => {
        const BACKSPACE_KEY = 8;
        const DELETE_KEY = 46;
        let tabindex = index || 0;
        if (e.keyCode === BACKSPACE_KEY) {
            tabindex -= 1;
        } else if (e.keyCode !== DELETE_KEY) {
            tabindex += 1;
        }
        const elem = inputRefs.current.find((ref) => ref && Number(ref.tabIndex) === tabindex);
        if (elem) {
            setTimeout(() => {
                elem.focus();
            }, 0);
        }
    };

    const handleInputChange = (e, index) => {
        // Update the respective state based on the index
        switch (index) {
            case 0:
                setOtp1(e.target.value);
                break;
            case 1:
                setOtp2(e.target.value);
                break;
            case 2:
                setOtp3(e.target.value);
                break;
            case 3:
                setOtp4(e.target.value);
                break;
            case 4:
                setOtp5(e.target.value);
                break;
            case 5:
                setOtp6(e.target.value);
                break;
            default:
                break;
        }
        if (e.target.value && e.target.value.length === 1) {
            autoTab(index, e);
        }
    };

    const router = useRouter();
    const { email } = router.query;

    const [otp1, setOtp1] = useState('')
    const [otp2, setOtp2] = useState('')
    const [otp3, setOtp3] = useState('')
    const [otp4, setOtp4] = useState('')
    const [otp5, setOtp5] = useState('')
    const [otp6, setOtp6] = useState('')

    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6

    const resend_otp = async () =>{

        await fetch('https://apprenticehubapi.onrender.com/auth/resend_otp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        await router.push({
                pathname: '/submit-otp',
                query: { email: email },
            }, '/submit-opt', {},
        )

    }

    const submitHandler = async (e) => {
        e.preventDefault();

        await fetch('https://apprenticehubapi.onrender.com/auth/verify-mail/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp  }),
        });

        await router.push({pathname: '/login-apprentice',
        });
    };

    return (
        <div className='grid grid-cols-2 md:grid-cols-1'>
            <div className="bg-[url('/auth_image1.png')] bg-cover h-screen md:hidden">
                <div className="logo">
                    <Link href="/">
                        <Image src="/logo-1.png" alt='ApprenticeHub Logo' width={385} height={59.52} />
                    </Link>
                </div>
                <div className='text-white ml-10 mt-32'>
                    <h1 className='text-6xl font-bold'>Get Back In</h1>
                    <p className='font-normal text-4xl my-3 leading-tight'>Let's get back in and continue your<br/> Apprentice dreams</p>
                </div>

            </div>
            <div className='font-Poppins'>
                <div className='text-center mt-8 mb-14'>
                    <div className="logo my-8 mx-10 hidden md:flex">
                        <Link href="/">
                            <Image src="/logo-1.png" alt='ApprenticeHub logo' width={225} height={59.52} />
                        </Link>
                    </div>
                    <h2 className='text-4xl font-bold my-3'>Password Reset </h2>
                     <p className='text-sm text-gray'>We send an OTP to  <span className='font-semibold text-primary'>{email}</span></p>
                </div>
                <div className='flex items-center justify-center'>
                    <form className='w-1/2 md:w-full' onSubmit={submitHandler}>
                        <div>
                            <div className="mb-6">

                                <label
                                    className="block text-start text-[#000] font-semibold text-sm my-1"
                                    htmlFor="lastname"
                                >
                                    OTP
                                </label>
                                <div className='flex'>
                                    {[...Array(6)].map((_, index) => (
                                        <input
                                            key={index}
                                            className="rounded-lg py-4 px-4 mx-3 leading-tight border border-primary focus:outline-secondary bg-[#F7F7F7] w-14"
                                            id={`otp${index}`}
                                            type="text"
                                            onChange={(e) => handleInputChange(e, index)}
                                            inputMode="numeric"
                                            autoComplete="one-time-code"
                                            maxLength="1"
                                            onKeyDown={(e) => autoTab(index, e)}
                                            tabIndex={index}
                                            ref={(ref) => (inputRefs.current[index] = ref)}
                                        />
                                    ))}



</div>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='text-primary font-bold'></div>
                                    <div className='text-gray'>Didn’t see any code? <button onClick={resend_otp} className='text-primary font-medium cursor-pointer'>Resend OTP</button></div>
                                </div>

                        </div>

                        <button type='submit' className='bg-primary text-white py-4 px-3 text-center rounded-lg w-full my-4'>
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