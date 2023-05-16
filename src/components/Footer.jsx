import Image from "next/image";
import Link from "next/link";
import Subform from "./Subform";

const Footer = () => {
  return (
    <div className="py-6 bg-primary text-white">
      <div className="grid grid-cols-4 px-32 md:grid-cols-1 md:px-10">
        <div className="flex flex-col self-start">
          <div className="logo">
            <Link href="/">
              <Image src="/logo.png" width={305} height={89.52} />
            </Link>
          </div>
          <div className="font-bold my-4 ml-12">Powering Apprenticeship</div>
          <div className="leading-10 ml-12">
            123 Market St. #22B
            <br />
            Charlottesville, California
            <br /> 44635
          </div>
        </div>
        <div className="flex flex-col self-start mt-16 leading-10">
          <Link className="" href="/about">Home</Link>
          <Link href="/about">Course</Link>
          <Link href="/about">Openings</Link>
        </div>
        <div className="flex flex-col self-start mt-16 leading-10">
          <Link href="/about">About</Link>
          <Link href="/about">Contact</Link>
          <Link href="/about">Help and Support</Link>
          <Link href="/about">Terms of Use</Link>
          <Link href="/about">Privacy Policy</Link>
        </div>
        <div className="flex flex-col self-start mt-16 leading-10">
          <Link href="tel:+2345678910123">+234 567 891 0123</Link>
          <Link href="mailto:contact@myapprenticehub.com">
            contact@myapprenticehub.com
          </Link>
          <Subform/>
        </div>
      </div>
      <div className="flex justify-center my-6 text-white">
        © Copyright 2023 - ApprenticeHub
      </div>
    </div>
  );
};

export default Footer;
