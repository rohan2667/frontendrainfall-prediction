import React from 'react'
import { FaCloudRain } from "react-icons/fa6";

export const Rainfall = () => {
   
  return (
    <div className='bg-cover bg-center h-screen w-full flex items-center ' style={{backgroundImage:"url('/public/images/ai-generated-dark-sky-and-clouds-background-storm-time-dark-thunderstorm-free-photo.jpeg')"}}>
      long-mountain-range
    
        <div className='h-[33rem] w-[25rem] border mx-auto border-gray-200 backdrop-blur-3xl rounded-xl shadow-xl'>
            <h1 className='text-center text-2xl text-[white] mt-1 '>Rainfall prediction</h1>
           
           <div className='gap-4'>
           <div className='ml-4 '>
            <label>
                <p className='text-[white] text-base mb-1'>Latitude</p>
                <input className='bg-transparent border border-white w-[22rem] p-1 mb-5 text-[white] focus outline-none rounded-md ' placeholder='Enter the latitude'></input>
            </label>
           </div>

            
           <div className='ml-4'>
            <label>
                <p className='text-[white] text-base mb-1'>Longitude</p>
                <input  className='bg-transparent border border-white w-[22rem] p-1 mb-5 text-[white] rounded-md focus outline-none' placeholder='Enter the longitude'></input>
            </label>
           </div>

           <div className='ml-4'>
            <label>
                <p className='text-[white] text-base mb-1'>Start Date</p>
                <input  type='date' className='bg-transparent border border-white text-[white] w-[22rem] rounded-md p-1 mb-5 focus outline-none' placeholder='Enter the latitude'></input>
            </label>
           </div>

           <div className='ml-4'>
            <label>
                <p className='text-[white] text-base mb-1'>End Date</p>
                <input  type='date' className='bg-transparent border border-white text-[white] w-[22rem] p-1 rounded-md mb-5 focus outline-none' placeholder='Enter the latitude'></input>
            </label>
           </div>
           
           <div className='w-[22rem] ml-4 bg-blue-500 hover:bg-blue-700 text-center h-10 flex gap-2  rounded-md mt-3'>

         <button className='ml-28 text-center text-[white]'> Get Prediction </button>
         <FaCloudRain className='mt-3 text-[white]' />
        </div>

           {/* <button className='border border-gray-200 bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 p-1 w-[22rem] '>Get prediction </button> */}
           

         </div>
           
        </div>
      

    </div>

    
  )
}
