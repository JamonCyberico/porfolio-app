import React from 'react'


import AwsIcon from '../assets/aws.png'
import CssIcon from '../assets/css.png'
import FirebaseIcon from '../assets/firebase.png'
import GithubIcon from '../assets/github.png'
import NodeIcon from '../assets/node.png'
import ReactIcon from '../assets/react.png'
import TailwindIcon from '../assets/tailwind.png'
import VueIcon from '../assets/vue.png'

const Skills = () => {

  const technologies = [
    {name: 'ReactJs', image: ReactIcon},
    {name: 'NodeJs', image: NodeIcon},
    {name: 'Firebase', image: FirebaseIcon},
    {name: 'Tailwind', image: TailwindIcon},
    {name: 'Github', image: GithubIcon},
    {name: 'AWS', image: AwsIcon},
    {name: 'CSS', image: CssIcon},
    {name: 'VueJs', image: VueIcon}
  ]

  return (
    <div className='w-full h-screen bg-primary text-gray-300'>
       <div className='w-full h-full justify-center max-w-[1000px] mx-auto p-4 flex flex-col'>
          <div>
            <p className='text-pink-600 text-4xl font-bold border-b-4 border-pink-600 inline'>Specialties</p>
            <p className='py-4'>These are the technologies I have experience with</p>
          </div>
          <div className='w-full grid gap-4 text-center py-8 grid-cols-2 md:grid-cols-4'>
            {technologies.map((item, index) => (
               <div key={index} className='shadow-[#040c16] shadow-md rounded-md hover:scale-110 duration-500'>
                  <img src={item.image} alt={item.image} className='w-20 mx-auto'></img>
                  <p className='my-4'>{item.name}</p>
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Skills
