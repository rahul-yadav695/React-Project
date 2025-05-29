import React from 'react'
const Tostify=({message})=>{
    return(
        <>
        <div>
            <p className='bg-blue-500 text-white w-75 h-10 flex justify-center items-center rounded-2xl absolute top-4 z-50 right-2.5'>{message}</p>
        </div>
        </>
    )
}

export default Tostify;