import React from 'react'
import Link from 'next/link'

const Apprentice = (props) => {


    function convertToHumanDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return date.toLocaleString('en-US', options);
}




  return (
    <div className='text-justify space-y-2 bg-white my-4 mx-4 rounded-lg px-6 py-5'>
        <div className='text-2xl font-semibold text-primary mb-4'>{props.first_name} {props.last_name}</div>
        <Link href={`mailto:${props.email}`} className=' text-md mt-4 font-semibold text-secondary'>{props.email}</Link>
        <div className='flex items-center'><span className='text-[#00A858] font-medium text-md'>Pay : </span> <span className='text-[#0A1E40] font-semibold text-md mx-2'><span className='text-secondary font-extrabold'>NGN</span> {props.pay}</span></div>
        <div className='text-[#0A1E40] font-normal text-md'>Added On {
            convertToHumanDate(props.created_at)
        } </div>
    </div>
  )
}

export default Apprentice
