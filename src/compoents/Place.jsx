import React from 'react'
import books from '../assets/books.png'
const Place = ({func}) => {
  return (
    <div className='flex flex-col items-center px-3  h-[100vh] justify-center'>
      <div className=' sm:flex md:w-[40rem] sm:items-center '>
        <div className="img sm:w-[50%] hidden sm:block">
          <img src={books} alt="books" />
        </div>
        <div className="content sm:w-[50%]">
          <h1 className=' font-bold text-2xl'>You're in the right place</h1>
          <p className=' text-sm font-semibold mt-5'>Brilliant gets you hand on to help improve your professional skills and knowledge . You'll interact with concepts and solve fun problems in math , science and computer science</p>
        </div>
      </div>
      <button className=' bg-black text-white rounded px-7 py-2 font-semibold mt-10' onClick={()=>func("80%")}>Continue</button>
    </div>
  )
}

export default Place
