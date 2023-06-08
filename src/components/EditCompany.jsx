import React, { useState } from "react";
import { useRouter } from "next/router";

function Applymodalform(uid) {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [website, setWebsite] = useState("")
  const [industry, setIndustry] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();
        const token = localStorage.getItem('jwtToken');
        const res = await fetch(`https://apprenticehubapi.onrender.com/auth/update-company/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                name: name,
                city: city,
                state: state,
                website: website,
                industry: industry,
                description: description,
            }),
            }
        );


        if (res.ok) {

            router.push('/master')


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
        className="bg-[#5271FF] text-white px-4 py-2 rounded-md"
      >
        Edit Company
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          className="h-screen fixed top-0 left-0 w-screen bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 p-6 rounded-lg md:w-full md:h-screen ">
            <h2 className="text-2xl font-bold mb-8 text-primary">Edit Company</h2>

            <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>


            <form onSubmit={handleSubmit}>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                  htmlFor="lastname"
                >
                  Name
                </label>
                <input
                  className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                  id="name"
                  type="text"
                  placeholder="Company Name"
                  onChange={(e) => setName(e.target.value)}

                />
              </div>
                <div className="flex justify-between">

                        <div className="mb-4">
                        <label
                          className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                          htmlFor="lastname"
                        >
                          City
                        </label>
                        <input
                          className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                          id="username"
                          type="text"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}

                        />
                      </div>

                        <div className="mb-4">
                        <label
                          className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                          htmlFor="lastname"
                        >
                          State
                        </label>
                        <input
                          className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                          id="state"
                          type="text"
                          placeholder="State"
                          onChange={(e) => setState(e.target.value)}

                        />
                      </div>

                    </div>

                <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                  htmlFor="lastname"
                >
                  Website
                </label>
                <input
                  className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                  id="username"
                  type="text"
                  placeholder="Company Website"
                  onChange={(e) => setWebsite(e.target.value)}

                />
              </div>

                <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                  htmlFor="lastname"
                >
                  Industry
                </label>
                <input
                  className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                  id="username"
                  type="text"
                  placeholder="Industry"
                  onChange={(e) => setIndustry(e.target.value)}

                />
              </div>

                <div className="mb-4">
                <textarea
                  rows={5}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
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
  );
}

export default Applymodalform;
