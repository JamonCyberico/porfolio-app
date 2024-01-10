import React from 'react'

import BudgetTravel from '../assets/budget-travel.jpg'
import NetflixClone from '../assets/netflix-clone.png'
import ProjectCard from './custom/ProjectCard'

const Work = () => {
  return (
    <div className='w-full h-screen bg-primary text-gray-300'>
      <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my personal projects</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <ProjectCard image={BudgetTravel} title="Budget Travel" />
          <ProjectCard image={NetflixClone} title="Netflix Clone" />
        </div>
      </div>
    </div>
  )
}

export default Work
