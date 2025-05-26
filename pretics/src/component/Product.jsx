import React from 'react' 
const Product = ({productData}) => {
  return (
    <>
     <div>
      {productData.map((item)=> <div>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>)}
     </div>
    </>
  )
}

export default Product
