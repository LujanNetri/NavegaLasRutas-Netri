import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import './App.css'

function App() {
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (quantity) => 
  {
    setTotalItems((prev) => prev + parseInt(quantity));
  };

  return (
    <BrowserRouter>
      <NavBar totalItems ={totalItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:gender" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
