import SkillBar from '../components/SkillBar';

const Habilidades = () => {
  return (
    <main className="container" style={{ padding: '3rem' }}>
      <section className="intro-box-left">
        <h1>Mis habilidades</h1>

        <h2 className="section-subtitle">Lenguajes de Programacion</h2>
        <SkillBar name="Java" percentage={70} years={2} />
        <SkillBar name="JavaScript" percentage={65} years={1.5} />
        <SkillBar name="C#" percentage={75} years={2} />

        <h2 className="section-subtitle">Frontend</h2>

        <SkillBar name="React" percentage={75} years={1} />
        <SkillBar name="React Native" percentage={70} years={1} />
        <SkillBar name="Tailwind" percentage={65} years={1} />
        <SkillBar name="Bootstrap" percentage={75} years={1} />
        <SkillBar name="Photoshop" percentage={45} years={0.5} />

        <h2 className="section-subtitle">Backend</h2>

        <SkillBar name="Node.js" percentage={80} years={1} />
        <SkillBar name=".NET" percentage={80} years={1} />
        <SkillBar name="Springboot" percentage={70} years={1} />
        <SkillBar name="Docker" percentage={75} years={2} />
        <SkillBar name="PostgreSQL" percentage={65} years={1} />
      </section>
    </main>
  );
};

export default Habilidades; 

