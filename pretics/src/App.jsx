import './App.css';
import Home from './component/Home';
import Form from './component/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
