import Navbar from "@/components/Navbar"
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";


const about = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[url('/about-bg.png')] bg-cover h-screen  flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <p className="font-Lexend text-5xl text-white font-medium mb-6">Best Solution For <br />Apprenticeship </p>
                    <Link href="/register-apprentice" className="text-white bg-primary py-4 px-8 ">Register</Link>
                </div>

            </div>
            <div>
                <div className="flex flex-col justify-center items-center my-8">
                    <p className="font-Lexend text-5xl text-primary font-bold mb-6">How It Started</p>
                    <div className="w-1/2 my-8">
                        <p className="text-gray">Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur. fuinvcjcj9rhvhbuihmln,fzibutu</p>
                    </div>
                    <div className="flex w-2/3">
                        <Image className="mx-4" src="/about-pp.png" width={94} height={66} />
                        <p className="text-gray">lum dolore eu fugiat nulla pariatur. fjcj9rhvhbuihmln,fzihpambnbutu
                            dolore eu fugiat nulla pariatur. fuinvcjcj9rhvhbuihmln,fzibutu</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-1 my-32 mx-36 md:mx-20 space-y-4">
                <div className="bg-[#E5EAFF] flex flex-col justify-center items-center w-[250px] rounded-[18px] h-[260px] px-2 mx-8">
                    <div className="font-Lexend mb-4 text-white bg-primary rounded-[30px] px-4 py-2">OUR MISSION</div>
                    <div className="text-center font-regular font-Poppins">Stacks is a able content blocks  Native</div>
                </div>
                <div className="bg-[#E5EAFF] flex flex-col justify-center items-center w-[250px] rounded-[18px] h-[260px] px-2 mx-8">
                    <div className="font-Lexend mb-4 text-white bg-primary rounded-[30px] px-4 py-2">OUR VISION</div>
                    <div className="text-center font-regular font-Poppins">Stacks is a able content blocks  Native</div>
                </div>
                <div className="bg-[#E5EAFF] flex flex-col justify-center items-center w-[250px] rounded-[18px] h-[260px] px-2 mx-8">
                    <div className="font-Lexend mb-4 text-white bg-primary rounded-[30px] px-4 py-2">OUR VALUES</div>
                    <div className="text-center font-regular font-Poppins">Stacks is a able content blocks  Native</div>
                </div>
            </div>
            <div className="">
                <div className="font-Lexend text-6xl text-primary font-bold text-center mb-4">Join<br/> Apprenticeship Hub</div>
                <div className="text-center text-primary font-normal text-4xl">Transform your Apprentice dreams in <br/>comfort and style</div>
                <div className="text-center my-6">
                    <Link className="font-Lexend rounded-[30px] bg-primary text-white font-bold px-4 py-2" href='/register-apprentice'>Join Now</Link> </div>
                <div className="flex justify-around my-14">
                    <Image src="/about-1.png" width={656} height={396} />
                    <Image src="/about-2.png" width={656} height={396} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default about