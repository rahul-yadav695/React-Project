import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { RiResetLeftLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

function Post3({ title, content, img }) {

  const [counter, setCounter] = useState(0);
  const [dislik, setDislik] = useState(0);
  const [comment, setcomment] = useState([]);
  const [text , settext] = useState("");

  const handlclike = () => {
    setCounter(counter + 1)
  }


  const disk = () => {
    setDislik(dislik + 1)
  }


  const dislike = () => {
    setCounter(0)
    setDislik(0)

    console.log("clcik");
  }

  const usedrik = () => { 
    if(text.trim() == ""){
      alert("Enter Your Task:-");
    }else{
      setcomment([...comment , text]);
      settext("");
    }

  }



  return (
    <>
      <div>
        <div className=' flex justify-center'>
          <img className='w-100 h-100 mt-20' src={img} alt="" />
        </div>
        <h1 className='flex justify-center'>{title}</h1>
        <p>{content}</p>
        <div className=' flex justify-center gap-10'>
          <button className='text-5xl mt-10 text-fuchsia-300' onClick={handlclike}><AiFillLike />
          </button>
          <button className='mt-10' id='main'>{counter}</button>
          <button className='text-5xl text-rose-500 mt-10' onClick={disk}><BiSolidDislike />
          </button>
          <button className='mt-10' id='post'>{dislik}</button>
          <button className='text-5xl mt-10 text-indigo-700' onClick={dislike}><RiResetLeftLine />
          </button>
        </div>

        <div className='border-2 w-51 ms-15 mt-10'>
          <input className='outline-0' value={text} type="text" onChange={(e) => settext(e.target.value)} id='mainCart' placeholder='Comment' />
          <button onClick={usedrik}><IoSend /></button>
        </div>
      </div>

    </>
  )
}

export default Post3