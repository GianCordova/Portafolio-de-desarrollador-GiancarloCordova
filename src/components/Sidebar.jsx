import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button (solo en mobile) */}
      <button className="hamburger-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay (cuando el sidebar está abierto) */}
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title">Giancarlo C.</h2>
        
        <nav>
          <Link 
            to="/" 
            className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            Inicio
          </Link>
          
          <Link 
            to="/about" 
            className={`menu-item ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            Sobre mí
          </Link>
          
          <Link 
            to="/portafolio" 
            className={`menu-item ${location.pathname === '/portafolio' ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            Portafolio
          </Link>
          
          <Link 
            to="/educacion" 
            className={`menu-item ${location.pathname === '/educacion' ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            Educación
          </Link>
          
          <Link 
            to="/habilidades" 
            className={`menu-item ${location.pathname === '/habilidades' ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            Habilidades
          </Link>
          
          <Link 
            to="/contacto" 
            className={`menu-item ${location.pathname === '/contacto' ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            Contacto
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;