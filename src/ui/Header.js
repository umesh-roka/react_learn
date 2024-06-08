import React from 'react'
import { NavLink } from 'react-router-dom'




const Header = () => {
  return (
    <div className='bg-blue-black text-white flex  items-baseline justify-between px-4 py-2'>

      <h1 className='text-2xl '>TailWind</h1>

      <nav className='space-x-4'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/details'>Student Detail</NavLink>
        <NavLink to='/addForm'>Student Form</NavLink>
        <NavLink to='/about' className={({ isActive }) => {
          return isActive ? 'text-pink-800' : 'text-white'
        }}>About</NavLink>

        <NavLink to='contact'>Contact</NavLink>

      </nav>




    </div>
  )
}

export default Header