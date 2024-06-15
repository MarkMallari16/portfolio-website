import React from 'react'

function Contact() {
  return (
    <div className=' my-40 mx-auto lg:max-w-7xl'>
      <div className='text-medium text-center text-3xl font-medium pt-10'>Contact</div>
      <p className="text-center text-slate-400">Reach me!</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-20 gap-16 itemce'>
        <div className=' w-full h-full rounded-2xl flex flex-col gap-4'>
          <div className=' p-3 rounded-xl flex items-center gap-4'>
            <div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div >
              <div className='text-lg text-secondary'>Mail</div>
              <div className='text-xl'>
                mallariftw01@gmail.com
              </div>
            </div>
          </div>
          <div className=' p-3 rounded-xl flex items-center gap-4'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>

            </div>
            <div >
              <div className='text-secondary font-medium'>Address</div>
              <div>Bacoor City, Cavite Philippines</div>
            </div>
          </div>
          <div className=' p-3 rounded-xl flex items-center gap-4'>
            <div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div >
              <div className='text-lg text-secondary font-medium'>Mobile Number</div>
              <div className='text-xl'>
                09105264925
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h'>
          <div className='mb-4'>
            <h1 className='text-3xl'>Contact Me!</h1>
          </div>
          <form>
            <div className='mb-4'>

              <input type="text" placeholder="Enter your Name" className="input input-bordered w-full" required />
            </div>
            <div className='mb-4'>
              <input type="text" placeholder="Enter your Email" className="input input-bordered w-full" />
            </div>
            <div className='mb-4'>
              <textarea className="textarea textarea-bordered w-full resize-none h-40" placeholder="Enter your Message"></textarea>

            </div>
            <button type='submit' className='btn btn-secondary'>Send Message
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>

            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact