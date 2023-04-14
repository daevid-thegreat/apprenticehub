import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin, BsFillPersonFill } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, A11y, EffectCube } from 'swiper';
import Job from '@/components/Job'
import Applymodalform from '@/components/Applymodalform'
import { useState } from 'react'


const OpeningID = () => {
  const router = useRouter()
  const { openingid } = router.query

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Navbar />
      <div >
        <div className='grid grid-cols-4 gap-4 mx-20 my-20'>
          <div className=''>
            <div className='bg-primary py-8 px-4 rounded-lg'>


              <div className='flex items-center text-center justify-between'>
                <div className='flex items-center text-center text-white font-semibold text-2xl'>
                  <Image src='/m-logo.png' width={50} height={50} className='mx-2' /> McPops
                </div>
                <span className='text-secondary bg-white px-4 py-1 font-semibold rounded-2xl'>Food</span></div>
              <div className='mx-2 text-white font-light my-3'>Lorem ipsum dolor sit amet consectetur. Vulputate non quam laoreet feugiat integer odio egestas feugiat.</div>
              <div className='flex space-x-4 mx-2 text-white my-8'>
                <BsFacebook />
                <BsTwitter />
                <BsLinkedin />
                <BsInstagram />
              </div>
              <div>
                <Link href='https://www.google.com' className='underline underline-offset-0 text-white my-2'>https://www.google.com</Link>
              </div>
            </div>
          </div>

          <div className='col-span-3 bg-[#F3F3F3] py-8 px-6 rounded-lg'>
            <div className='flex items-center justify-between'>
              <div className='text-3xl font-Poppins'>Young auto-mechanic needed</div>
              <div className='flex items-center bg-primary text-white py-2 px-4 rounded-lg'>20 Applications <BsFillPersonFill className='mx-1' /></div>
            </div>

            <div className='grid grid-cols-4 my-8'>
              <div className='bg-[#BBC7FF] mx-4 px-6 py-4 rounded-tl-lg rounded-br-lg'>
                <div className='text-primary text-center font-bold text-2xl my-3'>Pay</div>
                <div className='text-[#00A858] text-center text-xl my-3'>$50000 <span className='text-sm text-[#0A1E40]'>Per Month</span></div>
              </div>

              <div className='bg-[#BBC7FF] mx-4 px-6 py-4 rounded-tl-lg rounded-br-lg'>
                <div className='text-primary text-center font-bold text-2xl my-3'>Job Type</div>
                <div className='text-[#0A1E40] text-center text-xl my-3'>Internship</div>
              </div>

              <div className='bg-[#BBC7FF] mx-4 px-6 py-4 rounded-tl-lg rounded-br-lg'>
                <div className='text-primary text-center font-bold text-2xl my-3'>Level</div>
                <div className='text-[#0A1E40] text-center text-xl my-3'>Beginner</div>
              </div>

              <div className='bg-[#BBC7FF] mx-4 px-6 py-4 rounded-tl-lg rounded-br-lg'>
                <div className='text-primary text-center font-bold text-2xl my-3'>Industry</div>
                <div className='text-[#0A1E40] text-center text-xl my-3'>Auto-Mobile</div>
              </div>
            </div>
            <hr className='mx-20 border border-[#E4E4E7] my-8' />
            <div>
              <div className='font-medium text-2xl font-Poppins my-4'>Description</div>
              <div className='text-gray'>Lorem ipsum dolor sit amet consectetur. Purus at consectetur mi aliquam lacus risus nisi magna.
                Lorem ipsum dolor sit amet consectetur. Purus at consectetur mi aliquam lacus risus nisi magna.
                consectetur mi aliquam lacus risus nisi magna.
                consectetur mi aliquam lacus risus nisi magna.
              </div>
            </div>
            <hr className='mx-20 border border-[#E4E4E7] my-8' />
            <div className='space-y-2'>
              <div className='font-medium text-2xl font-Poppins my-4'>Requirements</div>
              <div className='text-gray'> &bull; Bachelor degree in Business Administration</div>
              <div className='text-gray'> &bull; Bachelor degree in Business Administration</div>
              <div className='text-gray'> &bull; Bachelor degree in Business Administration</div>
              <div className='text-gray'> &bull; Bachelor degree in Business Administration</div>
            </div>

            <div className='text-center my-8 modal'>
              <Applymodalform />
            </div>




          </div>

        </div>

        <div className=''>
          <div className='font-Lexend text-3xl mx-32'>You May Be Interested in This jobs</div>
          <div className='mx-32 my-14'>
          <Swiper
      modules={[Navigation, A11y, EffectCube]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
              <SwiperSlide>
                <Job openingid={'rdctfvfygbuhn'}/>
              </SwiperSlide>
              <SwiperSlide>
                <Job openingid={'rdctfvfygbuhn'}/>
              </SwiperSlide>
              <SwiperSlide>
                <Job openingid={'rdctfvfygbuhn'}/>
              </SwiperSlide>
              <SwiperSlide>
                <Job openingid={'rdctfvfygbuhn'}/>
              </SwiperSlide>
              <SwiperSlide>
                <Job openingid={'rdctfvfygbuhn'}/>
              </SwiperSlide>
              <SwiperSlide>
                <Job openingid={'rdctfvfygbuhn'}/>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default OpeningID