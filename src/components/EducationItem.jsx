const EducationItem = ({ title, institucion, date, description, tags }) => {
  return (
    <div className="edu-card" style={{ 
      borderLeft: '4px solid var(--brown-red)', 
      paddingLeft: '1rem', 
      marginBottom: '2rem' 
    }}>
      <h3 style={{ color: 'var(--white)' }}>{title}</h3>
      
      <p style={{ color: 'var(--ash-grey)', fontWeight: 'bold' }}>
        {institucion} | {date}
      </p>
      
      <p style={{ marginTop: '0.5rem', color: 'var(--white)' }}>
        {description}
      </p>
      
      <div style={{ marginTop: '0.5rem' }}>
        {tags.map((tag, index) => (
          <span key={index} style={{ 
            background: 'var(--brown-red)', 
            color: 'var(--white)', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            marginRight: '5px',
            fontSize: '0.8rem' 
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationItem;