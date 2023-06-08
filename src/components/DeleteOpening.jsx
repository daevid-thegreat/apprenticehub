import React, { useState } from "react";
import { useRouter } from "next/router";

function Applymodalform(uid) {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();
        const token = localStorage.getItem('jwtToken');
        const res = await fetch(`https://apprenticehubapi.onrender.com/opening/delete-opening/${uid.uid}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
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
        className="text-white bg-[#EF5D5D] rounded-lg px-6 py-3 w-40"
      >
        Delete Opening
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          className="h-screen fixed top-0 left-0 w-screen bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 p-6 rounded-lg md:w-full md:h-screen ">
            <h2 className="text-xl font-bold mb-8 text-primary">Do you really want to delete this opening?</h2>

            <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>

              <p className="text-md text-red text-center my-4">
               If you click ‘delete’ you can’t get this opening back
              </p>


            <form onSubmit={handleSubmit}>

              <div className="flex justify-center space-x-4">
                <button
                  className="py-4 px-8 rounded-lg bg-primary text-white"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="py-4 px-8 rounded-lg bg-[#EB2929] text-white"
                  type="submit"
                >
                  Delete
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
