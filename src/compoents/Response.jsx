import React, { useEffect } from 'react'
import { LuLoader2 } from "react-icons/lu";

const Response = ({func}) => {
    useEffect(()=>{
      setTimeout(() => {
         func({response:false , path:true})
      }, 2000);
    },[func])
    return (
        <div className=' fixed top-0 left-0 w-full h-full z-10 bg-white flex justify-center items-center px-3 '>
            <div className=' sm:w-[40rem] flex flex-col items-center'>
            <LuLoader2  className='circle text-7xl text-yellow-600 font-bold'/>
                <p className=' sm:px-20 font-bold md:text-lg   my-6 text-center'>Finding learning path recommendations for you based on your responses</p>
            </div>
        </div>
    )
}

export default Response
