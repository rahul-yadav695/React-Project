import React, { useEffect, useState } from 'react'

const Apis = () => {
    const [apis , setapis] = useState()

    useEffect=()=>{
        let data = fetch('https://jsonplaceholder.typicode.com/posts')
        .then((ess)=> ess.json());
        then((ass)=>{
            console.log(ass)
            setapis(data)
        }).catch((err)=>{
            console.log('Something went wrong plz try again', err)
        })
    }
  return (
    <div>
      <h1>All items Maping </h1>
      {apis.map((post)=>{
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
      })}
    </div>
  )
}

export default Apis


