import React, {useEffect, useState} from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import AddCompanyModal from "@/components/AddCompanyModal";
import Image from "next/image";

const Company = () => {
  const [company_exists, setCompanyExists] = useState(false);
  const [company, setCompany] = useState(null);

  const [error, setError] = useState(null)

    useEffect(() => {
        const getCompany = async () => {
            const token = localStorage.getItem('jwtToken');

            try {
                const res = await fetch('https://apprenticehubapi.onrender.com/auth/get-company/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`,
                    },
                });

                if (res.ok) {
                    const data = await res.json();
                    setCompany(data.data.company)
                    setCompanyExists(true);
                } else {
                    const errorResponse = await res.json();
                    const errorMessage = errorResponse.message;
                    setError(errorMessage);
                    setCompanyExists(false);
                  }
            } catch (error) {
                console.error('Error:', error.message);
                const errorrr = error.message;
                setError(errorrr);
                setCompanyExists(false);
            }
        };

        getCompany();
    }, []);


    if (company_exists) {
        return (
            <div className='col-span-3 flex flex-col bg-white px-4 py-4 rounded-lg'>
              <div className='flex items-center justify-between'>
                <span className='text-sm font-bold text-primary'>Company</span>


                <button className='bg-[#5271FF] text-white px-4 py-2 rounded-md'>
                  Edit
                </button>
              </div>

              <div>
                <div>
                  <div className='flex items-center my-3'>
                    <div className='border-4 border-primary  rounded-lg'>
                      <Image src={`https://apprenticehubapi.onrender.com/${company.logo}`} width={100} height={100} />
                    </div>
                    <span className='text-xl font-semibold ml-3'>{company.name}</span>
                  </div>
                  <div>
                    <div className='space-x-3 my-3 font-medium'>
                      <span className='text-[#0A1E40]'>{company.industry}</span>
                      <span className='text-primary mx-6'>&bull;</span>
                      <span className='text-primary'>{company.city}, {company.state}</span>
                    </div>

                    <p className='my-4 text-sm'>{company.description} </p>
                    <div className='flex text-primary space-x-6 my-3'>
                      <BsFacebook />
                      <BsInstagram />
                      <BsLinkedin />
                      <BsTwitter />
                    </div>
                    <div className='text-md font-bold underline text-primary my-3'>
                        {company.website}
                    </div>

                  </div>
                </div>
              </div>

            </div>
        )
    } else {
        return (
            <div className='col-span-3 flex flex-col bg-white px-4 py-4 rounded-lg'>
                <p className="my-4">
                    You don't have a company yet. Add a company to your profile
                </p>

                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>
                <div className='flex items-center justify-between'>

                    <AddCompanyModal />
                </div>

            </div>
        )
    }
}
export default Company
