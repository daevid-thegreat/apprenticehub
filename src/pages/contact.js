import Navbar from "@/components/Navbar"
import { CallCalling, Sms, LocationTick, Instagram } from 'iconsax-react';
import {BsTwitter, BsLinkedin} from 'react-icons/bs'
import ContactForm from "@/components/Contactform";
import Link from "next/link";
import Footer from "@/components/Footer";


const contact = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center">
                <div className="self-center align-middle my-8">
                    <p className="flex self-center font-bold text-5xl">Contact Us</p>
                    <p className="flex font-medium text-xl text-gray">Any question or remarks? Just write us a message!</p>
                </div>
                <div className="flex justify-center align-items-center my-16 py-14 mx-36 bg-[#DCE3FF] rounded-[18px]">
                    <div className="flex flex-col space-y-8 w-[45%] bg-secondary rounded-[18px] px-8 py-8 text-white">
                        <div>
                            <p className="font-medium text-3xl">Contact Information</p>
                            <p className="font-normal text-base">Reach Out To US</p>
                        </div>
                        <div className="flex flex-col space-y-8">
                            <div className="font-normal text-base">
                                <Link className="flex" href="tel:+2349099961978">
                                  <CallCalling className="mr-2"/>
                                +234 909 996 1978
                                </Link>
                                </div>
                            <div className="font-normal text-base">
                                <Link className="flex" href="mailto:contact@myapprenticehub.com">
                                <Sms className="mr-2"/>
                                    contact@myapprenticehub.com
                                </Link>
                                </div>
                            <div className="flex font-normal text-base">
                              <LocationTick className="mr-2"/>
                              Suite C22 Habiba Plaza Alexandria Crescent, Ibadan,<br/>Oyo, Nigeria</div>
                            <div className="flex">
                                <Link className="mr-8" href="https://www.instagram.com/myapprenticehub/">
                                <BsTwitter size={32}/>
                                </Link>
                                <Link className="mr-8" href="https://www.instagram.com/myapprenticehub/">
                                <Instagram size={32}/>
                                </Link>
                                <Link className="mr-8" href="https://www.instagram.com/myapprenticehub/">
                                <BsLinkedin size={32}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 w-[45%]">
                        <ContactForm/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default contact