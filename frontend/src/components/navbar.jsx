// Import React and Tailwind CSS
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios  from 'axios'

const navlink = [
  {
    name: 'Home',
    link: '/dashboard'
  },
  {
    name: 'About',
    link: '#'
  },
  {
    name: 'Services',
    link: '#'
  },
  {
    name: 'Contact',
    link: '#'
  },
]

const Navbar = () => {

const navigate = useNavigate()

const Logout = async() => {
try {
  await axios.delete('http://localhost:5000/logout')
  navigate('/')
} catch (error) {
  console.log(error)
}
}

  return (
    <nav className='bg-gray-800 text-white p-5'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold'>Your Brand</div>
        <div className='flex items-center font-medium'>
          {navlink.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className='mx-2 hover:text-gray-300'
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink onClick={Logout} className='bg-indigo-900 px-4 py-2 rounded-lg ml-4 text-yellow-400'>Logout</NavLink>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
