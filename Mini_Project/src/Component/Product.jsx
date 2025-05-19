import React, { useState } from 'react';
import { product } from '../data/product';
import { FaCartShopping } from "react-icons/fa6";
import Card from './Card';
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";



function Product(props) {
  const [filteredProducts, setFilteredProducts] = useState(product);
  const [cartItems, setCartItems] = useState([]);
  const [cartvalue, setcart] = useState(false)
  // const [counter, setcounter] = useState(0);
  const [mode, setMode] = useState('light');

  const filterCategory = (category) => {
    if (category === "All") {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter(item => item.category === category);
      setFilteredProducts(filtered);
    }
  };

  const addcart = (product) => {
    setCartItems([...cartItems, product])
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

  // const handleclick = (id) => {
  //   const updated = cartItems.map(item =>
  //     item.id === id ? { ...item, count: item.count + 1 } : item
  //   );
  //   setCartItems(updated);
  // };

  // const handleclick2 = (id) => {
  //   const ubgreat = cartItems.map((them) => 
  //     them.id === id ? {...them , count: them.count - 1} : them
  //   );
  //   setcounter(ubgreat)
  // }

  //  const light = () => {
  //   setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  // };


  const light = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      console.log("light white")
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      console.log("light black")
      setMode("light");
    }
  };


  return (
    <>
      <header>
        <div className='flex justify-between bg-amber-500 p-3'>
          <h1 className='text-4xl font-bold'>Product List</h1>

          {<div className='flex gap-1'>
            {mode === "light" ? <button onClick={light} className='text-2xl cursor-pointer'><IoMdSunny /></button> :
              <button onClick={light} className='text-2xl cursor-pointer'><IoMoon /></button>}
          </div>}


          <button onClick={() => setcart(value => (!value))} className='flex'>
            <FaCartShopping className='text-5xl' />

            <span className='text-xs bg-red-700 w-5 h-5 rounded-2xl'>{cartItems.length}</span>
          </button>
          <button className='bg-red-600 text-white border-red p-1 rounded' onClick={props.logout}>Logout</button>

        </div>
        <div>
          {cartvalue && <div className='absolute top-20 right-5 bg-gray-300 p-2 '>
            <Card add={cartItems} setadd={setCartItems} />
            <div className='flex justify-around'>
              <div className='mt-10 flex gap-20'>
                <b>Price:-{totalPrice}</b>
              </div>
              <div className='flex mt-10 gap-10 text-2xl'>
                <button onClick={() => handleclick} className='cursor-pointer'>+</button>
                <button className='cursor-pointer'></button>
                <button onClick={() => handleclick2} className='cursor-pointer'>-</button>
              </div>

            </div>
          </div>}
        </div>
      </header>

      <div className='flex justify-center mt-6'>
        <select
          className='bg-fuchsia-400 p-2 w-40'
          onChange={(e) => filterCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="lamborghini">lamborghini</option>
          <option value="BMW">BMW</option>
          <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
          <option value="bugatti">bugatti</option>
        </select>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10'>
        {filteredProducts.map((item, i) => (
          <div key={i} className='border p-5 shadow rounded'>
            <img src={item.img} alt={item.name} className='w-full h-48 object-contain' />
            <p className='text-xl font-semibold mt-2'>{item.name}</p>
            <p className='text-gray-500 '>{item.price}</p>
            <button onClick={() => addcart(item)} className='mt-3 bg-green-400 px-4 py-1 rounded hover:bg-green-500 transition'>
              {item.btn}
            </button>
          </div>
        ))}
      </div>

    </>
  );
}

export default Product;




