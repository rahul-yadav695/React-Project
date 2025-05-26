import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";



const Product = ({ datas }) => {

    const [cart, setcart] = useState([])
    const [show, setshow] = useState(false)
    const [count, setcount] = useState(1);

    const increment = (id)=>{
        const numbers = cart.map((item)=>{
            if(item.id===id){
                return {...item, quantity:item.quantity+1}
            }
            return item
            // setcount(1)
        })
        setcount(numbers)
    }
    const addtocart = (items) => {
        const cartvalues = cart.find((btn) => btn.id === items.id)
        if (!cartvalues) {
            setcart([...cart, items])
        }else{
            setcount([...cart+1])
        }
    }


     const sideBar = ()=>{
        let sider = document.getElementById("sider-bar");
        sider.style.right = "0px";
        console.log("clcik");
        
     } 
      const sideBarof = ()=>{
        let sider = document.getElementById("sider-bar");
        sider.style.right = "-100%";
        console.log("clcik");
     }

    return (
        <>
            <div className='relative'>
                <div className='flex justify-between bg-amber-500 p-6'>
                    <b className='text-4xl'>Ptroduct Cart List</b>
                    <p className='text-5xl cursor-pointer' onClick={() => sideBar()}><FaCartShopping /></p>
                </div>

               { <div id='sider-bar' className='absolute  bg-white p-2 -right-96 h-100 overflow-hidden overflow-scroll'>
                <p onClick={()=>sideBarof()} className='text-2xl cursor-pointer  text-red-500 text-end p-3 '>X</p>
                    {cart.map((value) => <div className='w-50 h-50'>
                        <img src={value.img} alt="" />
                        <p>{value.name}</p>
                        <p>{value.price}</p>
                        <p>{value.quantity}</p>
                    </div>)}
                </div>}

               {/* {show && <div className='grid grid-cols-2 mt-10 ms-10'>
                    {cart.map((value) => <div>
                        <img className='w-80' src={value.img} alt="" />
                        <p>{value.name}</p>
                        <p className=''>{value.price}</p>
                    </div>)}
                </div>} */}

                <div className='grid grid-cols-3 p-10 gap-10'>
                    {datas.map((item) => <div>
                        <img className='w-100 h-100 object-contain' src={item.img} alt={item.category} />
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button onClick={() => addtocart(item)} className='bg-blue-600 p-3 mt-2 cursor-pointer'>add to cart</button>
                    </div>)}
                </div>

            </div>
        </>
    )
}

export default Product