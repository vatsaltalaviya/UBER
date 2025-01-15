import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { captionDataContext } from '../context/CaptionContext';
import axios from 'axios';

const CaptionProtectedWrapper = (
    {children}
) => {

    const { captionData, setCaptionData } = useContext(captionDataContext)
    const [isLoading, setIsLoading] = useState(true)

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    useEffect(()=>{
        if (!token) {
            navigate('/captionLogin');
        }
    },[token])

     axios.get(`${import.meta.env.VITE_BASE_URL}/captions/profile` , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response=>{
        if(response.status==200){
            setCaptionData(response.data.captionData)
            setIsLoading(false)
        }
    }).catch(err=>{
        setIsLoading(false)
        localStorage.removeItem('token')
        navigate('/captionLogin')
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

export default CaptionProtectedWrapper