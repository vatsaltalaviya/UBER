import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import CaptionLogin from './pages/CaptionLogin'
import CaptionSignup from './pages/CaptionSignup'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptionHome from './pages/CaptionHome'
import CaptionProtectedWrapper from './pages/CaptionProtectedWrapper'
import CaptionLogout from './pages/CaptionLogout'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/captionHome' element={
        <CaptionProtectedWrapper>
          <CaptionHome/>
        </CaptionProtectedWrapper>
      }/>
      <Route path='/home' element={
        <UserProtectedWrapper>
        <Home />
      </UserProtectedWrapper>} />
      <Route path='/login' element={<Userlogin />}/>
      <Route path='/signup' element={<UserSignup />}/>
      <Route path='/captionLogin' element={<CaptionLogin />}/>
      <Route path='/captionSignup' element={<CaptionSignup />}/>
      <Route path='/caption/logout' element={<CaptionProtectedWrapper><CaptionLogout /></CaptionProtectedWrapper>}/>
      <Route path='/users/logout' element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>}/>
    </Routes>
  )
}

export default App 