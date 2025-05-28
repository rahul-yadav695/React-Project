import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";

const Home = () => {
  const products = [
    { id: 1, name: "Headphones", price: 2999, image: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=" },
    { id: 2, name: "Smart Watch", price: 4999, image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { id: 3, name: "Speaker", price: 1999, image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
    { id: 4, name: "Gaming Mouse", price: 1499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s" },
    { id: 5, name: "Charger", price: 999, image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" }
  ];

  const [cart, setcart] = useState([])
  const [slider, setslider] = useState(false)

  const addcart = (product) => {
    setcart([...cart, product])
  } 

  return (
    <>
      <div className='relative'>
        <div className='flex justify-between bg-indigo-600 p-5'>
          <b className='text-4xl'>Product List</b>
          <b className='text-5xl cursor-pointer'><BsCart3 /></b>
        </div>

        {cart && <div className='absolute top-25 bg-white p-5 border-2 right-10 w-70 h-110 overflow-scroll'>
            <h2 className='font-bold mt-3'>Your Cart</h2>
            {cart.length === 0 ? (
              <p>No items</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className='mb-3 border-b pb-2'>
                  <img className='w-full h-32 object-cover rounded' src={item.image} alt={item.name} />
                  <p className='font-semibold'>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              ))
            )}
          </div>
        }

        <div className='grid grid-cols-3 mt-5 p-5 gap-5'>
          {products.map((items) => <div className='border-2 p-5'>
            <img className='w-100 h-80 object-cover' src={items.image} alt="" />
            <div className='p-1 '>
              <p>{items.name}</p>
              <p>${items.price}</p>
              <button onClick={() => addcart(items)} className='bg-cyan-600 p-2 cursor-pointer'>Add to Cart</button>
            </div>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default Home
