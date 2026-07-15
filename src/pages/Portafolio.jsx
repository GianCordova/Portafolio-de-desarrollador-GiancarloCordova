import ProjectCard from '../components/ProjectCard';
import sistemaBancario from '../assets/proyecto-banco.jpg';  // Ajusta el nombre
import sistemRestaurante from '../assets/proyecto-banco.jpg';  // Ajusta el nombre
import portafolioImg from '../assets/proyecto-banco.jpg';  // Ajusta el nombre

const Portafolio = () => {
  const proyectos = [
    {
      title: "Sistema Bancario (Full Stack)",
      stack: "React, Node.js, Express, PostgreSQL",
      description: "Sistema integral para la gestión de transacciones bancarias, manejo de cuentas de usuarios y seguridad mediante JWT. Enfocado en la optimización de consultas a bases de datos y una UI intuitiva.",
      image: sistemaBancario,
      githubLink: "https://github.com/Ban-K-GT",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"]
    },
    {
      title: "Sistema Restaurante (Full Stack)",
      stack: "React, Node.js, Express, PostgreSQL",
      description: "Sistema para la gestión de un restaurante, manejo de cuentas de usuarios y seguridad mediante JWT. Enfocado en la optimización de consultas a bases de datos y una UI intuitiva.",
      image: sistemRestaurante,
      githubLink: "https://github.com/Pasto-Kinaliani",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Gestión de inventario"]
    },
    {
      title: "Portfolio Académico",
      stack: "React, Vite, CSS Grid",
      description: "Proyecto personal diseñado para documentar mi trayectoria técnica. Aplicación de buenas prácticas de modularidad, uso de componentes de React y despliegue continuo.",
      image: portafolioImg,
      githubLink: "https://github.com/GianCordova/Portafolio-de-desarrollador-GiancarloCordova",
      technologies: ["React", "Vite", "CSS Grid", "React Router"]
    }
  ];

  return (
    <main className="container">
      <section id="portafolio" className="intro-box-left">
        <h1>Proyectos destacados</h1>
        <p>Aquí presento una selección de los trabajos en los que he aplicado mis conocimientos en desarrollo web y gestión de software.</p>

        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <ProjectCard 
              key={index} 
              {...proyecto}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portafolio;