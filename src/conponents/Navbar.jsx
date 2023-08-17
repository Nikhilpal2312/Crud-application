import React from 'react'

const Navbar = () => {
  return (
    <div className='my-4 h-[60px] text-white items-center bg-[#1B6B93] rounded-lg flex justify-center text-lg font-medium gap-2'>
      <img src='/images/reactjs-icon.svg' className='max-w-[40px]' alt='firebase'  />
      <h1>React CRUD APP</h1>
    </div>
  )
}

export default Navbar
