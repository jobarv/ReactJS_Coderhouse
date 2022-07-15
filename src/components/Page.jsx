import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import { Servicios } from "./page/sections/servicios";
import { Nosotros } from "./page/sections/nosotros";
import { Contacto } from "./page/sections/contacto";

export default function Page() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<ProductosList />} />
        <Route path="/productos/id:" element={<ProductosDetalles />} />
      </Routes>
    </section>
  );
}
