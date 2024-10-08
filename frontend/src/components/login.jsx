import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

const apiUrl = import.meta.env.VITE_PRIVATE_API_URL


  const Auth = async e => {
    e.preventDefault()
    console.log(email, password)
    try {
      await axios.post(`${apiUrl}/login`, {
        email: email,
        password: password
      })
      navigate('/dashboard')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
   <section className='hero w-full bg-gray-900 items-center h-dvh my-auto flex justify-center'>
      <div className='body'>
        <div className='container'>
          <div className='flex flex-col w-96'>
            <div className='w-full max-w-lg mx-auto'>
              <form
                onSubmit={Auth}
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
              >
                <div className='px-6 py-3 bg-red-600 w-full rounded-md mb-4'>
                  <p className='text-white font-bold'>{msg}</p>
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-2'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='password'
                  >
                    Password
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    placeholder='******************'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  {/* <p className='text-red-500 text-xs italic'>
                    Please choose a password.
                  </p> */}
                </div>
                <Link to={'/register'} className='mb-4'>Belum Punya Akun?</Link>
                <div className='flex items-center justify-between'>
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-
                            2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <p className='text-center text-gray-500 text-xs'>
              &copy;2024 Luphiee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
