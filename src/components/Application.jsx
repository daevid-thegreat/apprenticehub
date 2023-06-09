import React from 'react'
import Link from 'next/link'

const Application = (props) => {
  return (
    <Link className='text-justify space-y-2 bg-white my-4 mx-4 rounded-lg px-6 py-8' href={`/master/applications/${props.uid}`}>
        <div className='text-2xl font-semibold text-primary '>{props.name}</div>
        <div className='flex items-center text-[#0A1E40] font-medium text-lg'>{props.headline}</div>
        <span className="text-xs text-[#FFA500] my-2">{props.status}</span>
        <div className='text-[#0A1E40] font-normal text-sm'>Applied on  {props.created_at} </div>
    </Link>
  )
}

export default Application
