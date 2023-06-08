import React, {useEffect} from 'react'
import Link from 'next/link'

const Opening = (props) => {

    const [pay, setPay] = React.useState("Unpaid")
    const [payColor, setPayColor] = React.useState("text-[#00A858]")

    function shorten(str, maxLen, separator = ' ') {
        if (str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
    }

    useEffect(
        () => {
            if (parseInt(props.pay) >= 0) {
                setPay("Paid")
                setPayColor("text-[#00A858]")
            }else{
                setPay("Unpaid")
                setPayColor("text-[#EB2929]")
            }
        }
    )
  return (
      <Link href={`/master/myopenings/${props.uid}`}>
    <div className='text-justify space-y-2 bg-white my-4 mx-4 rounded-lg px-6 py-5'>
        <div className='text-xl font-semibold text-primary text-start '>{props.headline}</div>
        <div className='flex items-center'><span className={`font-normal text-sm ${payColor}`}>{pay}</span> <span className='mx-2 text-3xl text-primary'>&bull;</span> <span className='text-[#0A1E40] font-semibold text-md'>{props.job_type}</span></div>
        <div className='text-[#0A1E40] font-normal text-sm'>{
            shorten(props.description, 150)
        }</div>
    </div>
     </Link>
  )
}

export default Opening
