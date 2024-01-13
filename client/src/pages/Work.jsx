import React, { useEffect, useState } from 'react'

import BudgetTravel from '../assets/budget-travel.jpg'
import NetflixClone from '../assets/netflix-clone.png'

import ProjectCard from '../components/ProjectCard'

const Work = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/projects');
        const data = await response.json()

        console.log(data)
        setProjects(data)
      } catch(error) {
        console.error('Error fetching projects', error)
      }
    }

    fetchProjects();
  }, [])

  return (
    <div name="work" className='w-full h-screen bg-primary text-gray-300'>
      <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my personal projects</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {
            projects.map((project, index) => (
              <ProjectCard key={index} image={BudgetTravel} title={project.title} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Work
