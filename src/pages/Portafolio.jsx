import ProjectCard from '../components/ProjectCard';
import sistemaBancario from '../assets/GestionBanco.png';

import sistemRestaurante from '../assets/GestionRestaurante.png';

import smartGrow from '../assets/SmartGrowGT.png';

import arcadeImg from '../assets/Kinal_Arcade.png';

const Portafolio = () => {
  const proyectos = [
    {
      title: "Sistema Bancario (Full Stack)",
      stack: "React, Node.js, Express, PostgreSQL",
      description: "Plataforma integral de gestión bancaria que permite a los usuarios administrar sus cuentas, realizar transacciones seguras y monitorear su historial financiero. Implementa autenticación mediante JWT, validación de datos robusta y optimización de consultas para garantizar rendimiento y seguridad en operaciones críticas.",
      image: sistemaBancario,
      githubLink: "https://github.com/Ban-K-GT",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Validación de datos", "Seguridad"]
    },
    {
      title: "Sistema de Gestión de Restaurante (Full Stack)",
      stack: "React, Node.js, Express, PostgreSQL",
      description: "Solución completa para la administración de restaurantes que gestiona pedidos, inventario y cuentas de usuarios. Incluye control de stock en tiempo real, asignación de roles (admin, meseros, cocina), reportes de ventas y seguridad mediante JWT. Diseñado para optimizar la eficiencia operativa y mejorar la experiencia del cliente.",
      image: sistemRestaurante,
      githubLink: "https://github.com/Pasto-Kinaliani",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Control de inventario", "Gestión de roles"]
    },
    {
      title: "SmartGrowGT (Full Stack)",
      stack: "React, Node.js, Raspberry Pi, PostgreSQL",
      description: "Plataforma de monitoreo agrícola que integra sensores con Raspberry Pi para recopilar datos en tiempo real sobre cultivos y condiciones ambientales. Permite a los agricultores gestionar múltiples parcelas, recibir alertas automáticas, analizar datos de crecimiento y optimizar recursos. Contribución significativa en arquitectura backend y gestión de datos IoT.",
      image: smartGrow,
      githubLink: "https://github.com/azacarias-dev/SmartGrowGT",
      technologies: ["React", "Node.js", "Dispositivo Raspberry Pi", "PostgreSQL", "Sensores"]
    },
    {
      title: "Kinal Arcade",
      stack: "Java, Apache NetBeans, POO",
      description: "Aplicación de mini arcade interactiva que integra múltiples juegos en una sola plataforma. Desarrollada hace un año con énfasis en experiencia del usuario y gestión de eventos. Incluye menú principal, diferentes juegos con mecánicas variadas, sistema de puntuaciones y interfaz gráfica atractiva. Demuestra dominio de programación orientada a objetos y desarrollo de aplicaciones de escritorio.",
      image: arcadeImg,
      githubLink: "https://github.com/JavierGomez0/Kinal_Arcade",
      technologies: ["Java", "Apache NetBeans", "POO", "Gráficos", "Gestión de eventos"]
    }
  ];

  return (
    <main className="container">
      <section id="portafolio-section" className="intro-box-left">
        <h1>Proyectos destacados</h1>
        <p>Aquí presento una selección de los trabajos en los que he aplicado mis conocimientos en desarrollo web. Cada proyecto refleja mi crecimiento como desarrollador.</p>

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