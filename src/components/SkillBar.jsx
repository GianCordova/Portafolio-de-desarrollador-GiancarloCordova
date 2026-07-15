const SkillBar = ({ name, percentage, years, icon: Icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-name-section">
          {Icon && <Icon className="skill-icon" />}
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      
      <div className="skill-bar-container">
        <div 
          className="progress-fill" 
          style={{ '--width': `${percentage}%` }}
        ></div>
      </div>
      
      <p className="skill-experience">
        {years} año{years > 1 ? 's' : ''} de experiencia
      </p>
    </div>
  );
};

export default SkillBar;