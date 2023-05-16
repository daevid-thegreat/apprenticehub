import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

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
        <Link className="mx-4 hover:text-secondary font-medium text-lg" href="/about">
          About Us
        </Link>
        <Link className="mx-4 hover:text-secondary font-medium text-lg" href="/openings">
          Openings
        </Link>
        <Link className="mx-4 hover:text-secondary font-medium text-lg" href="/courses">
          Courses
        </Link>
        <Link
          className=" ml-24 font-medium text-primary font-Poppins rounded-2xl  bg-white hover:text-white hover:bg-secondary px-8 py-4 text-lg"
          href="/register-apprentice"
        >
          Get Started
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
        <ul className='nav-ul text-center'>

          <Link className="mx-4 hover:text-secondary font-medium text-lg" onClick={toggle} href=''><li>Home</li></Link>
          <Link className="mx-4 hover:text-secondary font-medium text-lg" onClick={toggle} href='/services'><li>Our Services</li></Link>
          <Link className="mx-4 hover:text-secondary font-medium text-lg" onClick={toggle} href='/about'><li>About Us</li></Link>
          <Link className="mx-4 hover:text-secondary font-medium text-lg" onClick={toggle} href='/team'><li>Legal Team</li></Link>
          <Link className="mx-4 hover:text-secondary font-medium text-lg" onClick={toggle} href='/blog'><li>Blog</li></Link>
          <Link className='consult mx-4 hover:text-secondary font-medium text-lg' href="https://calendly.com/karenkatwig/30min" onClick={toggle} target="_blank"><li>Free Consultation</li></Link>

        </ul>
      </div>
    </nav>
  </div>

  </>
  );
};

export default Navbar;
