import React from 'react'

const ProjectCard = ({ image, title, codeUrl, demoUrl }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} 
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div px-4'>
        <div className='opacity-0 group-hover:opacity-100'>
          <p className='text-2xl font-bold text-white'>{ title }</p>
          <div className='pt-8 text-center flex gap-6'>
            <a href={demoUrl}>
            <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-semibold text-lg'>Demo</button>
            </a>
            <a href={codeUrl}>
              <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-semibold text-lg'>Code</button>
            </a>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard
