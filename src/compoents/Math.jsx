import React, { useState } from 'react'
import arithematic from '../assets/arithematic.png'
import calculus from '../assets/calculus.png'
import Capture from '../assets/Capture.png'
import inter from '../assets/inter.png'

const Math = ({ func }) => {
  const[status , setStatus]=useState(null)
  const arr = [
    arithematic, calculus, Capture, inter
  ]
  return (
    <div className=' sm:flex sm:justify-center lg:items-center sm:h-[100svh]'>
      <div className='sm:flex sm:flex-col sm:items-center sm:justify-center px-3 sm:px-0 text-center sm:w-[40rem] mt-12  '>
        <h2 className=' font-bold text-xl '>What is your math comfort level?</h2>
        <p className=' font-semibold text-gray-500  my-3'>Choose the highest level you are feel confident in - you can always adjust later.</p>
        <ul className='algo  flex flex-col items-center sm:flex-row gap-3 mt-7 sm:w-[36rem] '>
          {
            arr.map((img,index) => <li key={index} className='' onClick={()=>setStatus(img)} style={status===img ? {border: "1px solid paleyellow", boxShadow: "0 0 7px #212121" }:{}}>
              <img src={img} alt="" className=' ' />
            </li>)
          }
        </ul>
        <button  disabled={status ? false : true} style={status ? {backgroundColor:"black"}:{backgroundColor:"rgb(0 0 0 / 17%)"}}  className='  text-white rounded px-7 py-3 font-semibold my-4' onClick={() => func("100%")}>Continue</button>
      </div>
    </div>
  )
}

export default Math
