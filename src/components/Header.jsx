import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Logo1 from "../images/Logo1.svg";


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
        <img src={Logo1} alt="Logo" width="150" />
      </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/servicios">SERVICIOS</Link>
        </li>
        <li>
          <Link to="/nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link to="/contacto">CONTACTO</Link>
        </li>
        <li>
          <Link to="/productos">TIENDA</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
