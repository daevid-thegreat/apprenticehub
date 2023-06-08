import React from 'react'
import Sidebar from '@/components/Sidebar'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
// import AddRequire from '@/components/AddRequire';
// import TodoList from '@/components/Requirements';


const createOpening = () => {
    const  router = useRouter();

    const [headline, setHeadline] = useState("")
    const [description, setDescription] = useState("")
    const [pay, setPay] = useState("")
    const [level, setExperience] = useState("")
    const [job_type, setJobType] = useState("")
    const [requirements, setRequirements] = useState([])

    const [error, setError] =  useState("")

    // const [inputText, setInputText] = useState('');
    // const [todos, setTodos] = useState([]);


    const submitHandler = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('jwtToken');

        const res = await fetch('https://apprenticehubapi.onrender.com/opening/add-opening/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ headline, pay, description, level, job_type,requirements }),
        });

        if (res.ok) {
            const data = await res.json();
            router.push('/master/myopenings')


        } else {
            const errorResponse = await res.json();
            const errorMessage = errorResponse.message;
            setError(errorMessage)
        }
    };



    return (
        <div className='flex bg-[#DAE1FF] h-full w-full'>
            <Sidebar />
            <main className='px-32 mx-20 w-5/6 my-2 items-center md:mx-8 md:px-10'>
                <div className='text-center text-[#1D2234] text-lg font-semibold my-8'>Create A Job Opening</div>

                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>

                <form onSubmit={submitHandler}>
                    <div className='flex flex-col'>
                        <label htmlFor="headline" className='text-md font-medium text-[#1D2234] my-1'>Headline</label>
                        <input  type="text" name="headline" id="headline" className='py-3 px-3 rounded-lg focus:outline-primary' onChange={e =>{setHeadline(e.target.value)}} />
                    </div>

                     <div className='flex flex-col my-4 w-full'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Pay</label>
                            <div className='flex items-center w-full'>
                                <span className='py-3 px-5 bg-white font-semibold rounded-tl-lg rounded-bl-lg border-r border-[#9E9CA0] text-[#00A858]'>₦</span>
                                <input type="number" name="headline" id="headline" className='w-96 md:w-60 py-3 px-3 rounded-tr-lg rounded-br-lg focus:outline-primary' onChange={e =>{setPay(e.target.value)}} />
                            </div>

                        </div>

                    <div className='flex space-x-6 my-4'>


                        <div className='flex flex-col'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Job-Type</label>
                            <div className='flex items-center'>
                               <select name="job_type" id="job_type" className='w-60 md:w-44 py-3 rounded-lg rounded-br-lg focus:outline-primary px-3' onChange={e =>{setJobType(e.target.value)}}>
                                      <option value="Full-Time">ApprenticeShip</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Volunteer">Volunteer</option>
                                </select>
                            </div>

                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Experience Level</label>
                            <div className='flex items-center'>
                                 <select name="level" id="level" className='w-60 md:w-44 py-3 rounded-lg rounded-br-lg focus:outline-primary px-3' onChange={e =>{setExperience(e.target.value)}}>
                                        <option value="Entry Level">Entry Level</option>
                                        <option value="Mid Level">Mid Level</option>
                                        <option value="Senior Level">Senior Level</option>
                                </select>
                            </div>

                        </div>
                    
                    </div>

                    <div>
                        <div className='flex flex-col'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Description</label>
                            <textarea rows={6} name="headline" id="headline" className='px-3 py-2 focus:outline-primary rounded-lg' onChange={e =>{setDescription(e.target.value)}} />
                        </div>
                    </div>

                    {/*<div className='flex flex-col my-4'>*/}
                    {/*    <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Requirements</label>*/}
                    {/*    <div>*/}
                    {/*    <AddRequire*/}
                    {/*      inputText={inputText}*/}
                    {/*      todos={todos}*/}
                    {/*      setTodos={setTodos}*/}
                    {/*      setInputText={setInputText}*/}
                    {/*      {...{setRequirements}}*/}
                    {/*    />*/}
                    {/*    <TodoList setTodos={setTodos} todos={todos} />*/}

                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className='items-center flex justify-center my-6'>
                        <button className='bg-primary text-white py-3 px-10 rounded-lg'>Post Opening</button>
                    </div>
                </form>
            </main>

        </div>
    )
}

export default createOpening
