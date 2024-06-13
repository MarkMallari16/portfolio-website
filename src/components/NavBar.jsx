import React from 'react'

function NavBar() {
  return (
    <nav className='flex justify-between items-center mt-5 '>
        <div className='text-2xl font-medium'>
            Mark Mallari
        </div>
        <div className='flex items-center gap-6'>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
        </div>
    </nav>
  )
}

export default NavBar