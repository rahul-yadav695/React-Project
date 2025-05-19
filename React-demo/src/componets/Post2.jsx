import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { RiResetRightFill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";


function Post2({ title, content, img }) { 

    const [counter, setCounter] = useState(0);
    const [dislik, setDislik] = useState(0);
    const [comment, setcomment] = useState([]);
    const [text,setText]=useState("")

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


    const mainCart = () => {
        // let inputElement = document.getElementById("mainCart");
        // let value = inputElement.value;
        // console.log(value, "cartvalue");

        // inputElement.value = "";
        
        if(text.trim() == ""){
            alert("Enter Your Task:");
        }else{
             setcomment([...comment, text]);
        setText("")
        }

       

        
    };



    return (
        <>
            <div>
                <div className=' flex justify-center'>
                    <img className='w-100 h-100 mt-20' src={img} alt="" />
                </div>
                <h1 className='flex justify-center'>{title}</h1>
                <p>{content}</p>
                <div className=' flex justify-center gap-10'>
                    <button className='text-5xl mt-10 text-blue-500' onClick={handlclike}><AiFillLike />
                    </button>
                    <button className='mt-10' id='main'>{counter}</button>
                    <button className='text-5xl text-black-500 mt-10' onClick={disk}><BiSolidDislike />
                    </button>
                    <button className='mt-10' id='post'>{dislik}</button>
                    <button className='text-5xl mt-10 text-fuchsia-600' onClick={dislike}><RiResetRightFill />
                    </button>
                </div>

                <div className='border-2 w-51 ms-15 mt-10'>
                    <input className='outline-0'  type="text" value={text} onChange={(e)=>setText(e.target.value)} id='mainCart' placeholder='Comment' />
                    <button onClick={mainCart}><IoSend /></button>
                </div>

                <div>
                    {comment.map((post) => (
                        <div className='flex gap-5 ml-15'>
                            <li id='esrt' className='text-start'>{post}</li>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Post2