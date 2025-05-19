import React, { useState } from 'react'
import { product } from '../data/product'

function Card(props) {

    function removecard(id) {
        const data = props.add.filter((item) => {
            return item.id !== id;
        })
        props.setadd(data)
    }

    return (
        <> 
            <div className=''>
                {props.add.map((val, i) =>
                    <div key={i} className='flex gap-10 mt-10 mb-0'>
                        <img className='w-full h-20 object-contain raaj' src={val.img} alt="error" />
                        <p>{val.name}</p>
                        <p>{val.price}</p>
                        <button onClick={() => removecard(val.id)} className='bord'>X</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Card

