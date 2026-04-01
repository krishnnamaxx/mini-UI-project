import React from 'react'
import Page1Content from './Page1Content'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18'>
        <h4 className='bg-black text-white px-6 py-2 rounded-full uppercase'>Target Audience</h4>
        <button className='bg-gray-200 px-6 py-2 rounded-full tracking-widest text-sm uppercase'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
