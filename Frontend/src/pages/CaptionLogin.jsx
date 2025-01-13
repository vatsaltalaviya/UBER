import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptionLogin = () => {
    const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [captionData, setCaptionData] = useState({})
    
        const submitHandler = (e) => {
            e.preventDefault();
            // call login api here
            console.log({email, password});
            setCaptionData({email:email , password:password})
            // clear form
            setEmail('');
            setPassword('');
        }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-14 mb-5' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
        <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        className='bg-[#eeeeee] mb-7 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
        type="email" 
        name=""
         value={email}
        onChange={(e)=>{
            setEmail(e.target.value);
        }}
        required placeholder='email@email.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        className='bg-[#eeeeee] mb-7 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
        type="password" 
        name="" 
        required placeholder='Password'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value);
        }}
        />
        
        <button className='bg-[#000] text-white font-semibold mb-3 px-4 py-2 rounded w-full text-lg placeholder:text-base'>Login </button>
        </form>
        <p className='text-center '>Join here ?<Link to='/captionSignup' className='text-blue-700 ml-2' >Register as a Caption</Link></p>
        
       </div>
       <div>
       <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 mt-2 rounded w-full text-lg placeholder:text-base'>Sign in as User</Link>
       </div>
    </div>
  )
}

export default CaptionLogin