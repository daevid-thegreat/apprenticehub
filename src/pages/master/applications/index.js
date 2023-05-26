import React from 'react'
import Sidebar from '@/components/Sidebar'
import Application from '@/components/Application'
import Link from 'next/link'

const myapplications = () => {

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
         <div className='grid grid-cols-3'>
            <Application/>
            <Application/>
            <Application/>
            <Application/>
            <Application/>
            <Application/>
            <Application/>
            <Application/>
            <Application/>
         </div>
      </main>
    </div>
  )
}

export default myapplications
