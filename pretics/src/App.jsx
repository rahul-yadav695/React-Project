import { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Home from './Home';
import Product from './Product';
import Todo from './Todo';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(false); 

  useEffect(() => {
    if (login) {
      useNavigate("/home");
    } else {
      useNavigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path='/login' element={<Form setLogin={setLogin} />} />
      {login && (
        <>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/todo' element={<Todo />} />
        </>
      )}
    </Routes>
  );
}

export default App;
