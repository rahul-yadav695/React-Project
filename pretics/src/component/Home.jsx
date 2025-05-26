import React, { useState } from 'react'



const Home = (props) => {
    const [cart,setCart] = useState([]);



  return (
    <div>
      <h1>hello</h1>

      <div className='ss'>
        {
            props.data.map((data)=>
            <div>
                <p>{data.name}</p>
                <p>{data.price}</p>
                <button onClick={()=>{
                    if(!cart.find((items)=>items.id===data.id)){
                        let upadted = [...cart,{...data}]
                        setCart(upadted)
                    }else{
                        alert("product is already save")
                    }
                }}>add to cart</button>
            </div>
            )
        }
      </div>

      <div>
        {cart.map((item)=>
        <div>
          <h1>{item.name}</h1>
        <h1>{item.price}</h1>
        </div>
        )}
      </div>
    </div>
  )
}

export default Home
