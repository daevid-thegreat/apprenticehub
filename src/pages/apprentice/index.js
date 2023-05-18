import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import AppNav from "@/components/AppNav";


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
        <div className={' bg-[#DAE1FF] h-screen w-full'}>
            <AppNav/>
            <main className='px-6 h-full w-full my-14 mx-10 md:mx-2'>


                <Tabs position="relative" colorScheme="green">
                    <TabList className='space-x-8 text-md font-medium my-2 text-secondary'>
                        <Tab _selected={{ color: '#5271FF' }}>Profile</Tab>
                        <Tab _selected={{ color: '#5271FF' }}>My Applications</Tab>
                        <Tab _selected={{ color: '#5271FF' }}>My Courses</Tab>
                    </TabList>

                    <TabIndicator
                        mt="-2.5px"
                        height="3px"
                        bg={"#5271FF"}
                        borderRadius="1px"
                    />

                    <TabPanels className={'my-6'}>
                        <TabPanel>
                            <div className='w-1/2 md:w-full'>
                                <div className='flex flex-col bg-white px-4 py-2 rounded-lg mb-8 '>
                                    <div className='flex justify-between items-center my-6 '>
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
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p>my applicsconurojv oirkmvitmvmmrtv!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>my coursedje j je j j j ifj i f vi if k jf !</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>





            </main>
        </div>
    )
}

export default profile