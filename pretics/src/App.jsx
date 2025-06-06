import { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import Home from './component/Home';
import DefaultPage from './component/DefaultPage'
import Todo from './component/Todo'

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
      <Route path='/login' element={<Form login={login} setLogin={setLogin} />} />
      <Route path='*' element={<DefaultPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>

  );
}

export default App;


