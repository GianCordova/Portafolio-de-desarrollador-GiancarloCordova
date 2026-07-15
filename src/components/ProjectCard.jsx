const ProjectCard = ({ 
  title, 
  stack, 
  description, 
  image, 
  githubLink, 
  technologies 
}) => {
  return (
    <div className="proyecto-card">
      {image && (
        <img src={image} alt={title} className="proyecto-image" />
      )}
      
      <h2 className="section-subtitle">{title}</h2>
      
      <p><strong>Stack:</strong> {stack}</p>
      <p>{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
      
      <a href={githubLink} target="_blank" rel="noreferrer" className="btn-github">
        Ver repositorio en GitHub →
      </a>
    </div>
  );
};

export default ProjectCard;