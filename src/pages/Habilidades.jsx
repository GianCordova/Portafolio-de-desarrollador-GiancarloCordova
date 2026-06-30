import SkillBar from '../components/SkillBar';

const Habilidades = () => {
  return (
    <main className="container" style={{ padding: '3rem' }}>
      <section className="intro-box-left">
        <h1>Stack de habilidades</h1>

        <h2 className="section-subtitle">Lenguajes de Programacion</h2>
        <SkillBar name="Java" percentage={70} years={2} description="SPA/MPA, hooks, context, accesibilidad." />
        <SkillBar name="JavaScript" percentage={65} years={1.5} description="CSS utility-first, diseño responsivo." />
        <SkillBar name="C#" percentage={75} years={2} description="CSS utility-first, diseño responsivo." />

        <h2 className="section-subtitle">Frontend</h2>
        <SkillBar name="React" percentage={75} years={7} description="SPA/MPA, hooks, context, accesibilidad." />
        <SkillBar name="React Native" percentage={70} years={7} description="SPA/MPA, hooks, context, accesibilidad." />
        <SkillBar name="Tailwind" percentage={65} years={4} description="CSS utility-first, diseño responsivo." />
        <SkillBar name="Bootstrap" percentage={75} years={4} description="CSS utility-first, diseño responsivo." />
        <SkillBar name="Photoshop" percentage={45} years = {0.5 }description="Edicion de imagenes (inicio de curso incompleto)." />

        <h2 className="section-subtitle">Backend</h2>
        <SkillBar name="Node.js" percentage={90} years={7} description="REST/GraphQL, workers, colas, testing." />
        <SkillBar name=".NET" percentage={90} years={7} description="REST/GraphQL, workers, colas, testing." />
        <SkillBar name="Springboot" percentage={90} years={7} description="REST/GraphQL, workers, colas, testing." />
        <SkillBar name="Docker" percentage={90} years={7} description="REST/GraphQL, workers, colas, testing." />
        <SkillBar name="PostgreSQL" percentage={80} years={5} description="Bases de datos relacionales, queries complejas." />

      </section>
    </main>
  );
};

export default Habilidades;