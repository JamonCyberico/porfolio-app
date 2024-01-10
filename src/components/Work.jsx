import React from 'react'

import BudgetTravel from '../assets/budget-travel.jpg'

const Work = () => {
  return (
    <div className='w-full h-screen bg-primary text-gray-300'>
      <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my personal projects</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{ backgroundImage: `url(${BudgetTravel})` }} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div px-4'>
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white'>Budget Travel</p>
              <div className='pt-8 text-center flex gap-6'>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-semibold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-semibold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
