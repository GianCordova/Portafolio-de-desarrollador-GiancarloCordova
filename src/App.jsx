import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/about" element={<SobreMi />} />
            {/* Agrega aquí tus nuevas rutas */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;