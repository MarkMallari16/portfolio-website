import React from 'react'

function Contact() {
  return (
    <div className=' my-10 mx-auto lg:max-w-7xl'>
      <div className='text-medium text-center text-3xl font-medium'>Contact</div>

      <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10'>
        <div className=' w-full h-full bg-base-300 rounded-2xl'>

        </div>
        <div className='w-full'>
          <div className='mb-4'>
            <h1 className='text-3xl'>Contact Me!</h1>
          </div>
          <div className='mb-4'>

            <input type="text" placeholder="Enter your Name" className="input input-bordered w-full" />
          </div>
          <div className='mb-4'>
            <input type="text" placeholder="Enter your Email" className="input input-bordered w-full" />
          </div>
          <div className='mb-4'>
            <textarea className="textarea textarea-bordered w-full resize-none h-40" placeholder="Enter your Message"></textarea>

          </div>
          <button className='btn btn-secondary'>Send Message
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>

          </button>
        </div>

      </div>
    </div>
  )
}

export default Contact