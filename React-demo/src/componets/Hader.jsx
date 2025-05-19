// import React from 'react'

// function Hader() {
//   return (
//     <div>
//         <h1 className=' mt-10 text-3xl flex justify-center'>Social Media App</h1>
//     </div>
//   )
// }

// export default Hader





import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 1.0 },
  { id: 3, name: 'Orange', price: 2.0 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if product already exists in the cart
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      // Increase quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="mb-6">
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <span>{product.name} - ${product.price.toFixed(2)}</span>
            <button
              onClick={() => addToCart(product)}
              className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} (${(item.price * item.quantity).toFixed(2)})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
