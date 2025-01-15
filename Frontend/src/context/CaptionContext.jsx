import React, { createContext, useState } from 'react'

export const captionDataContext = createContext()
const CaptionContext = (
    {children}
) => {

    const [captionData , setCaptionData] = useState()
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(null)

    const updateCaptionData = (captionData) => {
        setCaptionData(captionData)
    }
    const values ={
        captionData,
        setCaptionData,
        updateCaptionData,
        isLoading,
        setIsLoading,
        error,
        setError,
        
    }

  return (
    <captionDataContext.Provider value={values}>
      {children}
    </captionDataContext.Provider>
  )
}

export default CaptionContext