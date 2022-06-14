
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import NavBar from './components/common/NavBar';
// import ItemCount from './components/common/ItemCount';
import ItemDetail from './components/common/ItemDetail';
import ItemDetailCointainer from './components/common/ItemDetailCointainer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Producto/:id" element={<ItemDetailCointainer />} />
          <Route path="/Nosotros" />
          <Route path="/Contacto" />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
