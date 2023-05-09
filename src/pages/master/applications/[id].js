import React from 'react'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { User } from 'iconsax-react'

const application = () => {
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

                <div className='px-4 bg-white items-center mx-4 rounded-lg py-6'>
                    <h2 className='text-center text-xl font-semibold my-2'>David Makinde</h2>
                    <h1 className='text-center text-2xl font-medium text-primary underline my-2'>Applicant's Details</h1>

                    <div className='grid grid-cols-3 my-4'>
                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>First Name :</span>
                            <span className='text-md text-primary'> David</span>
                        </div>

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Last Name :</span>
                            <span className='text-md text-primary'> Makinde</span>
                        </div>

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Email :</span>
                            <span className='text-md text-primary'> daevidthegreat@gmail.com</span>
                        </div>

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Phone Number :</span>
                            <span className='text-md text-primary'> +2349099691978</span>
                        </div>

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Education :</span>
                            <span className='text-md text-primary'> High School</span>
                        </div>

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Age :</span>
                            <span className='text-md text-primary'> 18 - 25</span>
                        </div>
                    </div>

                    <div className='flex items-center bg-[#DAE1FF] px-4 py-6 mx-4 my-4'>
                        <span className='whitespace-nowrap mx-6 font-semibold text-primary'>Message : </span>
                        <span className='pr-16 text-sm text-justify'>
                            Lorem ipsum dolor sit amet consectetur. Sapien id donec leo amet enim ac at sollicitudin. Nisl ultrices et maecenas phasellus placerat placerat in. Suspendisse id est egestas justo semper eu nullam. Nisi ac non non pellentesque faucibus egestas ac. Lacus nisl vestibulum fames nisi ac ante amet. Neque accumsan ut.
                            Lorem ipsum dolor sit amet consectetur. Sapien id donec leo amet enim ac at sollicitudin. Nisl ultrices
                        </span>
                    </div>

                    <div className='flex justify-center space-x-6 my-10'>
                        <button className='text-white bg-[#5271FF] rounded-lg px-6 py-3 w-40'>Accept</button>
                        <button className='text-white bg-[#EF5D5D] rounded-lg px-6 py-3 w-40'>Reject</button>
                    </div>

                    <div>
                        <h1 className='text-start font-semibold text-lg my-3'>Opening Detail</h1>
                        <span className='text-lg text-primary font-semibold my-4'>Young engineer needed </span>
                        <div className='flex justify-between my-2'>
                            <span className='font-semibold'>Date Created : <span className='text-primary'>12/04/23</span></span>
                            <span className='font-semibold'>Date Applied : <span className='text-primary'>12/04/23</span></span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default application