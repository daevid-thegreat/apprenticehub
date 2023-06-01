import React from 'react'
import Image from 'next/image'
import Link from "next/link"

const Job = (props) => {
  return (
    <Link className='flex flex-col w-3/4 border border-secondary py-4 px-6 rounded-[18px] my-4' href={`/openings/${encodeURIComponent(props.uid)}`}>
        <div className='flex my-2 justify-between'>
            <h2 className='font-medium text-xl'>{props.headline}</h2>
            <span className='text-md font-normal text-lg text-primary'>Paid</span>
        </div>
        <div className='flex my-4 text-gray'>
        Stacks is a able content blocks  Native mag are being good
        </div>
        <div className='flex items-center'>
            <Image src="/m-logo.png" alt="stacks" width={60} height={59} />
            <h2 className='mx-2'>McPops</h2>
            <h1 className='text-primary text-xl'>&bull;</h1>
            <span className='mx-2'>Abuja</span>
        </div>
    </Link>
  )
}

export default Job
