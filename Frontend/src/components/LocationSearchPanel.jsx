import React from 'react'

const LocationSearchPanel = (props) => {

    //sample locations

    const locations = [
        "16/7 Bhojarajpara, behind chandarmoleswar mandir , gondal",
        "13 Bhojarajpara, behind chandarmoleswar mandir , gondal",
        "26/2 Bhojarajpara, behind chandarmoleswar mandir , gondal",
        "11 Bhojarajpara, behind chandarmoleswar mandir , gondal",
    ]
    return (
        <div>
            {locations.map(function (elem , index) {
                return <div key={index} onClick={()=>{props.setVehiclePanel(true)
                 props.setpanelOpen(false)}} className='flex items-center border-2 border-white active:border-black gap-4 my-2 p-3 rounded-xl justify-start px-5'>
                    <h2 className='bg-[#eeeeee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill "></i></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            })}

        </div>
    )
}

export default LocationSearchPanel