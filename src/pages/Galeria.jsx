import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import sistemaBancario1 from '../assets/GestionBanco.png';

import sistemRestaurante1 from '../assets/GestionRestaurante.png';

import kinalarcade from '../assets/Kinal_Arcade.png';
import kinalarcade2 from '../assets/Kinal_Arcade2.png';
import kinalarcade3 from '../assets/Kinal_Arcade3.png';

import veterinaria1 from '../assets/ProyectoVeterinaria.png';
import veterinaria2 from '../assets/ProyectoVeterinaria2.png';

const Galeria = () => {
  const projects = [
    {
      title: "Sistema Bancario - 2026",
      images: [sistemaBancario1]
    },
    {
      title: "Sistema Restaurante - 2026",
      images: [sistemRestaurante1]
    },
    {
      title: "Kinal Arcade - 2026",
      images: [kinalarcade, kinalarcade2, kinalarcade3]
    },
    {
      title: "Proyecto Veterinaria - 2025",
      images: [veterinaria1, veterinaria2]
    }
  ];

  return (
    <main className="container">
      <section className="intro-box-left">
        <h1>Galería de Proyectos</h1>
        <p>Vista visual de los proyectos en los que he trabajado.</p>

        <div className="projects-gallery">
          {projects.map((project, projectIndex) => (
            <GalleryCarousel 
              key={projectIndex}
              title={project.title}
              images={project.images}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

// Componente para cada carrusel
const GalleryCarousel = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-project">
      <h2 className="section-subtitle">{title}</h2>
      
      <div className="gallery-carousel">
        <img 
          src={images[currentIndex]} 
          alt={`${title} ${currentIndex + 1}`} 
          className="gallery-carousel-image" 
        />
        
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="carousel-btn next" onClick={nextImage}>
              <FaChevronRight />
            </button>

            <div className="carousel-dots">
              {images.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>

            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Galeria;