import React from 'react'

function welcome(props) {
    return (
      <div>
         {props.num===true ? <h1>welcome to next page</h1>: <h1>please log in</h1>}
      </div>
    )
  }
export default welcome