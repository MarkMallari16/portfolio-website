import React from 'react'
import ContactDetails from './ContactDetails'
import { motion } from 'framer-motion'
function Contact() {
  const contactIcons =
    [
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>,
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      , <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ]

  return (
    <div className='py-40 mx-auto lg:max-w-7xl px-4 lg:px-0'>
      <div className='text-medium text-center text-3xl font-medium pb-10'>Contact Me</div>

      <div className='grid grid-cols-1 lg:grid-cols-2 justify-center pt-10'>
        <motion.div className='space-y-5 w-full h-full rounded-2xl gap-4'
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}>

          <ContactDetails contactIcon={contactIcons[0]} contactTitle="Mail" contactDescription="mallariftw01@gmail.com" />
          <ContactDetails contactIcon={contactIcons[1]} contactTitle="Address" contactDescription="Bacoor City, Cavite Philippines" />
          <ContactDetails contactIcon={contactIcons[2]} contactTitle="Mobile Number" contactDescription=" 09105264925" />

        </motion.div>

        <motion.div className='w-full'
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}>
          <div className='mb-4'>
            <h1 className='text-xl uppercase font-medium'>Contact Me!</h1>
          </div>
          <form>
            <div className='mb-4'>

              <input type="text" placeholder="Enter your Name" className="input input-bordered w-full focus:outline-secondary focus:border-secondary" required />
            </div>
            <div className='mb-4'>
              <input type="text" placeholder="Enter your Email" className="input input-bordered w-full focus:outline-secondary focus:border-secondary" />
            </div>
            <div className='mb-4'>
              <textarea className="textarea textarea-bordered w-full resize-none h-40 focus:outline-secondary focus:border-secondary" placeholder="Enter your Message"></textarea>

            </div>
            <button type='submit' className='btn btn-secondary'>Send Message
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>

            </button>
          </form>
        </motion.div>
      </div>
      {/** */}
    </div>

  )
}

export default Contact