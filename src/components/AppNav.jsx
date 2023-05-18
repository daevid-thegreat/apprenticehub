import React, {useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import {AiOutlineClose} from "react-icons/ai";
import {IoMdMenu} from "react-icons/io";

const AppNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <nav className=" desktop-nav bg-primary flex content-center container justify-between px-16 py-5">
                <div className="logo">
                    <Link href="/">
                        <Image src="/logo-1.png" width={250} height={89.52} />
                    </Link>
                </div>
                <div className="self-center text-white font-Poppins">
                    <Link className="mx-4 hover:text-secondary font-medium text-lg" href="/openings">
                        Openings
                    </Link>
                    <Link className="mx-4 hover:text-secondary font-medium text-lg" href="/courses">
                        Courses
                    </Link>
                    <Link
                        className=" ml-24 font-medium text-white font-Poppins rounded-2xl  bg-[#EF5D5D] hover:text-white hover:bg-secondary px-8 py-4 text-lg"
                        href="/logout"
                    >
                        Logout
                    </Link>
                </div>
            </nav>

            <div className='mobile-nav'>
                <nav className="bg-white w-full flex flex-col px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="mr-20">
                            <Link href="/">
                                <Image src="/logo-1.png" width={250} height={89.52} />
                            </Link>
                        </div>
                        <div className="">
                            <button
                                onClick={toggle}
                                className="text-white  focus:outline-none "
                            >
                                {isOpen ? <AiOutlineClose className='w-8 h-8 text-[#067DCE]' /> : <IoMdMenu className='w-8 h-8 text-[#067DCE]' />}
                            </button>
                        </div>
                    </div>
                    <div className={`mobile-ul ${isOpen ? "block" : "hidden"}`}>
                        <ul className='nav-ul text-center space-y-4'>

                            <Link className="mx-4 hover:text-secondary font-medium text-lg" onClick={toggle} href='/openings'><li>Openings</li></Link>
                            <Link className="mx-4 hover:text-secondary font-medium text-lg" onClick={toggle} href='/courses'><li>Courses</li></Link>
                            <Link
                                onClick={toggle}
                                className="flex justify-center whitespace-nowrap font-medium text-white font-Poppins rounded-2xl  bg-[#EF5D5D] px-3 py-3 text-lg mx-10"
                                href="/logout"
                            >
                                <li>Logout</li>

                            </Link>

                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default AppNav
