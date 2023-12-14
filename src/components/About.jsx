import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full bg-primary'>
        <div className='flex flex-col justify-center items-center w-full h-full text-gray-300'>
          <div className='grid w-full max-w-[1000px] md:grid-cols-2 gap-8'>
            <div className='text-center md:text-right pb-8 md:col-span-1'>
              <p className='text-pink-600 text-4xl font-bold border-b-4 border-pink-600 inline'>About</p>
            </div>
            <div className='row-start-2 text-center md:text-right md:col-span-1 px-5 md:px-0'>
              <h1 className='text-4xl font-bold'>
                Hey, I'm Anthony. Please take a look around
              </h1>
            </div>
            <div className='md:row-start-2 md:col-span-1 px-5 md:px-0'>
              <h2 className='text-lg font-light'>
                I have an Msc. in Software engineering from EPITA. I have a passion for building web applications and solving complex problems.I have an Msc. in Software engineering from EPITA. I have a passion for building web applications and solving complex problems.
              </h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
