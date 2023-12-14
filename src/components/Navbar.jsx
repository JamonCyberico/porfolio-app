import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub } from 'react-icons/fa' 

const Navbar = () => {
  const [showMenu, setShowMenu ] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)

  const navLinks = ['Home','Skills','Experience','About','Contact']

  return (
    <div className='w-full flex fixed h-20 bg-primary px-4 items-center justify-between text-gray-300'>
      <span className='text-4xl'>AA</span>
      
      <ul className='hidden md:flex gap-4'>
        {navLinks.map((route, index) => (
          <li key={index} className='cursor-pointer'>{route}</li>
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
        <li className='cursor-pointer'>Experience</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      <div className='hidden md:flex fixed left-0 top-[35%]'>
        <ul>
          <li className='h-[60px] flex justify-between w-[160px] duration-300 bg-white ml-[-110px] hover:ml-[-10px] bg-[#0077b5]'>
            <a href='https://www.linkedin.com/in/anthonyajami/' target='blank' className='flex justify-center items-center w-full gap-10 px-4 font-semibold'>
              <span>LinkedIn</span>
              <FaLinkedin className='w-8 h-8 '/>
            </a>
          </li>
          <li className='h-[60px] flex justify-between w-[160px] duration-300 bg-white ml-[-110px] hover:ml-[-10px] bg-[#c9510c]'>
            <a href='/' className='flex justify-center items-center w-full gap-10 px-4 font-semibold'>
              <span>Github</span>
              <FaGithub className='ml-4 w-10 h-10'/>
            </a>
          </li>
          <li className='h-[60px] flex justify-between w-[160px] duration-300 bg-white ml-[-110px] hover:ml-[-10px] bg-[#3f00b5]'>
            <a href='/' className='flex justify-center items-center w-full gap-10 px-4 font-semibold'>
              <span>LinkedIn</span>
              <EnvelopeIcon className='w-8 h-8 '/>
            </a>
          </li>
          <li className='h-[60px] flex justify-between w-[160px] duration-300 bg-white ml-[-110px] hover:ml-[-10px] bg-pink-700'>
            <a href='/' className='flex justify-center items-center w-full gap-10 px-4 font-semibold'>
              <span>LinkedIn</span>
              <DocumentTextIcon className='w-8 h-8 '/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
