import React, { useState } from "react";
import { useRouter } from "next/router";

function Applymodalform(uid) {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const [headline, setHeadline] = useState("")
    const [job_type, setJob_type] = useState("")
    const [description, setDescription] = useState("")
    const [pay, setPay] = useState("")
    const [level, setLevel] = useState("")

    const [error, setError] = useState("")


  const handleSubmit = async(e) => {
    e.preventDefault();
        const token = localStorage.getItem('jwtToken');
        const res = await fetch(`https://apprenticehubapi.onrender.com/opening/update-opening/${uid.uid}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                headline: headline,
                job_type: job_type,
                description: description,
                pay: pay,
                level: level,
            }),
            }
        );


        if (res.ok) {

            router.push('/master/myopenings')


        } else {
            const errorResponse = await res.json();
            const errorMessage = errorResponse.message;

            setError(errorMessage)

            console.error(errorMessage);
        }
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white bg-[#5271FF] rounded-lg px-6 py-3 w-40"
      >
        Edit Opening
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          className="h-screen fixed top-0 left-0 w-screen bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 p-6 rounded-lg md:w-full md:h-screen ">
            <h2 className="text-2xl font-bold mb-8 text-primary">Apply Here</h2>

            <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>


            <form onSubmit={handleSubmit}>

              <div className='flex flex-col'>
                        <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Headline</label>
                        <input  type="text" name="headline" id="headline" className='py-3 rounded-lg focus:outline-primary' onChange={e =>{setHeadline(e.target.value)}} />
                    </div>

                 <div className='flex flex-col my-4'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Pay</label>
                            <div className='flex items-center'>
                                <span className='py-3 px-5 bg-white font-semibold rounded-tl-lg rounded-bl-lg border-r border-[#9E9CA0] text-[#00A858]'>₦</span>
                                <input type="text" name="headline" id="headline" className='py-3 rounded-tr-lg rounded-br-lg focus:outline-primary' onChange={e =>{setPay(e.target.value)}} />
                            </div>

                        </div>

                    <div className='flex my-4 space-x-6'>


                        <div className='flex flex-col w-full'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Job-Type</label>
                            <div className='flex items-center w-full'>
                               <select name="job_type" id="job_type" className='py-3 rounded-lg rounded-br-lg focus:outline-primary px-3' onChange={e =>{setJob_type(e.target.value)}}>
                                      <option value="Full-Time">ApprenticeShip</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Volunteer">Volunteer</option>
                                </select>
                            </div>

                        </div>

                        <div className='flex flex-col w-full'>
                            <label htmlFor="healine" className='text-md font-medium text-[#1D2234] my-1'>Experience Level</label>
                            <div className='flex items-center w-full'>
                                 <select name="level" id="level" className='py-3 rounded-lg rounded-br-lg focus:outline-primary px-3' onChange={e =>{setLevel(e.target.value)}}>
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
                            <textarea rows={5} name="headline" id="headline" className='px-3 py-2 focus:outline-primary rounded-lg' onChange={e =>{setDescription(e.target.value)}} />
                        </div>
                    </div>

              <div className="flex justify-center my-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  className="py-4 px-8 rounded-lg bg-primary text-white"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Applymodalform;
