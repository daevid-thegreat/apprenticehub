import React, { useState } from "react";

function EditOpeningModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [selectedOptionE, setSelectedOptionE] = useState("");

  const handleOptionChangeE = (e) => {
    setSelectedOptionE(e.target.value);
  };

  const [selectedOptionA, setSelectedOptionA] = useState("");

  const handleOptionChangeA = (e) => {
    setSelectedOptionA(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(name, email);
    setIsOpen(false);
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
          className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 p-6 rounded-lg ">
            <h2 className="text-2xl font-bold mb-8 text-primary">Apply Here</h2>
            <form>
              <div className="flex justify-between">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2 text-start  text-secondary font-semibold"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2 text-start  text-secondary font-semibold"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="border py-3 px-3 text-gray-700 leading-tight border-secondary focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
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
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="flex justify-between mb-4">
                <div>
                  <label htmlFor="education-level" className="block text-gray-700 mb-2 text-start  text-secondary font-semibold">Education</label>
                  <select
                    id="education-level"
                    value={selectedOptionE}
                    onChange={handleOptionChangeE}
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
                    value={selectedOptionA}
                    onChange={handleOptionChangeA}
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

export default EditOpeningModal;
