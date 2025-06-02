import './App.css';
import Home from './component/Home'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />} /> 
          {/* <Route path="/home" element={<Home logout={logout} message={message} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
