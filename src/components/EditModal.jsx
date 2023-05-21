import {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useRouter} from "next/router";

function EditModal(email, master) {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [old_password, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

  const handleSubmit = async(e) => {

    e.preventDefault();

      email = email.email

        const res = await fetch('https://apprenticehubapi.onrender.com/auth/change-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, old_password, password }),
        });

        if (res.ok) {

            localStorage.removeItem('jwtToken');
            if (master) {
                await router.push('/login-master'
                )
            }else{
                await router.push('/login-apprentice'
                )
            }

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
        className='bg-[#EF5D5D] text-white px-4 py-2 rounded-md'
      >
        Change Password
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-[#BBC8FF] w-4/12 md:w-full p-6 rounded-lg ">
            <h2 className="text-2xl font-bold mb-8 text-[#EF5D5D]">Change Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-x-4 justify-between">

                <div className="text-center text-[#EF5D5D] font-semibold text-lg">
                    {error && <p>{error}</p>}
                </div>
                  <div className='flex my-3'>
                                <input
                                    className=" rounded-lg py-4 px-3 leading-tight focus:outline-primary bg-[#F7F7F7] focus:shadow-outline w-full"
                                    id="fullname"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter old password"
                                    onChange={e => setOldPassword(e.target.value)}
                                />
                                <div
                                    className="-mx-8 mt-3 text-center cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible className="text-gray w-6 h-6" />
                                    ) : (
                                        <AiOutlineEye className="text-gray w-6 h-6" />
                                    )}
                                </div>

                  </div>

                  <div className='flex my-3'>
                                <input
                                    className=" rounded-lg py-4 px-3 leading-tight focus:outline-primary bg-[#F7F7F7] focus:shadow-outline w-full"
                                    id="fullname"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter a new password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <div
                                    className="-mx-8 mt-3 text-center cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible className="text-gray w-6 h-6" />
                                    ) : (
                                        <AiOutlineEye className="text-gray w-6 h-6" />
                                    )}
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
                  Change Password
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
