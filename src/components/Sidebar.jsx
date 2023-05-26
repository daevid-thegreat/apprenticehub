import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Note, Briefcase, TagUser, User, InfoCircle, LogoutCurve } from 'iconsax-react';
import {useRouter} from "next/router";


const Sidebar = () => {
    const router = useRouter();


    const navs=[
        {
            name: 'Opening',
            icon: <Note size="24" className='mr-2' variant='Bold'/>,
            path: '/master/myopenings'
        },
        {
            name: 'Apprentice',
            icon: <Briefcase size="24" className='mr-2' variant='Bold'/>,
            path: '/master/myapprentices'
        },
        {
            name: 'Applications',
            icon: <TagUser size="24" className='mr-2' variant='Bold'/>,
            path: '/master/applications'
        },
        {
            name: 'My Profile',
            icon: <User size="24" className='mr-2' variant='Bold'/>,
            path: '/master'
        },
        ]

    const isActive = (path) => {
      return router.pathname === path ? 'active' : '';
    };

    return (
        <aside className='w-1/5 px-6 pb-8 space-y-10 bg-white h-screen sticky left-0 top-0 flex flex-col justify-between md:hidden'>
            <div>
            <div className='mb-16 mt-6'>
                <Image src="/logo.png" alt="logo" width={305} height={89.52} />
            </div>

            <div className='flex flex-col space-y-4 text-semibold'>

                {navs.map((nav, index) => (
                <Link key={index} className={`flex items-center rounded-lg  px-4 py-3 ${router.pathname===nav.path ? 'bg-[#5271FF] text-white' : 'text-[#9E9CA0]'}`} href={nav.path}>
                    {nav.icon}
                    <p>{nav.name}</p>
                </Link>
                ))}

            </div>
            </div>
            
            <div className='flex flex-col space-y-4 '>
                <Link className='flex items-center text-[#5271FF] px-4 py-3' href="/help">
                    <InfoCircle size="24" className='mr-2' />
                    <p>Help</p>
                </Link>

                <Link className='flex items-center text-[#EF5D5D] px-4 py-3' href="/logout">
                    <p>Logout</p>
                    <LogoutCurve size="24" className='ml-2' />
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar
