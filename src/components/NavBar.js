import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-blue-600 flex justify-between px-4'>
        <div className='text-white'>
            Devtamin
        </div>
        <ul className='flex gap-4'>
            <li className='text-blue-950 underline'><a href="/">Home</a></li>
            <li className='text-blue-950 underline'><a href="/blog">Blog</a></li>
            <li className='text-blue-950 underline'><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar