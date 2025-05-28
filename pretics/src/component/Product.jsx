import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ datas }) => {
    const [cart, setCart] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleClick = (product) => {
        const index = cart.findIndex((item) => item.id === product.id);
        if (index === -1) {
            setCart([...cart, { ...product, quantity: 1 }]);
        } else {
            const newCart = [...cart];
            newCart[index].quantity += 1;
            setCart(newCart);
        }
    };

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <div className="relative">
                <div className="flex justify-between bg-amber-500 p-6">
                    <b className="text-4xl">Product Cart List</b>
                    <div className="flex items-center text-5xl"><FaShoppingCart className="cursor-pointer" onClick={openSidebar} />
                        <p className="text-emerald-900 text-xl font-bold">{cart.length}</p>
                    </div>
                </div>

                <div id="sidebar" className={`fixed top-0 right-0 h-full w-80 bg-white p-4 shadow-lg transform transition-transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`} style={{ zIndex: 1000 }}>
                    <button onClick={closeSidebar} className="text-red-500 text-2xl font-bold float-right cursor-pointer">X</button>

                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                    {cart.length === 0 && <p>Your cart is empty</p>}

                    {cart.map((item) => (
                        <div key={item.id} className="flex space-x-4 mb-4 border-b pb-2 items-center">

                            <img src={item.img} alt={item.name} className="w-16 h-16 object-contain" />
                            <div className="flex-grow">
                                <p className="font-semibold">{item.name}</p>
                                <p>₹{item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 p-10 gap-10">
                    {datas.map((item) => (
                        <div key={item.id} className="border p-4 rounded shadow">
                            <img className="w-full h-48 object-contain" src={item.img} alt={item.category} />

                            <p>ID: {item.id}</p>
                            <p>{item.name}</p>
                            <p>₹{item.price}</p>
                            <button onClick={() => handleClick(item)} className="bg-blue-600 p-3 mt-2 text-white rounded cursor-pointer hover:bg-blue-700">Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Product;
