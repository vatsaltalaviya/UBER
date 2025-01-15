import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserProtectedWrapper = (
    {children}
) => {
   const {user , setUser} = useContext(UserDataContext)
      const [isLoading, setIsLoading] = useState(true)

    const token = localStorage.getItem('token');
    const navigate  = useNavigate();

   useEffect(()=>{
    if (!token) {
        navigate('/login');
        
      }
      
   },[token])
   axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile` , {
    headers: {
        Authorization: `Bearer ${token}`
    }
}).then(response=>{
    if(response.status==200){
        setUser(response.data.user)
        setIsLoading(false)
    }
}).catch(err=>{
    setIsLoading(false)
    localStorage.removeItem('token')
    navigate('/login')
}
)
   

if(isLoading){
    return <div>Loding.....</div>
}

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper