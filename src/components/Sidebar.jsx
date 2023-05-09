import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Note, Briefcase, TagUser, User, InfoCircle, LogoutCurve } from 'iconsax-react';

const Sidebar = () => {
    return (
        <aside className='w-1/6 px-6 pb-8 space-y-10 bg-white h-screen sticky left-0 top-0 flex flex-col justify-between'>
            <div>
            <div className='mb-16 mt-6'>
                <Image src="/logo.png" alt="logo" width={305} height={89.52} />
            </div>

            <div className='flex flex-col space-y-4 text-semibold'>

                <Link className='flex items-center text-[#9E9CA0] px-4 py-3' href="/master/myopenings">
                    <Note size="24" className='mr-2' variant='Bold'/>
                    <p>Opening</p>
                </Link>

                <Link className='flex items-center text-[#9E9CA0] px-4 py-3' href="/master/myapprentices">
                    <Briefcase size="24" className='mr-2' variant='Bold'/>
                    <p>Apprentice</p>
                </Link>

                <Link className='flex items-center text-[#9E9CA0] px-4 py-3' href="/master/applications">
                    <TagUser size="24" className='mr-2' variant='Bold' />
                    <p>Applications</p>
                </Link>

                <Link className='flex items-center text-white bg-[#5271FF] px-4 py-3 rounded-lg' href="/master">
                    <User size="24" className='mr-2' variant='Bold' />
                    <p>My Profile</p>
                </Link>
            </div>
            </div>
            
            <div className='flex flex-col space-y-4 '>
                <Link className='flex items-center text-[#5271FF] px-4 py-3' href="/">
                    <InfoCircle size="24" className='mr-2' />
                    <p>Help</p>
                </Link>

                <Link className='flex items-center text-[#EF5D5D] px-4 py-3' href="/">
                    <p>Logout</p>
                    <LogoutCurve size="24" className='ml-2' />
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar