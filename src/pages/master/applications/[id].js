import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { User } from 'iconsax-react'
import AcceptApplication from "@/components/AcceptApplication";
import RejectApplication from "@/components/RejectApplication";

const application = () => {
    const router = useRouter()

    const [application, setApplication] = useState([])
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [headline , setHeadline] = useState('')
    const [status , setStatus] = useState('')
    const [created_at , setCreated_at] = useState('')
    const [education , setEducation] = useState([])
    const [age, setAge] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')


    useEffect(() => {
        if(router.isReady){
            const { id } = router.query
            if (!id) return null;


    const token = localStorage.getItem('jwtToken');

    const fetchOpening = async () =>{
        try {
            const res = await fetch(`https://apprenticehubapi.onrender.com/opening/get-application/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            });

            if (res.ok) {
            const data = await res.json();
            const c = data.data.application;
            setApplication(c)
            setName(c.user.name)
            setEmail(c.email)
            setHeadline(c.opening.headline)
            setStatus(c.status)
            setCreated_at(c.created_at)
            setEducation(c.education)
            setAge(c.age)
            setTel(c.tel)
            setMessage(c.message)

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

                <div className='px-4 bg-white items-center mx-4 rounded-lg py-6'>
                    <h2 className='text-center text-xl font-semibold my-2'>{name}</h2>
                    <h1 className='text-center text-2xl font-medium text-primary underline my-2'>Applicant's Details</h1>

                    <div className='grid grid-cols-3 my-4'>
                        {/*<div className='flex items-center font-medium my-4 mx-4'>*/}
                        {/*    <span className='text-md mr-1'>First Name :</span>*/}
                        {/*    <span className='text-md text-primary'> David</span>*/}
                        {/*</div>*/}

                        {/*<div className='flex items-center font-medium my-4 mx-4'>*/}
                        {/*    <span className='text-md mr-1'>Last Name :</span>*/}
                        {/*    <span className='text-md text-primary'> Makinde</span>*/}
                        {/*</div>*/}

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Email :</span>
                            <span className='text-md text-primary'> {application.email}</span>
                        </div>

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Phone Number :</span>
                            <span className='text-md text-primary'> {application.tel}</span>
                        </div>

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Education :</span>
                            <span className='text-md text-primary'> {application.education}</span>
                        </div>

                        <div className='flex items-center font-medium my-4 mx-4'>
                            <span className='text-md mr-1'>Age :</span>
                            <span className='text-md text-primary'> {application.age}</span>
                        </div>
                    </div>

                    <div className='flex items-center bg-[#DAE1FF] px-4 py-6 mx-4 my-4'>
                        <span className='whitespace-nowrap mx-6 font-semibold text-primary'>Message : </span>
                        <span className='pr-16 text-sm text-justify'>
                            {application.message}
                        </span>
                    </div>

                    <div className='flex justify-center space-x-6 my-10'>
                        <AcceptApplication uid={application.uid}/>
                        <RejectApplication uid={application.uid}/>
                    </div>

                    <div>
                        <h1 className='text-start font-semibold text-lg my-3'>Opening Detail</h1>
                        <span className='text-lg text-primary font-semibold my-4'>{headline} </span>
                        <div className='flex justify-between my-2'>
                            <span className='font-semibold'>Date Applied : <span className='text-primary'>{application.created_at}</span></span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default application
