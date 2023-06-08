import React, { useState } from "react";
import { useRouter } from "next/router";

function Applymodalform(uid) {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pay, setPay] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();
        const token = localStorage.getItem('jwtToken');
        const res = await fetch(`https://apprenticehubapi.onrender.com/opening/add-apprentice/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                email: email,
                first_name: firstname,
                last_name: lastname,
                pay: pay,
            }),
            }
        );


        if (res.status === 201) {

            await router.reload();


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
        className="py-2 px-6 rounded-lg bg-primary text-white justify-center items-center"
      >
        Add Apprentice
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          className="h-screen fixed top-0 left-0 w-screen bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 p-6 rounded-lg md:w-full md:h-screen ">
            <h2 className="text-2xl font-bold mb-8 text-primary">Add an Apprentice</h2>

            <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>


            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                  htmlFor="lastname"
                >
                  First Name
                </label>
                <input
                  className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                  id="username"
                  type="text"
                  placeholder="first name"
                  onChange={(e) => setFirstname(e.target.value)}

                />
              </div>

                <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                  id="username"
                  type="text"
                  placeholder="last name"
                  onChange={(e) => setLastname(e.target.value)}

                />
              </div>

                <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                  htmlFor="lastname"
                >
                  Email
                </label>
                <input
                  className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                  id="username"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2 text-start text-secondary font-semibold"
                  htmlFor="lastname"
                >
                  Pay
                </label>
                <input
                  className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline w-full"
                  id="pay"
                  type="number"
                  placeholder="012345678"
                  onChange={(e) => setPay(e.target.value)}

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
