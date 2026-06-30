import EducationItem from '../components/EducationItem';

const Educacion = () => {
  return (
    <main className="container">
      <section className="intro-box-left">
        <h1>Mi camino de aprendizaje</h1>

        <EducationItem 
          title="Practicas Supervisadas"
          institucion="Universidad del Istmo"
          date="Ene 2026 - Presente"
          description="Enfoque en gestión institucional, liderazgo educativo y desarrollo curricular."
          tags={['administración', 'educación', 'liderazgo']}
        />
        
        <EducationItem 
          title="Desarrollador Jr. Full Stack"
          institucion="Fundacion Kinal"
          date="Ene 2026 - Presente"
          description="Formación principiante como desarrollador full stack con enfoque en backend .NET, programación C# o gestion de DBs con SQL."
          tags={['administración', 'educación', 'liderazgo']}
        />

        <EducationItem 
          title="Fundamentos de Programación"
          institucion="Fundación Kinal"
          date="Ene 2025 - Oct 2025"
          description="Aprendizaje de fundamentos de programación cubriendo las areas de la logica, flujos de control, estructura y la resolucion de problemas."
          tags={['Springboot', 'SQL', 'Apache NetBeans', 'Fundamentos claves']}
        />

        <EducationItem 
          title="Introducción Perito en Informatica"
          institucion="Fundación Kinal"
          date="Ene 2024 - Oct 2024"
          description="La bienvenida a los fundamentos de programación como parte de la transición a software. 1er año 
          en fundacion kinal en donde me decidi ir por el perito en programacion, teniendo una buena introduccion a lo web
          viendo principios en la plataforma CCNA."
          tags={['PSeInt', 'SQL', 'Introduccion a la programacion']}
        />

        <EducationItem 
          title="Ciclo Basico"
          institucion="Colegio Bilingüe San Juan"
          date="Ene 2021 - Nov 2023"
          description="Formación de mi ciclo basico centrada en la extencion de los conocimientos previos. Mejorar
          la socializacion y trabajo en grupo, por las dificultades que hubieron en las clases presenciales entre 
          2020 y 2022. Mejor formacion en el area de ingles, recibiendo una mejor educacion en esta materia que en 
          otras instituciones. "
          tags={['Socializacion', 'Trabajo en grupo', 'Recibimiento a temas mas complejos ']}
        />

        <EducationItem 
          title="Educacion Primaria"
          institucion="Centro Educativo La Vid "
          date="Ene 2015 - Nov 2020"
          description="Formación primaria centrada en aprender lo basico. Aqui me forme con la educacion basica hasta 6to primaria, 
          fui abanderado x veces, recibiendo una medalla de reconocimiento a los 12 años saliendo del colegio como antes mencionado 
          en 6to primaria."
          tags={['Primeros reconocimientos', 'Primeros retos', 'Valores']}
        />
      </section>
    </main>
  );
};

export default Educacion;