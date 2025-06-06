import React, { useEffect, useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import Tostify from './Tostify';

const Home = ({ message, setLogin }) => {
  const products = [
    { id: 10, name: "Lamborghini Huracán", price: 320000, image: "https://i.ytimg.com/vi/MG4AAcV9Pc0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDN_0jWQ5wpqcSgJ2QgYKvDwW_Dmw", category: "Mercedes AMG GT" },
    { id: 6, name: "Tesla Model S", price: 85000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAntqH2b6A_JaN7aF-duyrxkDMr9sQA5yzQ&s", category: "Tesla" },
    { id: 7, name: "BMW i8", price: 140000, image: "https://images.cardekho.com/images/carNewsimages/carnews/BMW/BMW-i8_2015_07.jpg", category: "BMW" },
    { id: 8, name: "Audi R8", price: 220000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2Ypd8CU3N6Y8bHUOP5IaB1SQK4U-bcZ49w&s", category: "BMW" },
    { id: 9, name: "Mercedes AMG GT", price: 180000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf45v6yRIn9gPlsiaCcUT5HUK-zxRA93Eu4w&s", category: "Mercedes AMG GT" },
    { id: 3, name: "Speaker", price: 199, image: "https://images-cdn.ubuy.co.in/65a3f902b22d436c02334a0d-njsj-computer-speakers-with-subwoofer.jpg", category: "Speaker" },
    { id: 1, name: "Headphones", price: 299, image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702214609/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/303326_br0twi.png", category: "Headphones" },
    { id: 2, name: "Smart Watch", price: 499, image: "https://m.media-amazon.com/images/I/6199ZpjY0GL._AC_UF1000,1000_QL80_.jpg", category: "Smart Watch" },
    { id: 4, name: "Gaming Mouse", price: 149, image: "https://www.jiomart.com/images/product/original/rvtrhnivcx/rpm-euro-games-usb-wireless-gaming-mouse-rechargeable-500-mah-battery-dpi-upto-3200-6-color-rgb-lights-rubber-coated-mice-black-product-images-orvtrhnivcx-p594809527-0-202210261818.jpg?im=Resize=(1000,1000)", category: "Gaming Mouse" },
    { id: 5, name: "Charger", price: 99, image: "https://rukminim2.flixcart.com/image/850/1000/l2w7b0w0/battery-charger/k/g/e/fast-type-c-charger-for-oppo-a74-5g-oppo-a-74-5g-charger-121-original-image4rfzjhx2tzj.jpeg?q=90&crop=false", category: "Charger" }

  ];


  const [cart, setcart] = useState([]);
  const [slider, setslider] = useState(false);
  const [slected, setslected] = useState("All")



  const Addubdate = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      const values = [...cart, { ...product, quantity: 1 }];
      setcart(values);
    } else {
      const ubdateValue = [...cart];
      ubdateValue[index].quantity += 1;
      setcart(ubdateValue);
    }
  };

 
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setcart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  const handleLogout = () => {
    if (cart.length > 0) {
      alert("Please remove all cart !");
    }
    localStorage.removeItem('cart');
    localStorage.removeItem('login');
    setLogin(false);
    alert('Log out successfully');
  };

  // useEffect=(()=>{
  //   const ubdatecart = JSON.parse(localStorage.getItem("party"))
  // },[])

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  // const handleClick = () => {
  //   const result = category === "All"? cart : cart.filter(item => item.category === category);
  //   setslected(result);
  // };


  const result = slected === "All" ? products : products.filter
    (item => item.category === slected);
  return (
    <>

      {message && <Tostify message={message} />}
      <div className='relative'>
        <div className='flex justify-between bg-indigo-600 p-5 text-white'>
          <b className='text-4xl'>Product List</b>
          <b className='text-5xl cursor-pointer' onClick={() => setslider(!slider)}><BsCart3 /></b>
        </div>

        <section className='flex gap-60 mt-10'>
          <select className='bg-cyan-400 w-40 p-2 ml-220 cursor-pointer' onChange={(e) => setslected(e.target.value)}>
            <option value="All">All Products</option>
            <option value="Headphones">Headphones</option>
            <option value="Smart Watch">Smart Watch</option>
            <option value="Speaker">Speaker</option>
            <option value="Gaming Mouse">Gaming Mouse</option>
            <option value="Charger">Charger</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes AMG GT">Mercedes AMG GT</option>
            <option value="Tesla">Tesla</option>
          </select>
          <button onClick={handleLogout} className='bg-red-500 w-30 h-10 rounded-2xl cursor-pointer'>Log Out</button>
        </section>


        {slider && (
          <div className='absolute top-25 bg-white p-5 border-2 right-10 w-70 h-110 overflow-scroll'>
            <h2 className='font-bold mt-3 transform-3d ml-16 p-1 text-2xl italic'>Your Cart</h2> <hr /> <br />
            {cart.length === 0 ? (
              <p>No items</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className='mb-3 border-b pb-2'>
                  <img className='w-full h-32 object-contain rounded' src={item.image} alt={item.name} />
                  <p className='font-semibold'>{item.name}</p>
                  <p className='font-bold'>${item.price}</p>
                  <p>{item.quantity}</p>

                </div>
              ))
            )}
            <p className='font-bold'>totalPrice:-${totalPrice}</p><hr />
          </div>
        )}

        <div className='grid grid-cols-3 mt-5 p-5 gap-5'>
          {result.map((items) => (
            <div key={items.id} className='border-2 p-5'>
              <img className='w-full h-80 object-contain' src={items.image} alt="" />
              <div className='p-1 '>
                <p>{items.name}</p>
                <p className='font-bold '>${items.price}</p>
                <button onClick={() => Addubdate(items)} className='bg-cyan-600 p-2 mt-3 text-white cursor-pointer'>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
