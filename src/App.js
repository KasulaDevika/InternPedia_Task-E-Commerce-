
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Components/Shop'
import Haircare from './Components/Haircare'
import Cosmetics from './Components/Cosmetics';
import Login from './Components/Login';
import Skincare from './Components/Skincare';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cosmetics' element={<Cosmetics />} />
          <Route path='/haircare' element={<Haircare/>} />
          <Route path='/skincare' element={<Skincare />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
