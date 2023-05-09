import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary flex content-center container justify-between px-16">
      <div className="logo">
        <Link href="/">
          <Image src="/logo-1.png" width={305} height={89.52} />
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
  );
};

export default Navbar;
