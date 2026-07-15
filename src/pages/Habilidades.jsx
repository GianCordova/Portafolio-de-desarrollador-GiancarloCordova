import SkillBar from '../components/SkillBar';
import { skillIcons } from '../utils/skillIcons';

const Habilidades = () => {
  const skillsByCategory = {
    lenguajes: [
      { name: "Java", percentage: 70, years: 2 },
      { name: "JavaScript", percentage: 65, years: 1.5 },
      { name: "C#", percentage: 75, years: 2 },
      { name: "TypeScript", percentage: 60, years: 0.8 }
    ],
    frontend: [
      { name: "React", percentage: 75, years: 1 },
      { name: "React Native", percentage: 70, years: 1 },
      { name: "Tailwind", percentage: 65, years: 1 },
      { name: "Bootstrap", percentage: 75, years: 1 },
      { name: "CSS/SCSS", percentage: 80, years: 1.5 }
    ],
    backend: [
      { name: "Node.js", percentage: 80, years: 1 },
      { name: ".NET", percentage: 80, years: 1 },
      { name: "Springboot", percentage: 70, years: 1 },
      { name: "Docker", percentage: 75, years: 2 },
      { name: "PostgreSQL", percentage: 65, years: 1 }
    ]
  };

  const getTopSkills = () => {
    const allSkills = [
      ...skillsByCategory.lenguajes,
      ...skillsByCategory.frontend,
      ...skillsByCategory.backend
    ];
    return allSkills.sort((a, b) => b.percentage - a.percentage).slice(0, 5);
  };

  const getIcon = (skillName) => skillIcons[skillName] || null;

  return (
    <main className="container">
      <section className="intro-box-left">
        <h1>Mis habilidades</h1>
        <p>Conjunto de tecnologías y lenguajes en los que he desarrollado experiencia durante mi formación profesional.</p>

        {/* Top Skills Card */}
        <div className="top-skills-card">
          <h3>Top 5 Habilidades</h3>
          <div className="top-skills-list">
            {getTopSkills().map((skill, index) => {
              const IconComponent = getIcon(skill.name);
              return (
                <div key={index} className="top-skill-item">
                  <span className="rank">#{index + 1}</span>
                  {IconComponent && <IconComponent className="top-skill-icon" />}
                  <div className="skill-info">
                    <p className="skill-name">{skill.name}</p>
                    <div className="mini-bar">
                      <div className="mini-fill" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>
                  <span className="skill-percent">{skill.percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lenguajes */}
        <div className="skills-section">
          <h2 className="section-subtitle">Lenguajes de Programación</h2>
          <div className="skills-grid">
            {skillsByCategory.lenguajes.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name} 
                percentage={skill.percentage} 
                years={skill.years}
                icon={getIcon(skill.name)}
              />
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="skills-section">
          <h2 className="section-subtitle">Frontend</h2>
          <div className="skills-grid">
            {skillsByCategory.frontend.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name} 
                percentage={skill.percentage} 
                years={skill.years}
                icon={getIcon(skill.name)}
              />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="skills-section">
          <h2 className="section-subtitle">Backend & Infraestructura</h2>
          <div className="skills-grid">
            {skillsByCategory.backend.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name} 
                percentage={skill.percentage} 
                years={skill.years}
                icon={getIcon(skill.name)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Habilidades;