import React from 'react'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { User } from 'iconsax-react'

const myopening = () => {
  const router = useRouter()
  const { id } = router.query

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
          <div className='text-primary font-medium text-3xl mb-8 mt-4'>Young Auto-mechanic needed</div>

          <div className='flex  my-8 justify-between'>

          <div className='flex items-center space-x-4'>
            <div className='bg-[#909FE4] text-white font-medium px-4 py-2'>Internship</div>
            <div className='bg-[#909FE4] text-white font-medium px-4 py-2'>$5000 <span>per month</span></div>
            <div className='bg-[#909FE4] text-white font-medium px-4 py-2'>Beginner</div>
            <div className='bg-[#909FE4] text-white font-medium px-4 py-2'>Auto-Mobile</div>
          </div>

          <div className='flex items-center bg-white text-secondary font-medium px-4 py-3 rounded-lg'>
            <User className='mr-2' size={24} color='#5271FF' />
            <span><span className='text-secondary font-bold'>20</span> Applications</span>

          </div>

          </div>
          

          <div className='grid grid-cols-2 space-x-6 mt-14'>

            <div className=' text-justify'>
              <span className='text-[#384EB0] font-medium text-lg my-2'>Description</span>
              <div className='bg-white pl-3 pr-8 py-4 rounded-lg text-[#747474] my-4 leading-6'>
                Lorem ipsum dolor sit amet consectetur. Purus at consectetur mi aliquam lacus risus nisi magna.
                Lorem ipsum dolor sit amet consectetur. Purus at consectetur mi aliquam lacus risus nisi magna.
                consectetur mi aliquam lacus risus nisi magna.
                consectetur mi aliquam lacus risus nisi magna.
              </div>
            </div>

            <div className=' text-justify'>
              <span className='text-[#384EB0] font-medium text-lg my-2'>Requirements</span>
              <div className='bg-white px-3 py-2 rounded-lg text-[#747474] my-4 space-y-1'>

                <div className='flex items-center'>
                  <span className='mr-2 text-3xl text-[#D9D9D9]'>&bull;</span>
                  <span>Bachelor degree in Business Administration</span>
                </div>

                <div className='flex items-center'>
                  <span className='mr-2 text-3xl text-[#D9D9D9]'>&bull;</span>
                  <span>Bachelor degree in Business Administration</span>
                </div>

                <div className='flex items-center'>
                  <span className='mr-2 text-3xl text-[#D9D9D9]'>&bull;</span>
                  <span>Bachelor degree in Business Administration</span>
                </div>

                <div className='flex items-center'>
                  <span className='mr-2 text-3xl text-[#D9D9D9]'>&bull;</span>
                  <span>Bachelor degree in Business Administration</span>
                </div>


              </div>
            </div>
          </div>


          <div className='flex justify-center space-x-6 my-14'>
            <button className='text-white bg-[#5271FF] rounded-lg px-6 py-3 w-40'>Edit</button>
            <button className='text-white bg-[#EF5D5D] rounded-lg px-6 py-3 w-40'>Delete</button>
          </div>

        </div>
      </main>
    </div>
  )
}

export default myopening