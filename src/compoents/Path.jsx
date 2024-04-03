import React from 'react'
import path from '../assets/path.png'
const Path = () => {
    return (
        <div className=' fixed top-0 left-0 w-full h-full z-10 bg-white flex justify-center items-center px-3 '>
            <div className=' sm:w-[40rem]'>
                <div className=' '>
                    <h2 className=' font-bold text-xl lg:text-3xl text-center'>Learning path based on your answers</h2>
                    <p className=' font-semibold text-gray-500 text-sm  my-6 text-center'>Choose one to get started. You can switch anytime</p>
                    <div className='path flex flex-col sm:flex-row gap-3'>
                        <div className='relative flex px-1'>
                            <p className=' text-sm'>
                                <span>Foundational Math</span>
                                Build your foundational skills in algebra, geometry, and probalility
                            </p>
                            <img src={path} alt="" className=' w-28'/>
                           <p className=' absolute bg-yellow-500 rounded px-2 py-1 text-sm  top-[-0.8rem] left-[34%]'>Most Popular</p>
                        </div>
                        <div className='flex gap-1  px-2'>
                            <p className=' text-sm'>
                                <span>Mathematical Thinking</span>
                                Build your foundational skills in algebra, geometry, and probalility
                            </p>
                            <img src={path} alt="" className=' w-28'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Path
