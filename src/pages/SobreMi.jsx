const SobreMi = () => {
  return (
    <main className="container">
      <section id="sobre-mi" className="intro-box-left">
        {/* Aquí integramos la bienvenida */}
        <h1 style={{ marginBottom: '0.5rem' }}>Hola, soy Giancarlo Cordova</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '2rem' }}>
          Estudiante de desarrollo Full Stack
        </p>

        {/* Sección de descripción */}
        <h2 className="section-subtitle">Y aqui un poco sobre mí...</h2>
        <p>Soy Giancarlo Sebastian Cordova Garcia, estudiante de Perito en Informática en Fundación Kinal. Desde que entré en 2023, he aprendido muchas cosas sobre el mundo de la programación, cómo funciona, lenguajes, aplicaciones, tecnología, etc. Pero también me estoy terminando de formar como una persona profesional tanto en lo laboral como en lo ético.</p>
        
        <p>Decidí estudiar algo técnico por las oportunidades que brinda; me incliné por Informática ya que paso buena parte del tiempo en la computadora y porque siempre tuve la idea de que la tecnología sería la novedad del futuro.</p>

        <h2 className="section-subtitle">Desarrollo técnico</h2>
        <p>A lo largo de mi formación, he consolidado una base técnica sólida en desarrollo web y de software. Cuento con experiencia trabajando en el stack MERN (React, Node.js), así como en el entorno .NET con C#. Complemento esto con JavaScript, HTML, CSS, Bootstrap y Tailwind para crear interfaces funcionales y modernas.</p>

        <h2 className="section-subtitle">Más detalles</h2>
        <div className="bio-details-left">
          <p><strong>Edad:</strong> 18 años</p>
          <p><strong>Formación:</strong> Estudiante de Perito Técnico en Kinal</p>
          <p><strong>Experiencia:</strong> Enfocado en el desarrollo de aplicaciones web y gestión de proyectos.</p>
        </div>
      </section>
    </main>
  );
};

export default SobreMi;