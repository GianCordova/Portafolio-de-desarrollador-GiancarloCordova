import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sidebar from './components/Sidebar';
import SobreMi from './pages/SobreMi';
import Portafolio from './pages/Portafolio';
import Galeria from './pages/Galeria';  // NUEVO
import Contacto from './pages/Contacto';
import Educacion from './pages/Educacion';
import Habilidades from './pages/Habilidades';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/about" element={<SobreMi />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/galeria" element={<Galeria />} />  
            <Route path="/educacion" element={<Educacion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/habilidades" element={<Habilidades/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;