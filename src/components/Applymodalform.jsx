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
        const res = await fetch(`https://apprenticehubapi.onrender.com/opening/apply-opening/${uid.uid}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                email: email,
                age: age,
                education: education,
                tel: tel,
                message: info,
            }),
            }
        );


        if (res.ok) {

            router.push('/apprentice')


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
        className="py-4 px-8 rounded-lg bg-primary text-white"
      >
        Apply Now
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
                  type="text"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>

              <div className="flex justify-between mb-4">
                <div>
                  <label htmlFor="education-level" className="block text-gray-700 mb-2 text-start  text-secondary font-semibold">Education</label>
                  <select
                    id="education-level"
                    onChange={(e) => setEducation(e.target.value)}
                    className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline"
                  >
                    
                    <option value="high-school">High School</option>
                    <option value="college">College</option>
                    <option value="graduate-school">Graduate School</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="age-range" className="block text-gray-700  mb-2 text-start text-secondary font-semibold">Age</label>
                  <select
                    id="age-range"
                    onChange={(e) => setAge(e.target.value)}
                    className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select an age range</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55+">55+</option>
                  </select>
                </div>
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
                  id="username"
                  type="text"
                  placeholder="1234567890"
                    onChange={(e) => setTel(e.target.value)}
                />
                </div>
                
              </div>

              <div className="mb-4">
                <textarea
                  rows={5}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Do you have any other things you would like to tell us?"
                    onChange={(e) => setInfo(e.target.value)}
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
                  Apply Now
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
