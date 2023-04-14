import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex py-20 place-content-center">
        <div className="pr-14">
            <span className="font-Lexend font-bold text-primary  py-14">Powering Apprenticeship</span>
            <h2 className="font-bold text-dark text-6xl leading-normal">It’s About Time<br/> You Unleash Your<br/> Best Self</h2>
            <div className="flex pt-24">
                <Link className="flex font-medium text-primary rounded-2xl border-primary border-2 font-Poppins px-8 py-4 text-lg mr-8" href="/register">
                    <div className="self-center mr-4">
                        Apprentice
                    </div>
                    
                    <Image src="/arrow-right.png" width={37} height={35} />
                </Link>

                <Link className="flex font-medium text-white font-Poppins rounded-2xl bg-primary hover:bg-secondary px-8 py-4 text-lg" href="/register">
                    <div className="mr-4 self-center">
                        Skill Master
                    </div> 
                    <Image src="/arrow-right-1.png" width={40} height={35} />
                </Link>
            </div>
        </div>
        <div className="pl-24">
            <Image src="/hero-image.png" width={612} height={448} />
        </div>
    </div>
  )
}

export default Hero