const Offering = ({heading, paragraph}) => {
  return (
    <div className='w-80 h-48 bg-[#6681FF] py-4 px-6 rounded-2xl'>
        <div className="font-Lexend font-bold text-white py-2">{heading}</div>
        <div className="text-white py-2">{paragraph}</div>
    </div>
    
  )
}

export default Offering