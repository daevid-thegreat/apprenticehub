import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Application from '@/components/Application'
import Link from 'next/link'

const myapplications = () => {

    const [applications, setApplications] = useState([])
    const [zeroApplications, setZeroApplications] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        const fetchApplications = async () => {
            try {
        const res = await fetch('https://apprenticehubapi.onrender.com/opening/get-applications/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          const c = data.data.applications;
          setApplications(c)
            console.log(c)

        } else if(res.status === 204){
            setZeroApplications(true)
        } else {
          const errorResponse = await res.json();
          const errorMessage = errorResponse.message;
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
       fetchApplications();
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
         <div className='grid grid-cols-3 md:grid-cols-1'>
             {
                 applications.map((application) => (
                    <Application key={application.id} status={application.status} name={application.user.name} uid={application.uid} headline={application.opening.headline} created_at={application.created_at}/>
                    ))
             }
         </div>
      </main>
    </div>
  )
}

export default myapplications
