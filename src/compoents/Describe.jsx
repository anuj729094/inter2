import React, { useState } from 'react'

const Describe = ({ func }) => {
  const [status, setStatus] = useState(null)

  const arr = [
    "Student or soon to be enrolled", "Profesional pursuing a career", "Parent of school-age child",
    "Lifelong learner", "Teacher", "Other"
  ]
  return (
    <div className=' sm:flex sm:justify-center lg:items-center '>
      <div className='sm:flex sm:flex-col sm:items-center px-3 sm:px-0 text-center sm:w-[40rem] mt-12 '>
        <h2 className=' font-bold text-xl '>Which describes you best?</h2>
        <p className=' font-semibold text-gray-500  my-3'>This will help us personalize your experience.</p>
        <ul className=' listofinterested flex flex-col gap-3 mt-7 sm:w-[36rem] '>
          {
            arr.map((item, index) => <li style={status === item ? { border: "1px solid paleyellow", boxShadow: "0 0 7px #212121" } : {}} key={index} className=' text-left' onClick={() => setStatus(item)}>
              <img src={`https://joesch.moe/api/v1/${index}`} alt="" className=' w-10 h-10 mx-3' />
              <p>{item}</p>
            </li>)
          }
        </ul>
        <button style={status ? { backgroundColor: "black" } : { backgroundColor: "rgb(0 0 0 / 17%)" }} type='button' disabled={status ? false : true} className='  text-white rounded px-7 py-3 font-semibold my-4' onClick={() => func("40%")}>Continue</button>
      </div>
    </div>

  )
}

export default Describe
