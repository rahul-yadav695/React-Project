import { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import Home from './component/Home'; 
import Product from './component/Product';

import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(false); 
  const navgate = useNavigate()

  useEffect(() => {
    if (login) {
      navgate("/home");
    } else {
      navgate("/login");
    }
  }, [login , navgate]);

  return (
    <Routes>
      <Route path='/login' element={<Form login={login} setLogin={setLogin} />} /> 
        <>
          <Route path='/home' element={<Home />} />
          {/* <Route path='/product' element={<Product />} /> */}
          {/* <Route path='/todo' element={<Todo />} /> */}
        </> 
    </Routes>
  );
}

export default App;
