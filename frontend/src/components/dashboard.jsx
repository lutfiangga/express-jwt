import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import Navbar from './navbar'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [expire, setExpire] = useState('')
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  const apiUrl = import.meta.env.VITE_PRIVATE_API_URL

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${apiUrl}/token`)
      setToken(response.data.accessToken)
      const decoded = jwtDecode(response.data.accessToken)
      // console.log(decoded)
      setName(decoded.name)
      setExpire(decoded.exp)
    } catch (error) {
      if (error.response) {
        navigate('/')
      }
    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(
    async config => {
      const currentDate = new Date()
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${apiUrl}/token`)
        config.headers.Authorization = `Bearer ${response.data.accessToken}`
        setToken(response.data.accessToken)
        const decoded = jwtDecode(response.data.accessToken)
        setName(decoded.name)
        setExpire(decoded.exp)
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  const getUser = async () => {
    const response = await axiosJWT.get(`${apiUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setUser(response.data)
  }

  useEffect(() => {
    refreshToken()
    getUser()
  }, [])

  return (
    <>
      <Navbar />
      <div className='min-w-full flex justify-center'>
        <div className='flex flex-col my-4'>
          <div className='flex flex-row items-center'>
            <p className='capitalize'>Welcome Back: <span className='font-bold'>{name}</span></p>
            <button
              onClick={getUser}
              className='px-6 text-white py-2 rounded-lg bg-indigo-800 mx-4'
            >
              Get Users
            </button>
          </div>
          <table className='mt-4 table-auto min-w-full text-left text-sm font-light text-surface'>
            <thead className='border-b border-gray-700 font-medium'>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr key={user.id} className='border-b border-neutral-200 bg-black/[0.02]'>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard
