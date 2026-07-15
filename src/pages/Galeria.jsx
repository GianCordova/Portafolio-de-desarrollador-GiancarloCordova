import sistemaBancario from '../assets/proyecto-banco.jpg';  // Ajusta el nombre
import sistemRestaurante from '../assets/proyecto-banco.jpg';  // Ajusta el nombre
import portafolioImg from '../assets/proyecto-banco.jpg';  // Ajusta el nombre

const Galeria = () => {
  const projects = [
    {
      title: "Sistema Bancario",
      image: sistemaBancario
    },
    {
      title: "Sistema Restaurante",
      image: sistemRestaurante
    },
    {
      title: "Portfolio Académico",
      image: portafolioImg
    }
  ];

  return (
    <main className="container">
      <section className="intro-box-left">
        <h1>Galería de Proyectos</h1>
        <p>Vista visual de los proyectos en los que he trabajado. Aquí puedes ver las interfaces y diseños implementados.</p>

        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-image-wrapper">
                <img src={project.image} alt={project.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <p className="gallery-title">{project.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Galeria;