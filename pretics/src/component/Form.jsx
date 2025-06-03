import React, { useState } from 'react';
import Home from '../component/Home';
import Tostify from './Tostify';
import Product from '../component/Product'

const Form = (props) => {
  const [page, setPage] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(null);

  const logout = () => {
    setPage(false);
  };

  const restart = (e) => {
    e.preventDefalt();
    if (name === '' || name.length <= 5 || password === '' || password.length <= 6) {
      setShow('Please check name and password!');
    } else {
      setPage(true);
      setShow('Congratulations, you won!');
      props.setLogin(true)
    }
    setTimeout(() => setShow(null), 4000);
  };

  return (
    <div>
      {props.login === false ? <form onSubmit={restart} className='w-70 h-80 border-2 p-10 ml-20 mt-20'>
        <div style={{ marginBottom: '15px' }}>
          <label>Name</label><br />
          <input className='border-2 w-50 p-2 rounded-2xl' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name"
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label><br />
          <input className='border-2 w-50 p-2 rounded-2xl' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password"
          />
        </div>
        <button className='bg-cyan-500 w-30 h-10 rounded-2xl cursor-pointer' type="submit">
          Submit
        </button>
      </form>
        : <Home />
      }
    </div>
  );
};

export default Form;
