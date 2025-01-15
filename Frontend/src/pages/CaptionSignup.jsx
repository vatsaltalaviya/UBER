import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { captionDataContext } from '../context/CaptionContext'
import { useContext } from 'react'
import axios from 'axios'

const CaptionSignup = () => {

    const navigate = useNavigate()

    // state for form data
    const { captionData, setCaptionData } = useContext(captionDataContext)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vehicleColor , setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')


    const submitHandler = async (e) => {
        e.preventDefault();
        const newCaptionData = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email ,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType,
            }
        }
        // call login api here

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captions/register` , newCaptionData)
        if(response.status== 201){
            const data = response.data;
            setCaptionData(data.caption) 
            localStorage.setItem('token', data.token);
            navigate("/captionHome");
        }

        // clear form
        
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');

    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-5' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
                <form onSubmit={(e) => { submitHandler(e) }}>
                    <h3 className='text-lg font-medium mb-2'>What's our caption's Name</h3>
                    <div className='flex gap-4'>
                        <input
                            className='bg-[#eeeeee] mb-2 px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                            type="text"
                           
                            required placeholder='Firstname'
                            value={firstname}
                            onChange={(e) => { setFirstname(e.target.value); }}
                        />
                        <input
                            className='bg-[#eeeeee] mb-2 px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                            type="text"
                           
                            required placeholder='Lastname'
                            value={lastname}
                            onChange={(e) => { setLastname(e.target.value); }}
                        />
                    </div>
                    <h3 className='text-lg font-medium mb-2'>What's our caption's email</h3>
                    <input
                        className='bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
                        type="email"
                      
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required placeholder='email@email.com' />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                    <input
                        className='bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
                        type="password"
                        
                        required placeholder='Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <h3 className='text-lg font-medium mb-2'>Vehicle information</h3>
                    <div className='flex gap-4'>
                        <input
                            className='bg-[#eeeeee] mb-2 px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                            type="text"
                           
                            required placeholder='vehicle colour'
                            value={vehicleColor}
                            onChange={(e) => { setVehicleColor(e.target.value); }}
                        />
                        <input
                            className='bg-[#eeeeee] mb-2 px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                            type="text"
                           
                            required placeholder='vehicle plate'
                            value={vehiclePlate}
                            onChange={(e) => { setVehiclePlate(e.target.value); }}
                        />
                    </div>
                    <div className='flex gap-4 mb-5'>
                        <input
                            className='bg-[#eeeeee] mb-2 px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                            type="number"
                            
                            required placeholder='vehicle capacity'
                            value={vehicleCapacity}
                            onChange={(e) => { setVehicleCapacity(e.target.value); }}
                        />
                        <select
                            className='bg-[#eeeeee] mb-2 px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                            
                            required placeholder='vehicle type'
                            value={vehicleType}
                            onChange={(e) => { setVehicleType(e.target.value); }}
                        >
                            <option defaultValue=''>Select a vehicle</option>
                            <option value="Car">Car</option>
                            <option value="Auto">Auto</option>
                            <option value="Motorcycle">Motorcycle</option>
                        </select>
                        
                    </div>
                    
                    <button className='bg-[#000] text-white font-semibold mb-3 px-4 py-2 rounded w-full text-lg placeholder:text-base'>Create caption's Account  </button>
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

export default CaptionSignup