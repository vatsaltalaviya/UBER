import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import CaptionLogin from './pages/CaptionLogin'
import CaptionSignup from './pages/CaptionSignup'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Userlogin />}/>
      <Route path='/signup' element={<UserSignup />}/>
      <Route path='/captionLogin' element={<CaptionLogin />}/>
      <Route path='/captionSignup' element={<CaptionSignup />}/>
    </Routes>
  )
}

export default App 