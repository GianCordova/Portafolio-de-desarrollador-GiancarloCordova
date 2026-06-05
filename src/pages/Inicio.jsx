const Inicio = () => {
  return (
    <section id="bienvenida" className="intro-box">
      <h1>Hola, soy Giancarlo Cordova</h1>
      <p className="subtitle">Estudiante de desarrollo Full Stack</p>
      
      <blockquote className="quote">
        "La simplicidad es la máxima sofisticación."
      </blockquote>

      <div className="contact-info">
        <p><strong>Correo:</strong> giancordova360@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/GianCordova" target="_blank" rel="noreferrer">github.com/GianCordova</a></p>
      </div>
    </section>
  );
};

export default Inicio;