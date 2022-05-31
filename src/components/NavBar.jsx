import logo from "../assets/img/Logo1.svg";

const NavBar = () => (
  <div className="Nav-Bar">
    <img src={logo} className="logo" alt="logoBD" />

    <div className="menu">
      <ul className='NavLink'>
        <a href="">
          <li>Inicio</li>
        </a>
        <a href="">
          <li>Nosotros</li>
        </a>
        <a href="">
          <li>Servicios</li>
        </a>
        <a href="">
          <li>Contacto</li>
        </a>
        <a href="">
          <li>Tienda</li>
        </a>
      </ul>
    </div>
  </div>
);
export default NavBar;
