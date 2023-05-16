import Link from "next/link"
import Image from "next/image"
import {BsFillArrowRightCircleFill} from 'react-icons/Bs'

const Hero = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 py-20 place-content-center px-20 md:px-5">
        <div className="">
            <span className="font-Lexend font-bold text-primary py-14">Powering Apprenticeship</span>
            <h2 className="font-bold text-dark text-6xl leading-normal pr-52 md:pr-2">It’s About Time You Unleash Your Best Self</h2>
            <div className="flex pt-20">
                <Link className="flex font-medium items-center text-primary rounded-2xl border-primary border-2 font-Poppins hover:bg-primary hover:text-white px-8 py-4 text-lg mr-8" href="/register-apprentice">
                    <div className="self-center mr-4">
                        Apprentice
                    </div>

                    <BsFillArrowRightCircleFill/>
                </Link>

                <Link className="flex items-center font-medium text-white font-Poppins rounded-2xl bg-primary hover:bg-secondary px-8 py-4 text-lg whitespace-nowrap" href="/register-master">
                    <div className="mr-4 self-center">
                        Skill Master
                    </div> 
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </div>
        <div className=" md:hidden">
            <Image src="/hero-image.png" width={612} height={448} />
        </div>
    </div>
  )
}

export default Hero