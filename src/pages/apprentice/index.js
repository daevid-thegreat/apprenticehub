import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const profile = () => {
    const [name, setName] = useState("")
    const [master, setMaster] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('jwtToken');

            try {
                const res = await fetch('https://apprenticehubapi.onrender.com/auth/check-auth/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`,
                    },
                });

                if (res.ok) {
                    const data = await res.json();
                    const { name, email } = data.data.user; // Extract name and email from the response
                    setName(name); // Update the name state
                    setEmail(email); // Update the email state
                } else {
                    const errorResponse = await res.json();
                    const errorMessage = errorResponse.message;
                    console.error(errorMessage);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchUserInfo();
    }, []);


    return (
        <div className='flex bg-[#DAE1FF] h-full w-full'>
            <Sidebar />
            <main className='px-4 w-5/6'>
                <div className="my-6 items-center grid grid-cols-7 px-4">
                    <input type="text" placeholder="Search" className="w-full h-14 px-4 text-sm rounded-lg col-span-6 focus:outline-primary" />
                    <Link className='bg-[#5271FF] text-white px-4 py-4 rounded-md ml-10 col-span-1' href='/master/add'>
                        Add New
                    </Link>
                </div>

                <div className='grid grid-cols-6 px-4 space-x-8'>
                    <div className='col-span-3 flex flex-col bg-white px-4 py-2 rounded-lg'>
                        <div className='flex justify-between items-center mb-8 mt-4'>
              <span className='text-3xl font-bold text-[#0A1E40]'>
                {name}
              </span>

                            <button className='bg-[#5271FF] text-white px-4 py-2 rounded-md'>
                                Edit
                            </button>

                        </div>

                        <div className='space-y-5'>
                            <div className='flex items-center'>
                                <span className='mr-3 text-[#000000] font-semibold'>Email : </span>
                                <span className='text-md font-medium text-[#747474] underline'>
                  {email}
                </span>
                            </div>
                            <div className='flex items-center'>
                                <span className='mr-7 text-[#000000] font-semibold'>Tel : </span>
                                <span className='text-md font-medium text-[#747474] underline'>+2348123456789</span>

                            </div>
                        </div>

                        <div className='my-8'>
                            <button className='bg-[#EF5D5D] text-white px-4 py-2 rounded-md'>
                                Change Password
                            </button>
                        </div>



                    </div>

                    <div className='col-span-3 flex flex-col bg-white px-4 py-4 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <span className='text-sm font-bold text-primary'>Company</span>


                            <button className='bg-[#5271FF] text-white px-4 py-2 rounded-md'>
                                Edit
                            </button>
                        </div>

                        <div>
                            <div>
                                <div className='flex items-center my-3'>
                                    <div className='border-4 border-primary  rounded-lg'>
                                        <Image src='/m-logo.png' width={100} height={100} />
                                    </div>
                                    <span className='text-xl font-semibold ml-3'>McPops</span>
                                </div>
                                <div>
                                    <div className='space-x-3 my-3 font-medium'>
                                        <span className='text-[#0A1E40]'>Food</span>
                                        <span className='text-primary mx-6'>&bull;</span>
                                        <span className='text-primary'>Ilorin, Kwra</span>
                                    </div>

                                    <p className='my-4 text-sm'>lorem lorem ipsum lorem ipsumvv bv v lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum vlorem ipsumvipsum </p>
                                    <div className='flex text-primary space-x-6 my-3'>
                                        <BsFacebook />
                                        <BsInstagram />
                                        <BsLinkedin />
                                        <BsTwitter />
                                    </div>
                                    <div className='text-md font-bold underline text-primary my-3'>
                                        www.mcpops.com
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </main>
        </div>
    )
}

export default profile