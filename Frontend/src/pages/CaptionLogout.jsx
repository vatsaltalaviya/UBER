import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptionLogout = (
    {children}
)  => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/captions/logout`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
       .then(response => {
        if(response.status==200){
            localStorage.removeItem('token')
            navigate('/captionLogin')
            }
        })
    })

  return (
    <div>CaptionLogout</div>
  )
}

export default CaptionLogout