import React from 'react'

const Application = (props) => {
  return (
    <div className='text-justify space-y-2 bg-white my-4 mx-4 rounded-lg px-6 py-8'>
        <div className='text-2xl font-semibold text-primary '>{props.user.name}</div>
        <div className='flex items-center text-[#0A1E40] font-medium text-lg'>{props.opening.headline}</div>
        <div className='text-[#0A1E40] font-normal text-sm'>Applied on  {props.created_at} </div>
    </div>
  )
}

export default Application
