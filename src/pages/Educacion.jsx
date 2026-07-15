import EducationItem from '../components/EducationItem';

const Educacion = () => {
  return (
    <main className="container">
      <section className="intro-box-left">
        <h1>Mi camino de aprendizaje</h1>
        <p>Aquí presento mi trayectoria académica y formativa en el ámbito de la programación.</p>

        <div className="education-timeline">

          <EducationItem 
            title="Prácticas Supervisadas"
            institucion="Grupo Distelsa"
            date="17 de Agosto 2026 - Finales de Octubre 2026"
            description="Practicas supervisadas en el área de desarrollo web y gestión de proyectos. Participación activa en la creación de soluciones web, optimización de procesos y colaboración con equipos multidisciplinarios."
            tags={['Gestión', 'Liderazgo', 'Educación']}
          />

          <EducationItem 
            title="Desarrollador Jr. Full Stack"
            institucion="Fundación Kinal"
            date="Ene 2026 - Presente"
            description="Formación principal como desarrollador full stack con enfoque especializado en backend .NET y programación en C#. Gestión avanzada de bases de datos con SQL, arquitectura de aplicaciones y buenas prácticas de desarrollo empresarial."
            tags={['React', '.NET', 'C#', 'SQL', 'Node.js', 'REST APIs']}
          />

          <EducationItem 
            title="Fundamentos de Programación"
            institucion="Fundación Kinal"
            date="Ene 2025 - Oct 2025"
            description="Aprendizaje profundo de fundamentos de programación cubriendo lógica de programación, flujos de control, estructuras de datos y resolución de problemas complejos."
            tags={['Java', 'Lógica', 'Estructuras', 'SQL', 'Springboot']}
          />

          <EducationItem 
            title="Introducción al Perito en Informática"
            institucion="Fundación Kinal"
            date="Ene 2024 - Oct 2024"
            description="Primera aproximación a los fundamentos de programación como transición formal a la carrera técnica. Introducción a desarrollo web con conceptos básicos de redes (CCNA) y primeros pasos en programación."
            tags={['HTML/CSS', 'JavaScript Básico', 'CCNA', 'Redes']}
          />

          <EducationItem 
            title="Ciclo Básico"
            institucion="Colegio Bilingüe San Juan"
            date="Ene 2021 - Nov 2023"
            description="Formación en ciclo básico con énfasis en socialización y trabajo en equipo post-pandemia. Consolidación de habilidades en inglés y preparación para educación técnica avanzada."
            tags={['Trabajo en equipo', 'Inglés', 'Resolución de problemas']}
          />

          <EducationItem 
            title="Educación Primaria"
            institucion="Centro Educativo La Vid"
            date="Ene 2015 - Nov 2020"
            description="Formación primaria con reconocimientos por desempeño académico. Abanderado institucional con mención honorífica, formando bases sólidas en valores, disciplina y aprendizaje fundamental."
            tags={['Reconocimientos', 'Valores', 'Disciplina']}
          />
        </div>
      </section>
    </main>
  );
};

export default Educacion;