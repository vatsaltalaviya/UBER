import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
            props.setconfirmRidePanel(false)
          }} className=' text-xl absolute right-5 top-5'><i className="text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h2 className='text-2xl font-semibold mb-3'>Confirm your Ride</h2>

           <div className='flex flex-col justify-between items-center'>
             <img className='h-20' src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="" />
             <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>kakariya talav , Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="text-lg ri-map-pin-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>kakariya talav , Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                <i className="text-lg ri-currency-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹193.89</h3>
                        <p className='text-sm text-gray-600'>Cash cash</p>
                    </div>
                </div>
                
             </div>
             <button onClick={()=>{props.setVehicleFound(true)
              props.setconfirmRidePanel(false)
             }} className='w-full mt-5 bg-green-600 text-xl font-semibold p-2 rounded-xl text-white'>Confirm</button>
             </div>

    </div>
  )
}

export default ConfirmRide