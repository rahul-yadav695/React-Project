import React from 'react' 
const Product = (props) => {
  return (
    <>
    
      <div> 
        {props.data.map((item) =>
           <div>
            <p>{item.id}</p>
            <p>{item.name}</p>
        </div>)}
      </div>
    </>
  )
}

export default Product
