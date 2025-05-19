import React, { Component, useState } from 'react';
import { products } from "../data/product";

function ProductCard() {
    let [FilterPro, ProductFilter] = useState(() => {
        return products.filter(e => e.name && e.img && e.id && e.price && e.category);
    });

    let handleFilter = (event) => {
        let Category = event.target.value;
        let filtered = products.filter(a => {
            if (Category === "All") {
                return true;
            }
            return a.category?.toLowerCase() === Category.toLowerCase();
        });
        ProductFilter(filtered);
    };

   

    return (
        <> 
            <div>
                <select
                    className='ms-10 mt-10 bg-amber-300' name='' id='select' onChange={handleFilter}
                >
                    <option value="All">All</option>
                    <option value="Cars">Cars</option>
                    <option value="Bike">Bike</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Headphone">Headphone</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>

            <div className='mt-40 grid grid-flow-col grid-rows-2 gap-20 '>
                {FilterPro.map((value) => (
                    <div className='border-1 p-5' key={value.id}>
                        <img className='w-100 h-80' src={value.img} alt="" />
                        <div style={{ textAlign: "center" }}>
                            <p className='text-red-400'>Id:-{value.id}</p>
                            <p className='text-blue-700'>Name:-{value.name}</p>
                            <p className='text-amber-400'>Price:-{value.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductCard;