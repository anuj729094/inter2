import './App.css'
import { IoIosArrowBack } from "react-icons/io";
import Interested from './compoents/Interested';
import Describe from './compoents/Describe';
import Place from './compoents/Place'
import Way from './compoents/Way';
import Path from './compoents/Path';
import Math from './compoents/Math';
import Response from './compoents/Response';
import { useState } from 'react';

function App() {
  const[length , setLength]= useState("20%")
  const[obj , setObj] = useState({
    response:false , path:false
  })
  return (
    <div className=''>
      <div className=' fixed w-full flex justify-center top-0 '>
        <div className="progress w-full md:w-[45rem] flex items-center justify-center gap-1 my-5 px-3 ">
        { length!=="20%" && <button className='arrow'onClick={length.length===4 ? ()=>setLength(`${length[0] + length[1]+ length[2] - 20}%`):()=>setLength(`${length[0] + length[1] - 20}%`)}><IoIosArrowBack /></button>}
          <div className="bar rounded  h-1 w-full">
            <div style={{width:length}} className=' bg-green-300  h-full'>

            </div>
          </div>
        </div>
      </div>
     {length ==="20%" && <Describe func={setLength} /> }
     {length ==="40%" && <Interested func={setLength}/> }
     {length ==="60%" && <Place func={setLength}/> }
     {length ==="80%" && <Math func={setLength}/> }
     {length ==="100%" && <Way func={setObj} func2={setLength}/> }
     {obj.response  && <Response func={setObj}/> }
     {obj.path  && <Path/> }
    </div>
  )
}

export default App
