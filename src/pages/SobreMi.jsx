import { 
  FaCode, 
  FaBullseye, 
  FaUser, 
  FaGraduationCap,
  FaBriefcase,
  FaCalendar
} from 'react-icons/fa';
import InfoCard from '../components/InfoCard';

const SobreMi = () => {
  return (
    <main className="container">
      <section id="sobre-mi" className="intro-box-left">
        {/* Header */}
        <div className="about-header">
          <h1>Hola, soy Giancarlo Cordova</h1>
          <p className="about-subtitle">Programador Jr. de desarrollo Full Stack</p>
          <p className="about-intro">
            Estudiante apasionado por la programación y desarrollo de soluciones digitales innovadoras.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="quick-facts">
          <div className="fact">
            <FaCalendar className="fact-icon" />
            <div>
              <p className="fact-label">Edad</p>
              <p className="fact-value">18 años</p>
            </div>
          </div>
          <div className="fact">
            <FaGraduationCap className="fact-icon" />
            <div>
              <p className="fact-label">Formación</p>
              <p className="fact-value">Perito Técnico</p>
            </div>
          </div>
          <div className="fact">
            <FaBriefcase className="fact-icon" />
            <div>
              <p className="fact-label">Especialidad</p>
              <p className="fact-value">Full Stack</p>
            </div>
          </div>
        </div>

        {/* Sobre mí */}
        <div className="about-section">
          <h2 className="section-subtitle">
            <FaUser className="section-icon" />
            Sobre mí
          </h2>
          <p>
            Soy Giancarlo Sebastian Cordova Garcia, estudiante de Perito en Informática en Fundación Kinal. 
            Desde que entré en 2023, he aprendido muchas cosas sobre el mundo de la programación, cómo funciona, 
            lenguajes, aplicaciones, tecnología, etc. Pero también me estoy terminando de formar como una persona 
            profesional tanto en lo laboral como en lo ético.
          </p>
          
          <p>
            Decidí estudiar algo técnico por las oportunidades que brinda; me incliné por Informática ya que paso 
            buena parte del tiempo en la computadora y porque siempre tuve la idea de que la tecnología sería la 
            novedad del futuro.
          </p>
        </div>

        {/* Desarrollo Técnico */}
        <div className="about-section">
          <h2 className="section-subtitle">
            <FaCode className="section-icon" />
            Desarrollo técnico
          </h2>
          <p>
            A lo largo de mi formación, he consolidado una base técnica sólida en desarrollo web y de software. 
            Cuento con experiencia trabajando en el stack MERN (React, Node.js), así como en el entorno .NET con C#. 
            Complemento esto con JavaScript, HTML, CSS, Bootstrap y Tailwind para crear interfaces funcionales y modernas.
          </p>
          
          <div className="tech-highlights">
            <div className="tech-item">
              <span className="tech-badge">Frontend</span>
              <p>React, React Native, Tailwind, Bootstrap</p>
            </div>
            <div className="tech-item">
              <span className="tech-badge">Backend</span>
              <p>.NET, Node.js, SQL, PostgreSQL</p>
            </div>
            <div className="tech-item">
              <span className="tech-badge">Herramientas</span>
              <p>Git, Docker, Vite, REST APIs</p>
            </div>
          </div>
        </div>

        {/* Metas y Aspiraciones */}
        <div className="about-section">
          <h2 className="section-subtitle">
            <FaBullseye className="section-icon" />
            Metas y Aspiraciones
          </h2>
          
          <div className="goals-container">
            <InfoCard title="Objetivo Profesional">
              <p>
                Ser una persona comprometida con mi labor, aportando mis capacidades y experiencia en diversos 
                proyectos para ganar experiencia y crecer en la gestión de proyectos de mayor envergadura.
              </p>
            </InfoCard>

            <InfoCard title="Objetivo Personal">
              <p>
                Ser una persona ejemplar para los demás, alguien en quien puedan apoyarse. Lograr un equilibrio 
                entre mi vida personal y laboral para tener una buena calidad de vida, aprendiendo constantemente.
              </p>
            </InfoCard>
          </div>
        </div>

        {/* Detalles Generales */}
        <div className="about-section">
          <h2 className="section-subtitle">Información General</h2>
          <div className="bio-details">
            <div className="detail-item">
              <span className="detail-label">Institución</span>
              <span className="detail-value">Fundación Kinal</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Carrera</span>
              <span className="detail-value">Perito en Informática</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Enfoque</span>
              <span className="detail-value">Desarrollo Web & Software</span>
              <span className="detail-value">Ingeniería en Ciberseguridad (En un futuro)</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Ubicación</span>
              <span className="detail-value">Zona 4 de Mixco, Cdad. de Guatemala</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SobreMi;