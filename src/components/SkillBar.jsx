const SkillBar = ({ name, percentage, years, description }) => {
  return (
    <div className="skill-card" style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
        <span style={{ fontWeight: 'bold', color: 'var(--white)' }}>{name}</span>
        <span style={{ color: 'var(--brown-red)' }}>{percentage}%</span>
      </div>
      
      <div style={{ background: '#21262d', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
        <div 
          className="progress-fill" 
          style={{ 
            '--width': `${percentage}%`, 
            background: 'linear-gradient(90deg, var(--brown-red), var(--chestnut))', 
            height: '100%' 
          }}
        ></div>
      </div>
      
      <p style={{ fontSize: '0.8rem', color: 'var(--ash-grey)', marginTop: '0.5rem' }}>
        {years} años de experiencia | {description}
      </p>
    </div>
  );
};

export default SkillBar;