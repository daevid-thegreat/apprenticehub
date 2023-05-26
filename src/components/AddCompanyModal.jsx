import React, {useState} from 'react'
import {useRouter} from "next/router";

const AddCompanyModal = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
    logo: null,
    name: '',
    city: '',
    state: '',
    website: '',
    industry: '',
    description: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Read the file using FileReader
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result;
      setFormData((prevData) => ({
      ...prevData,
      logo: base64Data,
    }));
    };
    reader.readAsDataURL(file);
  };

    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);



  const handleSubmit = async(e) => {

        e.preventDefault();
        const token = localStorage.getItem('jwtToken');
        const res = await fetch('https://apprenticehubapi.onrender.com/auth/add-company/', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Token ${token}`,
                'Accept-Encoding': 'utf-8',
            },
            body: formData,
        });

        console.log(formData)

        if (res.ok) {

            console.log(formData)

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
        Add Company
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          className="h-screen fixed top-0 left-0 w-screen bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 md:w-full p-6 rounded-lg h-screen overflow-y-scroll">
            <h2 className="text-center text-2xl font-bold mb-6 text-[#00A858]">Add Company</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-x-3 justify-between">

                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>


                  <form onSubmit={handleSubmit} className=''>
      <label className="flex items-center w-full text-md font-medium text-secondary my-2">
        Company Logo:
        <input type="file" accept="image/*" className="ml-1 bg-white py-3 px-3 rounded-lg" onChange={handleFileChange} />
      </label>
      <label className="flex items-center w-full text-md font-medium text-secondary my-2">
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="rounded-lg ml-3 w-full px-3 py-3 focus:outline-primary font-normal" />
      </label>
                      <div className="flex items-center">
                          <label className="flex flex-col text-md font-medium text-secondary my-2">
                            City:
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className="rounded-lg w-full px-3 py-3 focus:outline-primary font-normal"/>
                          </label>
                          <label className="flex flex-col  text-md font-medium text-secondary my-2 ml-3">
                            State:
                            <input type="text" name="state" value={formData.state} onChange={handleChange} className="rounded-lg  w-full px-3 py-3 focus:outline-primary font-normal"/>
                          </label>
                      </div>
      <div className="flex items-center">
          <label className="flex flex-col  text-md font-medium text-secondary my-2">
        Website:
        <input type="text" name="website" value={formData.website} onChange={handleChange} className="rounded-lg w-full px-3 py-3 focus:outline-primary font-normal"/>
      </label>
      <label className="flex flex-col text-md font-medium text-secondary my-3 ml-2">
        Industry:
        <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="rounded-lg   w-full px-3 py-3 focus:outline-primary font-normal"/>
      </label>
      </div>

      <label className="flex flex-col w-full text-md font-medium text-secondary my-2">
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} className="rounded-lg w-full px-3 py-3 focus:outline-primary font-normal" />
      </label>
                      <div className="grid grid-cols-2">
      <label className="flex flex-col text-md font-medium text-secondary my-2 mr-4">
        Facebook:
        <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} className="rounded-lg w-full px-3 py-2 focus:outline-primary font-normal" />
      </label>
      <label className="flex flex-col text-md font-medium text-secondary my-2 mr-4">
        Twitter:
        <input type="text" name="twitter" value={formData.twitter} onChange={handleChange} className="rounded-lg w-full px-3 py-2 focus:outline-primary font-normal" />
      </label>
      <label className="flex flex-col text-md font-medium text-secondary my-2 mr-4">
        LinkedIn:
        <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} className="rounded-lg w-full px-3 py-2 focus:outline-primary font-normal" />
      </label>
      <label className="flex flex-col text-md font-medium text-secondary my-2 mr-4">
        Instagram:
        <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} className="rounded-lg w-full px-3 py-2 focus:outline-primary font-normal" />
      </label>
                          </div>
    </form>


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
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
    )
}
export default AddCompanyModal
