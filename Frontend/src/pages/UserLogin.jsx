import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import axios  from 'axios'
import { UserDataContext } from '../context/UserContext'
import { useContext } from 'react'
const Userlogin = () => {

  const {user , setUser} = useContext(UserDataContext)
  const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {email:email , password:password}
        
        // call login api here
    
       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
       if(response.status === 200){{
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token)
        navigate('/home');
      }
       }

        // clear form
        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-14 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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
        <p className='text-center '>New here ?<Link to='/signup' className='text-blue-700 ml-2' >Create New Account</Link></p>
        
       </div>
       <div>
       <Link to='/captionLogin' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 mt-2 rounded w-full text-lg placeholder:text-base'>Sign in as Caption</Link>
       </div>
    </div>
  )
}

export default Userlogin