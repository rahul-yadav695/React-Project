import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { RiResetLeftLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";




function Useimg({ title, content, img }) {

    const [counter, setCounter] = useState(0);
    const [dislik, setDislik] = useState(0);
    const [comment, setcomment] = useState([]);

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
        let inputElement = document.getElementById("mainCart");
        let value = inputElement.value;
        console.log(value, "cartvalue");

        inputElement.value = "";
        setcomment([...comment, value]);
 
    };


    return (
        <>
            <div>
                <div className=''>
                    <img className='w-100 h-100 mt-20 shadow-2xs border-4 rounded-4xl' src={img} alt="" />
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                
                <div className='flex gap-10'>
                    <button className='text-5xl mt-10 text-amber-300' onClick={handlclike}><AiFillLike />
                    </button>
                    <button className='mt-10' id='main'>{counter}</button>
                    <button className='text-5xl text-red-500 mt-10' onClick={disk}><BiSolidDislike />
                    </button>
                    <button className='mt-10' id='post'>{dislik}</button>
                    <button className='text-5xl text-emerald-600 mt-10' onClick={dislike}><RiResetLeftLine /></button>
                </div>

                <div className='border-2 w-51 ms-15 mt-10'>
                    <input className='outline-0' type="text" id='mainCart' placeholder='Comment' />
                    <button onClick={mainCart}><IoSend /></button>
                </div>

                <div>
                    {comment.map((post) => (
                        <div className='flex gap-5 ml-15'>
                            <h1 className='text-start'>{post}</h1>
                        </div>
                    ))}
                </div>
            </div>



        </>
    )
}

export default Useimg

