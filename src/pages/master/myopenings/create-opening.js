import React from 'react'
import Sidebar from '@/components/Sidebar'
import { useState, useEffect } from 'react';
import AddRequire from '@/components/AddRequire';
import TodoList from '@/components/Requirements';


const createOpening = () => {

    const [headline, setHeadline] = useState("")
    const [description, setDescription] = useState("")
    const [pay, setPay] = useState("")
    const [level, setExperience] = useState("")
    const [job_type, setJobType] = useState("")
    const [requirements, setRequirements] = useState([])

    const [error, setError] =  useState("")

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);


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
            console.log(data)


        } else {
            const errorResponse = await res.json();
            const errorMessage = errorResponse.message;
            setError(errorMessage)
        }
    };



    return (
        <div className='flex bg-[#DAE1FF] h-full w-full'>
            <Sidebar />
            <main className='px-32 mx-20 w-5/6 my-2 items-center'>
                <div className='text-center text-[#1D2234] text-lg font-semibold my-8'>Create A Job Opening</div>

                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>

                <form onSubmit={submitHandler}>
                    <div className='flex flex-col'>
                        <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Headline</label>
                        <input  type="text" name="headline" id="headline" className='py-3 rounded-lg focus:outline-primary' onChange={e =>{setHeadline(e.target.value)}} />
                    </div>

                    <div className='grid grid-cols-3 my-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Pay</label>
                            <div className='flex items-center'>
                                <span className='py-3 px-5 bg-white font-semibold rounded-tl-lg rounded-bl-lg border-r border-[#9E9CA0] text-[#00A858]'>₦</span>
                                <input type="text" name="headline" id="headline" className='py-3 rounded-tr-lg rounded-br-lg focus:outline-primary' onChange={e =>{setPay(e.target.value)}} />
                            </div>

                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Job-Type</label>
                            <div className='flex items-center'>
                                <input type="text" name="headline" id="headline" className='py-3 rounded-lg rounded-br-lg focus:outline-primary' onChange={e =>{setJobType(e.target.value)}} />
                            </div>

                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Experience Level</label>
                            <div className='flex items-center'>
                                <input type="text" name="headline" id="headline" className='py-3 rounded-lg rounded-br-lg focus:outline-primary' onChange={e =>{setExperience(e.target.value)}} />
                            </div>

                        </div>
                    
                    </div>

                    <div>
                        <div className='flex flex-col'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Description</label>
                            <textarea rows={6} name="headline" id="headline" className='px-3 py-2 focus:outline-primary rounded-lg' onChange={e =>{setDescription(e.target.value)}} />
                        </div>
                    </div>

                    <div className='flex flex-col my-4'>
                        <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Requirements</label>
                        <div>
                        <AddRequire
                          inputText={inputText}
                          todos={todos}
                          setTodos={setTodos}
                          setInputText={setInputText}
                          {...{setRequirements}}
                        />
                        <TodoList setTodos={setTodos} todos={todos} />

                        </div>
                    </div>

                    <div className='items-center flex justify-center'>
                        <button className='bg-primary text-white py-3 px-10 rounded-lg'>Post Opening</button>
                    </div>
                </form>
            </main>

        </div>
    )
}

export default createOpening
