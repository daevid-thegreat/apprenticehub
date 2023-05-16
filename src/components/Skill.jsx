import Image from "next/image"

const Skill = ({icon, text}) => {
  return (
    <div className="w-60 h-36 py-4 px-6 rounded-2xl border-primary border mt-8 ">
        <div className="py-1"><Image src={icon} alt='' width={40} height={40}/></div>
        <div className="font-medium text-lg py-6 text-secondary">{text}</div>
    </div>
  )
}

export default Skill