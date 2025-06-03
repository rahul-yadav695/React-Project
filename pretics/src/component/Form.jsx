import React, { useState } from 'react';
import Home from '../component/Home';
import Tostify from './Tostify';

const Form = (props) => {
  const [page, setPage] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(null);

  const logout = () => {
    setPage(false);
  };

  const restart = (e) => {
    e.preventDefault();
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
      {show && <Tostify message={show} />}

      {props.login === false ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form onSubmit={restart} className="bg-white shadow-lg rounded-2xl px-10 py-8 w-full max-w-md" >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>

            <div className="mb-5">
              <label className="block text-gray-600 font-semibold mb-2">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>

            <button type="submit" className="w-full bg-cyan-500 text-white py-2 rounded-xl font-semibold hover:bg-cyan-600 transition duration-300">Submit</button>
          </form>
        </div>
      ) : (
        <Home />
      )}
    </div>

  );
};

export default Form;
