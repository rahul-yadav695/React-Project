import React, { useState } from 'react'
import { product } from '../data/product'

function Card(props) {

    function removecard(id) {
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    let length = JSON.parse(localStorage.getItem("length"));

        const data = cart.filter((item) => {
            return item.id !== id;
        })
        props.setadd(data)
        localStorage.setItem("cart",JSON.stringify(data))
        localStorage.setItem("length",JSON.stringify(data.length))
    }

    let cart = JSON.parse(localStorage.getItem("cart"))||[];

    return (
        <> 
            <div className=''>
                {cart.map((val, i) =>
                    <div key={i} className='flex gap-10 mt-10 mb-0'>
                        <img className='w-full h-20 object-contain raaj' src={val.img} alt="error" />
                        <p>{val.name}</p>
                        <p>{val.price}</p>
                        <p>{val.quantity}</p>
                        <button onClick={() => removecard(val.id)} className='bord'>X</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Card

 