import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BsSearch } from "react-icons/bs"
import CustomSelect from "@/components/Customselect"
import { IoLocationOutline } from "react-icons/io5"
import React, { useState } from "react";
import Job from "@/components/Job"



const type = [
  { value: 'Artisans Apprenticeship', label: 'Artisans Apprenticeship' },
  { value: 'Internship', label: 'Internship' },
  { value: 'Student I.T', label: 'Student I.T' },
];

const industry = [
  { value: 'Auto', label: 'Auto' },
  { value: 'Fashion', label: 'Fashion' },
  { value: 'Beauty', label: 'Beauty' },
];


const openings = () => {
  const [isChecked, setIsChecked] = useState(false);

  function paidChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div>
      <Navbar />
      <div className="bg-[url('/open-image.png')] bg-cover bg-no-repeat bg-center ">
        <div className="flex flex-col justify-center items-center py-16">
          <p className="font-Lexend text-5xl font-medium mb-2">Looking for Top <span className="text-secondary">Apprenticeship</span> jobs?  </p>
          <p className="font-Lexend text-2xl font-normal">Thousands of jobs in the computer, engineering and technology sectors are waiting for you. </p>
        </div>
      </div>
      <div>
        <div className="flex text-center justify-center my-4">
          <div className=" flex border border-1 w-1/3 border-gray rounded-[8px]">
            <BsSearch width={30} height={30} fill='gray' className="h-12 mx-2" />
            <input type="text" placeholder="Start Searching..." className="border-none bg-white h-12 px-2 text-md focus:outline-none w-11/12" />
          </div>
        </div>
        <div>
          <div className="flex justify-center space-x-8 my-14">
            <button className="">
              <div className=" flex border border-1 border-gray rounded-[8px]">
                <IoLocationOutline width={30} height={30} fill='gray' className="h-10 mx-2" />
                <input type="text" placeholder="Location" className="border-none bg-white h-10 px-2 text-md focus:outline-none w-11/12" />
              </div>
            </button>
            <button className="h-10 mx-2"><CustomSelect placeholder={'Type'} options={type} /></button>
            <button className="h-10 mx-2"><CustomSelect placeholder={'Industry'} options={industry} /></button>
            <div className="flex items-center h-10 mx-2">
              <input
                id="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={paidChange}
                className="w-5 h-10 border-gray-300 rounded text-secondary focus:ring-secondary"
              />
              <label htmlFor="checkbox" className="ml-2 text-gray-700">
                Paid
              </label>
            </div>

          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="columns-3 space-y-6">
          <Job openingid={'rdctfvygbuhn'} />
          <Job openingid={'rdctfvfygbuhn'}/>
          <Job openingid={'rdctfvyhgbuhn'}/>
          <Job openingid={'rdctfvygbbuhn'}/>
          <Job openingid={'rdctfvygbduhn'}/>
          <Job openingid={'rdctfvygbudhsn'}/>
          <Job openingid={'rdctfvygbuhsn'}/>
          <Job openingid={'rdctfvygsbuhn'}/>
          <Job openingid={'rdctfvygbfuhn'}/>
          <Job openingid={'rdctfvygbushn'}/>
          <Job openingid={'rdctfvygbuhen'}/>
          <Job openingid={'rdctfvygbuhnu'}/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default openings