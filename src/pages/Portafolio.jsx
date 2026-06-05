const Portafolio = () => {
  return (
    <main className="container">
      <section id="portafolio" className="intro-box-left">
        <h1>Proyectos destacados</h1>
        <p>Aquí presento una selección de los trabajos en los que he aplicado mis conocimientos en desarrollo web y gestión de software.</p>

        {/* Proyecto 1 */}
        <div className="proyecto-card" style={{ marginTop: '2rem', borderBottom: '1px solid #30363d', paddingBottom: '1.5rem' }}>
          <h2 className="section-subtitle">Sistema Bancario (Full Stack)</h2>
          <p><strong>Stack:</strong> React, Node.js, Express, PostgreSQL</p>
          <p>Sistema integral para la gestión de transacciones bancarias, manejo de cuentas de usuarios y seguridad mediante JWT. Enfocado en la optimización de consultas a bases de datos y una UI intuitiva.</p>
          <a href="https://github.com/tu-usuario/proyecto-banco" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
            Ver repositorio en GitHub →
          </a>
        </div>

        {/* Proyecto 2 */}
        <div className="proyecto-card" style={{ marginTop: '2rem', borderBottom: '1px solid #30363d', paddingBottom: '1.5rem' }}>
          <h2 className="section-subtitle">E-commerce de Tecnología</h2>
          <p><strong>Stack:</strong> C#, ASP.NET, Bootstrap</p>
          <p>Desarrollo de una plataforma de venta de componentes electrónicos. Implementación de carrito de compras persistente, panel de administración para gestión de inventario y consumo de servicios API.</p>
          <a href="https://github.com/tu-usuario/proyecto-ecommerce" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
            Ver repositorio en GitHub →
          </a>
        </div>

        {/* Proyecto 3 */}
        <div className="proyecto-card" style={{ marginTop: '2rem', paddingBottom: '1.5rem' }}>
          <h2 className="section-subtitle">Portfolio Académico</h2>
          <p><strong>Stack:</strong> React, Vite, CSS Grid</p>
          <p>Proyecto personal diseñado para documentar mi trayectoria técnica. Aplicación de buenas prácticas de modularidad, uso de componentes de React y despliegue continuo.</p>
          <a href="https://github.com/GianCordova/Portafolio-de-desarrollador-GiancarloCordova" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
            Ver repositorio en GitHub →
          </a>
        </div>
      </section>
    </main>
  );
};

export default Portafolio;