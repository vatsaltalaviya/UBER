import React, { useContext, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
    const[firstname , setFirstname] = useState('')
    const[lastname , setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const {user, setUser}  = useContext(UserDataContext);

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
       
        const newUser = {
            fullname:{
              firstname:firstname,
              lastname:lastname},
             email:email , 
             password:password}
         // call login api here
         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

         if(response.status== 201){
           const data = response.data;
          setUser(data.user) 
          localStorage.setItem('token', data.token)
           navigate("/home")
         }

        // clear form
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-14 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
        <div className='flex gap-4'>
                <input 
                className='bg-[#eeeeee] mb-2 px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                type="text" 
                name=""
                required placeholder='Firstname'
                value={firstname}
                onChange={(e)=>{setFirstname(e.target.value);}}
                />
                <input 
                className='bg-[#eeeeee] mb-2 px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                type="text" 
                name=""
                required placeholder='Lastname'
                value={lastname}
                onChange={(e)=>{setLastname(e.target.value);}}
                />
        </div>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        className='bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
        type="email" 
        name=""
         value={email}
        onChange={(e)=>{
            setEmail(e.target.value);
        }}
        required placeholder='email@email.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        className='bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
        type="password" 
        name="" 
        required placeholder='Password'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value);
        }}
        />
        
        <button className='bg-[#000] text-white font-semibold mb-3 px-4 py-2 rounded w-full text-lg placeholder:text-base'>Create Account </button>
        </form>
        <p className='text-center '>Already have an Account ?<Link to='/login' className='text-blue-700 ml-2' >Login here</Link></p>
        
       </div>
       <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default UserSignup