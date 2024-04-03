import React, { useState } from 'react'
import point from '../assets/point.png'
import eye from '../assets/eye.png'
import career from '../assets/career.png'
import explore from '../assets/explore.png'
import math from '../assets/math.png'

const Interested = ({ func }) => {
  const[status , setStatus] = useState(null)
  const arr = [
    {
      img: career,
      title: "Learning specific skills to advance my career"
    },
    {
      img: explore,
      title: "Exploring new topics I'm interested in"
    },
    {
      img: math,
      title: "Refereshing my math foundations"
    },
    {
      img: point,
      title: "Exercise my brain to stay sharp"
    },
    {
      img: eye,
      title: "Something else"
    }
  ]
  return (
    <div className=' sm:flex sm:justify-center lg:items-center'>
      <div className='sm:flex sm:flex-col sm:items-center px-3 sm:px-0 text-center  sm:w-[40rem] mt-12  '>
        <h2 className=' font-bold text-xl '>Which are you most interested in?</h2>
        <p className=' font-semibold text-gray-500  my-3'>Choose just one.This will help us get you started (but won't limit your experience).</p>
        <ul className=' listofinterested flex flex-col gap-3 mt-7 sm:w-[36rem] '>
          {
            arr.map((item, index) => <li key={index} className=' text-left' onClick={()=>setStatus(item.title)} style={status===item.title ? {border: "1px solid paleyellow", boxShadow: "0 0 7px #212121" }:{}}>
              <img src={item.img} alt="" className=' w-16 h-10' />
              <p>{item.title}</p>
            </li>)
          }
        </ul>
        <button disabled={status ? false : true} style={status ? {backgroundColor:"black"}:{backgroundColor:"rgb(0 0 0 / 17%)"}} className='  text-white rounded px-7 py-3 font-semibold my-4' onClick={() => func("60%")}>Continue</button>
      </div>
    </div>
  
  )
}

export default Interested
