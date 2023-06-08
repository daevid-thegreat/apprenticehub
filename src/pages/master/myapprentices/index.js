import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Apprentice from '@/components/Apprentice'
import Link from 'next/link'
import AddApprentice from "@/components/AddApprentice";

const myapprentices = () => {

    const [apprentices, setApprentices] = useState([])


    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        const fetchApprentices = async () => {
            try {
        const res = await fetch('https://apprenticehubapi.onrender.com/opening/get-apprentices/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
            const c = data.data.apprentices;
            setApprentices(c)// Extract name and email from the response

        } else {
          const errorResponse = await res.json();
          const errorMessage = errorResponse.message;
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
       fetchApprentices();
  }, []);

  return (
    <div className='flex bg-[#DAE1FF] h-full w-full'>
      <Sidebar/>
      <main className='px-4 w-5/6'>
          <div className="my-6 items-center grid grid-cols-7 px-4">
            <input type="text" placeholder="Search" className="w-full h-14 px-4 text-sm rounded-lg col-span-6 focus:outline-primary" />
            <Link className='bg-[#5271FF] text-white px-4 py-4 rounded-md ml-10 col-span-1' href='/master/myopenings/create-opening'>
              Add New
            </Link>
          </div>

          <div className="flex my-2 justify-center items-center">
            <AddApprentice/>
          </div>
         <div className='grid grid-cols-3 md:grid-cols-1'>
             {
                    apprentices.map((apprentice) => (
                        <Apprentice key={apprentice.id} first_name={apprentice.first_name} last_name={apprentice.last_name} email={apprentice.email} pay={apprentice.pay} created_at={apprentice.created_at} />
                    ))
             }
         </div>
      </main>
    </div>
  )
}

export default myapprentices
