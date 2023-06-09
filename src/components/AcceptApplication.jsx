import React, { useState } from "react";
import { useRouter } from "next/router";

function Applymodalform(uid) {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [age , setAge] = useState("");
  const [education, setEducation] = useState("");
  const [tel , setTel] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();
        const token = localStorage.getItem('jwtToken');
        const res = await fetch(`https://apprenticehubapi.onrender.com/opening/respond-to-application/${uid.uid}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                stat: "accepted",
            }),
            }
        );


        if (res.ok) {

            router.push('/master/applications')


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
        Accept
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          className="h-screen fixed top-0 left-0 w-screen bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 p-6 rounded-lg md:w-full md:h-screen ">
            <h2 className="text-2xl font-bold mb-8 text-primary">Accept this application</h2>

            <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>

              <p className="my-4 text-lg text-center">
                  Are you sure you want to accept this application?
              </p>


            <form onSubmit={handleSubmit}>

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
                  Accept
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
