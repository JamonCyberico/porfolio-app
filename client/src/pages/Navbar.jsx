import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, IdentificationIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub } from 'react-icons/fa' 

import { Link } from 'react-scroll'

import { useTheme } from '../context/ThemeContext'

const Navbar = ({ onLogout }) => {
  const [showMenu, setShowMenu ] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)

  const { darkMode, toggleDarkMode } = useTheme();

  const navLinks = ['Home','About','Skills','Work','Contact']

  return (
    <div className='w-full flex fixed h-20 bg-primary px-4 items-center justify-between text-gray-300'>

      <div className='flex items-center space-x-4'>
        <span className='text-3xl'>AA</span>

        <button 
          className='rounded-lg px-2 py-1 font-bold text-md duration-500' 
          onClick={toggleDarkMode}
          style={{ backgroundColor: darkMode ? '#fff' : "#0A192F", color: darkMode ? '#0A192F' : '#fff', border: darkMode ? '1px solid #0A192F' : '1px solid #fff' }}
        >
          { darkMode ? 'Light Mode' : 'Dark Mode' }
        </button>

        <button onClick={onLogout}>
          Logout
        </button>
      </div>

      <ul className='hidden md:flex gap-4 font-light'>
        {navLinks.map((route, index) => (
          <li key={index} className='cursor-pointer'>
            <Link
              className='hover:text-white hover:font-medium'
              to={route.toLowerCase()}
              smooth={true}
              duration={500}>
              {route}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={toggleMenu} className='md:hidden z-10'>
        {
          showMenu ? <XMarkIcon className='h-6 w-6'/> 
          : <Bars3Icon className='h-6 w-6' />
        }
      </div>

      <ul className={`md:hidden w-full h-screen absolute flex flex-col gap-6 bg-primary top-0 left-0 items-center justify-center text-4xl ${ showMenu ? 'block' : 'hidden' }`}>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Skills</li>
        <li className='cursor-pointer'>Work</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      <div className='hidden fixed md:flex flex-col top-[35%] left-0'>
        <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
          <a href='https://www.linkedin.com/in/anthonyajami/' target='blank' className='flex justify-center items-center w-full text-white font-normal text-base px-4'>
            <span>LinkedIn</span>
            <FaLinkedin className='h-[30px] w-[30px] ml-auto' />
          </a>
        </div>
        <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c9510c]'>
          <a href='/' className='flex justify-center items-center w-full text-white font-normal text-base px-4'>
            <span>Github</span>
            <FaGithub className='h-[30px] w-[30px] ml-auto' />
          </a>
        </div>
        <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#51A0D5]'>
          <a href='/' className='flex justify-center items-center w-full text-white font-normal text-base px-4'>
            <span>Contact</span>
            <EnvelopeIcon className='h-[30px] w-[30px] ml-auto' />
          </a>
        </div>
        <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9e9d9d]'>
          <a href='/' className='flex justify-center items-center w-full text-white font-normal text-base px-4'>
            <span>Resume</span>
            <IdentificationIcon className='h-[30px] w-[30px] ml-auto' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
