import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import Navbar from './navbar'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [expire, setExpire] = useState('')
  const navigate = useNavigate()

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token')
      setToken(response.data.accessToken)
      const decoded = jwtDecode(response.data.accessToken)
      // console.log(decoded)
      setName(decoded.name)
      setExpire(decoded.exp)
    } catch (error) {
      if(error.response){
        navigate('/')
      }

    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(async(config)=>{
    const currentDate = new Date()
    if(expire * 1000 < currentDate.getTime()){
      const response = await axios.get('http://localhost:5000/token')
      config.headers.Authorization = `Bearer ${response.data.accessToken}`
      setToken(response.data.accessToken)
      const decoded = jwtDecode(response.data.accessToken)
      setName(decoded.name)
      setExpire(decoded.exp)
    }
    return config
  },(error)=>{
    return Promise.reject(error)
  })

  const getUser = async () =>{
    const response = await axiosJWT.get('http://localhost:5000/users',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
  }

  useEffect(() => {
    refreshToken()
  }, [])

  return (
    <div>
      <Navbar />
      Welcome Back: {name}
      <button onClick={getUser} className='px-6 text-white py-2 mt-4 rounded-lg bg-indigo-800 mx-4'>Get Users</button>
    </div>
  )
}

export default Dashboard
