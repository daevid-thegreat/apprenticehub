import React from 'react'

const About = () => {
  return (
    <div className='bg-primary grid grid-cols-4 md:grid-cols-1  justify-around py-24 px-20'>
      <div className='text-white font-Lexend font-bold text-6xl self-center'>About Us</div>
      <div className='col-span-3 text-white font-medium text-2xl self-center leading-8 '>
          <p className="my-6">
      We connects aspiring apprentices with experienced skill masters, providing a valuable opportunity for hands-on learning and professional development.
          </p>
          <p>
          With a focus on practical experience, our platform offers structured training programs and on-the-job mentoring, allowing apprentices to develop the skills and knowledge needed for a successful career.
          </p>
          </div>
    </div>
  )
}

export default About