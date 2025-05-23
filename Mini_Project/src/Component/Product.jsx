import React, { useState } from 'react';
import { product } from '../data/product';
import { FaCartShopping } from "react-icons/fa6";
import Card from './Card';
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

function Product({ logout }) {
  const [filteredProducts, setFilteredProducts] = useState(product);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mode, setMode] = useState('light');

  
  const toggleTheme = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.body.style.transition = 'background-color 2.5s ease';
      setMode('dark');
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.body.style.transition = 'background-color 2.5s ease';
      setMode('light');
    }
  };

  const filterCategory = (category) => {
    setFilteredProducts(
      category === 'All'
        ? product
        : product.filter((item) => item.category === category)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const displayPrice = totalPrice.toLocaleString('en-IN');

  const handleAddToCart = (item) => {
    const exists = cartItems.some((cart) => cart.id === item.id);
    if (!exists) {
      setCartItems([...cartItems, item]);
    } else {
      alert('Item is already in the cart!');
    }
  };

  return (
    <div className="">
      <header className="flex justify-between items-center bg-amber-500 p-3 shadow-md">
        <h1 className="text-4xl font-bold">Product List</h1>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-2xl">
            {mode === 'light' ? <IoMdSunny /> : <IoMoon />}
          </button>

          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="relative text-3xl"
          >
            <FaCartShopping />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

          <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            onClick={logout}> Logout </button>
        </div>
      </header>

      {cartOpen && (
        <div className="absolute top-20 right-5 bg-gray-300 p-4 rounded shadow-lg z-10">
          <Card add={cartItems} setadd={setCartItems} />
          <div className="text-right mt-4 font-bold">
            Total: ₹{displayPrice}
          </div>
        </div>
      )}

      <div className="flex justify-center mt-6">
        <select
          className="bg-fuchsia-400 p-2 w-40 rounded"
          onChange={(e) => filterCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="lamborghini">Lamborghini</option>
          <option value="BMW">BMW</option>
          <option value="ROLLS-ROYCE">Rolls-Royce</option>
          <option value="bugatti">Bugatti</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 p-4">
        {filteredProducts.map((item) => (
          <div key={item.id} className="border p-5 shadow rounded bg-white dark:bg-gray-700">
            <img src={item.img} alt={item.name} className="w-full h-70 object-contain" />
            <p className="text-xl font-semibold mt-2">{item.name}</p>
            <p className="text-gray-500">₹{item.price}</p>
            <button onClick={() => handleAddToCart(item)} className="mt-3 bg-green-400 px-4 py-1 rounded hover:bg-green-500 transition"
            >
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Product;
