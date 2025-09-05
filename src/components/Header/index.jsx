import { NavLink } from 'react-router';
function Header() {
  return (
    <header>
      <NavLink to="/">Saïsana Khamvongsa</NavLink>
      <nav>
        <NavLink to="/" end className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-link">
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
