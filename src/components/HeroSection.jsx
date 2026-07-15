import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portafolio-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hola, soy Giancarlo Cordova</h1>
        <p className="hero-subtitle">Programador Jr. de desarrollo Full Stack</p>
        
        <p className="hero-description">
          Estudiante de Perito en Informática en Fundación Kinal, 
          apasionado por crear soluciones web modernas y funcionales.
        </p>

        <div className="hero-cta">
          <a href="/about" className="btn-secondary">
            Sobre mí
          </a>
          <a href="/portafolio" className="btn-secondary">
            Ver mi portafolio
          </a>
        </div>
      </div>

      <div className="hero-quote">
        <blockquote>
          "La simplicidad es la máxima sofisticación."
        </blockquote>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <h3>3+</h3>
          <p>Proyectos</p>
        </div>
        <div className="stat">
          <h3>+5</h3>
          <p>Tecnologías</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Dedicación</p>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;