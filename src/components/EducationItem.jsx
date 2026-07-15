const EducationItem = ({ 
  title, 
  institucion, 
  date, 
  description, 
  tags,
  highlight // Para destacar el item más importante
}) => {
  return (
    <div className={`edu-item ${highlight ? 'highlighted' : ''}`}>
      <div className="edu-header">
        <h3 className="edu-title">{title}</h3>
        <span className="edu-date">{date}</span>
      </div>
      
      <p className="edu-institucion">{institucion}</p>
      
      <p className="edu-description">{description}</p>
      
      <div className="edu-tags">
        {tags.map((tag, index) => (
          <span key={index} className="edu-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationItem;