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
        <Route path="/producto/:id" element={<ProductosDetalles />} />
{/* NO DETECTA LA RUTA DE "/producto/id", PROBE CON VERSIONES ANTERIORES DE REACT Y CON "SWITCH" SÍ FUNCIONA:
src/images/Screenshot from 2022-07-17 10-20-45.png  */}
      </Routes>
    </section>
  );
}
