import React from 'react'
import Hader from './componets/Hader'
import Post1 from './componets/Post1'
import Post2 from './componets/Post2'
import Post3 from './componets/Post3'
import SigninPage from './componets/SigninPage'

import Header from './componets/Header'

import User from './componets/User'
import Welcome from './componets/welcome'
import ProductCard from './componets/ProductCard'

function App() {


  // const todo = [
  //   {
  //     id : 1 ,
  //     title : 'This is a pers 1'
  //   },
  //   {
  //     id : 2 ,
  //     title : 'This is a pers 2'
  //   },
  //   {
  //     id : 3 ,
  //     title : 'This is a pers 3'
  //   },
  //   {
  //     id : 4 ,
  //     title : 'This is a pers 4'
  //   },
  //   {
  //     id : 5 ,
  //     title : 'This is a pers 5'
  //   },
  //   {
  //     id : 6 ,
  //     title : 'This is a pers 6'
  //   },
  // ]

  // let num  = false ;


  // const user = [
  //   {name:'Nitin' , age:23 , status:'active'},
  //   {name:'aman' , age:23 , status:'inactive'}
  // ]

  return (
    <div> 

      {/* <TodoList task={todo}/> */}
      {/* <Welcome num={num}/> */}

      {/* <User user= {user}/> */}

      <Header/> 

        <Hader />
      {/* <div className='grid grid-cols-3'>
        <Post1 img="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg" title="First title" />

        <Post2 img="https://i.pinimg.com/736x/2b/30/e9/2b30e9476db1ec0823c7142e0e5ef75a.jpg" title="Second Images" />

        <Post3 img="https://media.istockphoto.com/id/899748046/photo/orangutans.jpg?s=612x612&w=0&k=20&c=C97XcWZoGVWGfzCaZCdq3eSuGYNiwLq62si9-pqcFpk=" title="Three Pages" />
      </div>

      <SigninPage /> */}

      {/* <Hader /> */}
    </div>
  )
}

export default App