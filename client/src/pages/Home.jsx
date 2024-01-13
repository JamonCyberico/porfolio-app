import React from 'react'

import { useTheme } from '../context/ThemeContext'

const Home = () => {
const { darkMode } = useTheme();

  return (
    <div name="home" className='w-full h-screen' style={{ backgroundColor: darkMode ? '#0A192F' : '#fff' }}>
      <div className='max-w-[1000px] text-left mx-auto px-8 flex flex-col justify-center h-full font-normal'>
        <p className='text-pink-600' style={{ fontWeight: !darkMode ? 'bold' : 'normal' }}>
          Hello, my name is
        </p>
        <h2 className='text-6xl font-bold' style={{ color: darkMode ? '#fff' : '#0A192F' }}>
          Anthony Ajami
        </h2>
        <h2 className='text-5xl font-bold' style={{ color: darkMode ? '#fff' : '#db2777' }}>
          I'm a full stack developer.
        </h2>
        <p className='mt-4 font-light' style={{ color: darkMode ? '#8892b0' : '#0A192F' }}>I have an Msc. in Software engineering from EPITA. I have a passion for building web applications and solving complex problems. I'm currently looking for a full-time position as a software engineer.</p>
        <div>
          <button className='px-6 py-3 mt-8 text-base font-normal text-white border border-white rounded-md duration-500' style={{ backgroundColor: darkMode ? '#0A192F' : '#db2777' }}>
            Check out my work
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
