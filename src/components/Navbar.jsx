import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [showMenu, setShowMenu ] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <div className='w-full flex fixed h-20 bg-primary px-4 items-center justify-between text-gray-300'>
      <span className='text-4xl'>AA</span>
      
      <ul className='hidden md:flex gap-4'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Skills</li>
        <li className='cursor-pointer'>Experience</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
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
    </div>
  )
}

export default Navbar
