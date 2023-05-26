import React, {useState} from 'react'
import {useRouter} from "next/router";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const EditCompanyModal = () => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);


  const handleSubmit = async(e) => {

    e.preventDefault();

        const res = await fetch('https://apprenticehubapi.onrender.com/auth/change-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, old_password, password }),
        });

        if (res.ok) {



        } else {
            const errorResponse = await res.json();
            const errorMessage = errorResponse.message;

            setError(errorMessage)

            console.error(errorMessage);
        }
  };
  const closeModal = () => {
    setIsOpen(false);
    setError(null)
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsOpen(false);
        setError(null)
    }
  };


    return (
        <>
      <button
        onClick={() => setIsOpen(true)}
        className='bg-[#5271FF] text-white px-4 py-2 rounded-md'
      >
        Edit
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 md:w-full p-6 rounded-lg ">
            <h2 className=" text-2xl font-bold mb-8 text-[#EF5D5D]">Change Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-x-4 justify-between">

                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>
                  ....
              </div>
              <div className="flex justify-center">
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
    )
}
export default EditCompanyModal
