import React from 'react'
import { FaStar } from "react-icons/fa";
import cheer from '../assets/cheer.png'
const Way = ({ func, func2 }) => {
    const handleway = () => {
        func({
            response: true, path: false
        })
        func2("200%")
    }
    return (
        <div className='flex flex-col items-center px-3  h-[100svh] justify-center'>
            <div className=' sm:flex md:w-[40rem] sm:items-center '>
                <div className="img sm:w-[50%] hidden sm:block">
                    <img src={cheer} alt="cheer" />
                </div>
                <div className="content sm:w-[50%]">
                    <h1 className=' font-bold text-2xl'>You're on the way!</h1>
                    <ul className='flex gap-2 text-2xl my-3'>
                        <li><FaStar className=' text-yellow-500' /></li>
                        <li><FaStar className=' text-yellow-500' /></li>
                        <li><FaStar className=' text-yellow-500' /></li>
                        <li><FaStar className=' text-yellow-500' /></li>
                        <li><FaStar className=' text-yellow-500' /></li>
                    </ul>
                    <q className=' text-sm font-semibold mt-5'>Through its engaging and well structured courses ,Brilliant has taught  me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.</q>
                    <p className=' my-5 font-semibold'>-- Jacob s.</p>
                </div>
            </div>
            <button className=' bg-black text-white rounded px-7 py-2 font-semibold mt-10' onClick={handleway}>Continue</button>
        </div>
    )
}

export default Way
