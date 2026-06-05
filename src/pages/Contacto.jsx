const Contacto = () => {
  return (
    <main className="container">
      <section id="contacto" className="intro-box-left">
        <h1>Contáctame</h1>
        
        <p>Puedes contactarme directamente a través de cualquiera de estos medios:</p>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
          
          <div className="contact-card" style={{ background: '#161b22', padding: '15px', borderRadius: '8px' }}>
            <p><strong>Correo:</strong></p>
            <p>giancordova360@gmail.com</p>
          </div>

          <div className="contact-card" style={{ background: '#161b22', padding: '15px', borderRadius: '8px' }}>
            <p><strong>GitHub:</strong></p>
            <a href="https://github.com/GianCordova" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>@GianCordova</a>
          </div>

          <div className="contact-card" style={{ background: '#161b22', padding: '15px', borderRadius: '8px' }}>
            <p><strong>Ubicación:</strong></p>
            <p>Guatemala, Cdad. de Guatemala</p>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Contacto;