import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import PasswordModal from "@/components/PasswordModal";
import EditModal from "@/components/EditModal";
import Company from "@/components/Company";


const profile = () => {
  const [name, setName] = useState("")
  const [master, setMaster] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

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
          setMaster(data.data.user.is_master)
          setPhone(data.data.tel)
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
        <main className='px-4 w-5/6 md:w-full'>
          <div className="my-6 items-center grid grid-cols-7 px-4">
            <input type="text" placeholder="Search" className="w-full h-14 px-4 text-sm rounded-lg col-span-6 md:col-span-5 focus:outline-primary" />
            <Link className='bg-[#5271FF] whitespace-nowrap text-white px-4 py-4 rounded-md ml-10 md:ml-6 col-span-1 md:col-span-2' href='/master/myopenings/create-opening'>
              Add New
            </Link>
          </div>

          <div className='grid grid-cols-6 px-4 space-x-8 md:grid-cols-1 md:space-x-0 md:space-y-4 md:px-2'>
            <div className='col-span-3 flex flex-col bg-white px-4 py-2 rounded-lg'>
              <div className='flex justify-between items-center mb-8 mt-4'>
              <span className='text-3xl font-bold text-[#0A1E40]'>
                {name}
              </span>

                <EditModal fullname={name} phone={phone}  />

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
                  <span className='text-md font-medium text-[#747474] underline'>{phone}</span>

                </div>
              </div>

                            <div className='my-8'>
                                        <PasswordModal master={master} email={email} />

                                  </div>



            </div>

            <Company />
          </div>



        </main>
      </div>
  )
}

export default profile
