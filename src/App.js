
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import NavBar from './components/common/NavBar';
// import ItemDetail from './components/common/ItemDetail';
import ItemDetailContainer from './components/common/ItemDetailContainer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Producto/:id" element={<ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
