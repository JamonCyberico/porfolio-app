import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-full bg-primary'>
      <div className='max-w-[1000px] text-left mx-auto px-8 flex flex-col justify-center h-full font-normal'>
        <p className='text-pink-600 text-4xl font-bold'>Hello, my name is</p>
        <h1 className='text-white text-7xl font-bold'>Anthony Ajami</h1>
        <h2 className='text-6xl text-[#8892b0] font-bold'>I'm a full stack developer</h2>
        <p className='text-[#8892b0] font-light'>I have an Msc. in Software engineering from EPITA. I have a passion for building web applications and solving complex problems.</p>
        <div>
          <button className='text-white border border-white mt-8 px-6 py-3 rounded hover:bg-pink-600 hover:text-primary duration-200'>
            Check out my work
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
