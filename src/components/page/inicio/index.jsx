import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/">
            <h1>Inicio</h1>
            </Link>
            <Link to="nosotros">
            <h1>Nosotros</h1>
            </Link>
            <Link to="servicios">
            <h1>Servicios</h1>
            </Link>
            <Link to="contacto">
            <h1>Contacto</h1>
            </Link>
            <Link to="/productos">
            <h1>Tienda</h1>
            </Link>
            <img src={Portada} alt=""/>
        </div>
    )
}
