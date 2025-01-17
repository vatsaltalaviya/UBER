import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import WaitingForDriver from '../components/WaitingForDriver'
import LokingForDriver from '../components/LokingForDriver'


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [desctination, setDesctination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setconfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [WaitForDriver, setWaitForDriver] = useState(false)
 
  const panelRef = useRef(null)
  const arrRef = useRef(null)
  const  vehiclePanelRef = useRef(null)
  const  confirmRidePanelRef = useRef(null)
  const  vehicleFoundRef = useRef(null)
  const  waitingForDriverRef = useRef(null)
  

  useGSAP(function(){
   if(panelOpen){
    gsap.to(panelRef.current,{
      height:'70%'
    })
    gsap.to(arrRef.current,{
      opacity:1
    })
  }
  else{
    gsap.to(panelRef.current,{
      height:'0%'
    })
    gsap.to(arrRef.current,{
      opacity:0
    })
  }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])
 
  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])
  
  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(WaitForDriver){
      gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)'
      })
    }
    else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[WaitForDriver])

  const submitHandler = (e)=> {
    e.preventDefault();
   
    setPickup('')
    setDesctination('')
  }
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-14 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        {/*image temporarily */}
        <img
          className='w-full h-full object-cover'
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67" alt="" />
        <div className='flex flex-col justify-end absolute top-0 h-screen w-full'>
          <div className='bg-white h-[30%] p-5 relative'>
            <h5 ref={arrRef} onClick={()=>{setpanelOpen(false)}} className=' text-xl opacity-0 absolute right-5 top-5'><i className="ri-arrow-down-wide-line"></i></h5>
            <h4 className='font-semibold text-2xl mb-2'>Find the trip</h4>
            <form onSubmit={(e)=>{submitHandler(e)}}>
              <input value={pickup} onChange={(e)=>{setPickup(e.target.value)}} onClick={()=>{ setpanelOpen(true)}} className='bg-[#eeeeee] rounded-lg text-xl w-full px-8 py-3 mb-3' type="text" placeholder='Add a Pick-up location' />
              <input value={desctination} onChange={(e)=>{setDesctination(e.target.value)}} onClick={()=>{ setpanelOpen(true)}} className='bg-[#eeeeee] rounded-lg text-xl w-full px-8 py-3' type="text" placeholder='Enter your Destination' />

            </form>
          </div>
            <div ref={panelRef} className='bg-white h-[0] p-5'>
                <LocationSearchPanel setpanelOpen={setpanelOpen} setVehiclePanel={setVehiclePanel}/> 
            </div>
          </div>
          <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-5 pt-12'>
            <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setVehiclePanel={setVehiclePanel} />
          </div>
          <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-5 pt-12'>
            <ConfirmRide setconfirmRidePanel={setconfirmRidePanel} setVehicleFound={setVehicleFound} />
          </div>
          <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-5 pt-12'>
             <LokingForDriver setVehicleFound={setVehicleFound}/>
          </div>
          <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-5 pt-12'>
             <WaitingForDriver setWaitForDriver={setWaitForDriver} />
          </div>
      </div>
    </div>
  )
}

export default Home