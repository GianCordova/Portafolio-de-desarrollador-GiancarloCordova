import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Esto nos ayuda a saber en qué página estamos

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Giancarlo C.</h2>
      <nav>
        <Link to="/about" className={`menu-item ${location.pathname === '/about' ? 'active' : ''}`}>
          Sobre mí
        </Link>
        <Link to="/portafolio" className={`menu-item ${location.pathname === '/portafolio' ? 'active' : ''}`}>
          Portafolio
        </Link>
        <Link to="/educacion" className={`menu-item ${location.pathname === '/educacion' ? 'active' : ''}`}>
          Educación
        </Link>
        <Link to="/contacto" className={`menu-item ${location.pathname === '/contacto' ? 'active' : ''}`}>
          Contacto
        </Link>
        <Link to="/habilidades" className={`menu-item ${location.pathname === '/habilidades' ? 'active' : ''}`}>
          Habilidades
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;