import React, {useState} from 'react'
import {useRouter} from "next/router";

function EditModal(fullname, phone) {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [tel, setPhone] = useState(null);
  const [name, setName] = useState(null);


  const handleSubmit = async(e) => {

    e.preventDefault();

     const formData = {};

    // Add non-null fields to the formData object
    if (name !== null) {
      formData.name = name;
    }
    if (tel !== null) {
      formData.tel = tel;
    }
        const token = localStorage.getItem('jwtToken');


        const res = await fetch('https://apprenticehubapi.onrender.com/auth/update-profile/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify(formData),
        });

        console.log(name, tel)

        if (res.ok) {
            closeModal()
            router.reload()
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
            <h2 className="text-2xl font-bold mb-8 text-[#00A858]">Edit profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-x-4 justify-between">

                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>

                  <div className='flex flex-col'>

                      <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2 text-start  text-secondary font-semibold"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="border w-full py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder={fullname.fullname}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                      <div className="mb-8">
                <label
                  className="block mb-2 text-start  text-secondary font-semibold"
                  htmlFor="lastname"
                >
                  Phone Number
                </label>
                <div className="flex items-center border border-secondary w-full">
                  <span className="bg-[#D9D9D9] text-[#A1A1A1] py-3 px-2">+234</span>
                  <input
                  className="focus:outline-none focus:shadow-outline leading-tight w-full py-3 px-3"
                  id="phone"
                  type="tel"
                  onChange={e => setPhone(e.target.value)}
                  placeholder={phone.phone}
                />
                </div>

              </div>
                  </div>



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
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
    )
}
export default EditModal
