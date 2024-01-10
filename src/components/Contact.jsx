import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-primary flex justify-center items-center p-4'>
      <div className='max-w-[600px] w-full flex flex-col'>
        <div className='pb-8'>
          <p className='text-gray-300 text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form to get in touch with me</p>
        </div>

      <form method="POST" action='https://getform.io/f/3d951fe6-49b9-4fee-ab5c-78f9477bb550'>
          <div className='space-y-2'>
            <div className='flex flex-col gap-1 text-start'>
              <label className='text-gray-300'>Name</label>
              <input type="text" name='name' placeholder='John Smith' className='rounded-md text-gray-300 bg-primary border2 border-gray-300 p-2'/>
            </div>
            
            <div className='flex flex-col gap-1 text-start'>
              <label className='text-gray-300'>Email</label>
              <input type="email" name='email' placeholder='john@smith.com' className='rounded-md text-gray-300 bg-primary border2 border-gray-300 p-2'/>
            </div>

            <div className='flex flex-col gap-1 text-start'>
              <label className='text-gray-300'>Message</label>
              <textarea type="text" name='message' placeholder='Your message here...' className='rounded-md text-gray-300 bg-primary border2 border-gray-300 p-2'/>
            </div>
          </div>

          <button className='bg-white w-full rounded-md mt-8 font-semibold py-3 text-lg text-gray-700 hover:bg-pink-600 hover:text-white'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
