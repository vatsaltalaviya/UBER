import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className=" bg-cover bg-bottom bg-no-repeat bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8 w-full flex flex-col justify-between ">
            <img className='w-14 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-5 pb-7 px-5'>
                <h2 className='font-bold text-3xl'>Get started with uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full py-3 bg-black text-white rounded mt-4'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home