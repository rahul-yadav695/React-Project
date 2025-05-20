
import { IoLogIn } from 'react-icons/io5'
import Timer from './Component/Timer'
import SigninPage from './Component/Signin'
import Apis from './Component/Apis'
import Product from './Component/Product'
import { useEffect, useState } from 'react'


function App() {
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    setLogin(token)
  }, [isLogin])

  return (
    <>
      {/* <Header /> */}
      <Product/> 
      {/* <Timer /> */}
      {/* {!isLogin && <SigninPage />}
      {isLogin && <Apis />} */}
    </>
  )
}

export default App
