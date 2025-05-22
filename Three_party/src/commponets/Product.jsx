import React from 'react'
import { product } from '../data/product'

const Product = () => {
    return (
        <> 
            <div className='grid grid-cols-3'>
                {product.map((val)=>{
                    return(
                        <p>{val.name}</p>,
                        <p>{val.category}</p>,
                        <img className='w-100 h-50 object-cover mt-10 ' src={val.img} />
                    )
                })}
            </div>
         </>
    )
}

export default Product

