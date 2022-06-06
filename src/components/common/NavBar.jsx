import NavBarOptions from '../helpers/NavBarOptions.jsx';
import logo from "../../assets/img/Logo1.svg";

const NavBar = () => (
  <div className="Nav-Bar">
    <img src={logo} className="logo" alt="logoBD" />

      <ul className='NavLink'>
        <a href="">
          <NavBarOptions seccion={'Inicio'}></NavBarOptions>
        </a>
        <a href="">
          <NavBarOptions seccion={'Nosotros'}></NavBarOptions>
        </a>
        <a href="">
          <NavBarOptions seccion={'Servicios'}></NavBarOptions>
        </a>
        <a href="">
          <NavBarOptions seccion={'Contacto'}></NavBarOptions>
        </a>
        <a href="">
          <NavBarOptions seccion={'Tienda'}></NavBarOptions>
        </a>
      </ul>
    </div>
);

export default NavBar;