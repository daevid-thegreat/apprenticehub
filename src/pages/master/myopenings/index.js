import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Opening from '@/components/Opening'
import Link from 'next/link'

const myopenings = () => {

    const [openings, setOpenings] = useState([])
    const [zeroOpenings, setZeroOpenings] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        const fetchUserOpenings = async () => {
            try {
        const res = await fetch('https://apprenticehubapi.onrender.com/opening/get-my-openings/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          const c = data.data.openings;
          setOpenings(c)// Extract name and email from the response

        } else if(res.status === 204){
            setZeroOpenings(true)
        } else {
          const errorResponse = await res.json();
          const errorMessage = errorResponse.message;
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
       fetchUserOpenings();
  }, []);


    if (zeroOpenings) {
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
                    <div className='flex flex-col items-center justify-center h-full'>
                        <h1 className='text-2xl font-bold'>You have no openings yet</h1>
                        <Link href='/master/myopenings/create-opening'>
                            <a className='bg-[#5271FF] text-white px-4 py-4 rounded-md mt-10'>
                                Add New
                            </a>
                        </Link>
                    </div>
                </main>
            </div>
        )
    }else {

        return (
            <div className='flex bg-[#DAE1FF] h-full w-full'>
                <Sidebar/>
                <main className='px-4 w-5/6'>
                    <div className="my-6 items-center grid grid-cols-7 px-4 space-x-4">
                        <input type="text" placeholder="Search"
                               className="w-full h-14 px-4 text-sm rounded-lg col-span-6 focus:outline-primary md:col-span-5"/>
                        <Link className='bg-[#5271FF] text-white px-4 py-4 rounded-md col-span-1 md:col-span-2 whitespace-nowrap'
                              href='/master/myopenings/create-opening'>
                            Add New
                        </Link>
                    </div>

                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        {
                            openings.map((opening) => (

                                <Opening key={opening.id} headline={opening.headline} job_type={opening.job_type}
                                         description={opening.description} uid={opening.uid} pay={opening.pay}/>
                            ))
                        }
                    </div>
                </main>
            </div>
        )
    }
}

export default myopenings
