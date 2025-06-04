import { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import Home from './component/Home';
import DefaultPage from './component/DefaultPage'

import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (login === true) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [login]);

  return (
    <Routes>
      <Route path='*' element={<DefaultPage/>}/>
      <Route path='/login' element={<Form login={login} setLogin={setLogin} />} />
      <Route path='/home' element={<Home />} />

    </Routes>
  );
}

export default App;







  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   if (storedCart) {
  //     setcart(JSON.parse(storedCart));
  //   }
  // }, []);
 
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);



  // const handleLogout = () => {
  //   if (cart.length > 0) {
  //     alert("Please remove all items from the cart before logging out.");
  //     return;
  //   }
  //   localStorage.removeItem('cart');
  //   localStorage.removeItem('login');
  //   setLogin(false);
  //   alert('Logged out successfully');
  // };
