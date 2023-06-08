import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import EditOpening from "@/components/EditOpening";
import DeleteOpening from "@/components/DeleteOpening";

const myopening = () => {
   const [opening, setOpening] = useState([])

  const router = useRouter();


    useEffect(() => {
        if(router.isReady){
            const { id } = router.query
            // setUid(openingid)
            if (!id) return null;


    const token = localStorage.getItem('jwtToken');

    const fetchOpening = async () =>{
        try {
            const res = await fetch(`https://apprenticehubapi.onrender.com/opening/get-opening/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            });

            if (res.ok) {
            const data = await res.json();
            const c = data.data.opening;
            setOpening(c)

            } else {
            const errorResponse = await res.json();
            const errorMessage = errorResponse.message;
            console.error(errorMessage);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    fetchOpening();
    }}, [router.isReady]);

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

        <div className='px-4'>
          <div className='text-primary font-medium text-3xl mb-8 mt-4'>{opening.headline}</div>

          <div className='flex  my-8 justify-between'>

          <div className='flex items-center space-x-4'>
            <div className='bg-[#909FE4] text-white font-medium px-4 py-2'>{opening.job_type}</div>
            <div className='bg-[#909FE4] text-white font-medium px-4 py-2 text-lg'>₦{opening.pay} <span className="text-xs">per month</span></div>
            <div className='bg-[#909FE4] text-white font-medium px-4 py-2'>{opening.level}</div>
          </div>

          {/*<div className='flex items-center bg-white text-secondary font-medium px-4 py-3 rounded-lg'>*/}
          {/*  <User className='mr-2' size={24} color='#5271FF' />*/}
          {/*  <span><span className='text-secondary font-bold'>20</span> Applications</span>*/}

          {/*</div>*/}

          </div>
          

          <div className='grid grid-cols-2 space-x-6 mt-14'>

            <div className=' text-justify'>
              <span className='text-[#384EB0] font-medium text-lg my-2'>Description</span>
              <div className='bg-white pl-3 pr-8 py-4 rounded-lg text-[#747474] my-4 leading-6'>
                  {opening.description}
              </div>
            </div>

            {/*<div className=' text-justify'>*/}
            {/*  <span className='text-[#384EB0] font-medium text-lg my-2'>Requirements</span>*/}
            {/*  <div className='bg-white px-3 py-2 rounded-lg text-[#747474] my-4 space-y-1'>*/}

            {/*    <div className='flex items-center'>*/}
            {/*      <span className='mr-2 text-3xl text-[#D9D9D9]'>&bull;</span>*/}
            {/*      <span>Bachelor degree in Business Administration</span>*/}
            {/*    </div>*/}

            {/*    <div className='flex items-center'>*/}
            {/*      <span className='mr-2 text-3xl text-[#D9D9D9]'>&bull;</span>*/}
            {/*      <span>Bachelor degree in Business Administration</span>*/}
            {/*    </div>*/}

            {/*    <div className='flex items-center'>*/}
            {/*      <span className='mr-2 text-3xl text-[#D9D9D9]'>&bull;</span>*/}
            {/*      <span>Bachelor degree in Business Administration</span>*/}
            {/*    </div>*/}

            {/*    <div className='flex items-center'>*/}
            {/*      <span className='mr-2 text-3xl text-[#D9D9D9]'>&bull;</span>*/}
            {/*      <span>Bachelor degree in Business Administration</span>*/}
            {/*    </div>*/}


            {/*  </div>*/}
            {/*</div>*/}
          </div>


          <div className='flex justify-start space-x-6 my-14'>
            <EditOpening uid={opening.uid}/>
              <DeleteOpening uid={opening.uid}/>
          </div>

        </div>
      </main>
    </div>
  )
}

export default myopening
