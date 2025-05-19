import React from 'react' 
import ProductCard from './ProductCard'

function Header() {
    return (
        <div>
            <h1 className='flex justify-center mt-10 text-3xl bg-red-500 p-3'>Product listing app</h1>
            <ProductCard/>
        </div>
    )
}

export default Header

 