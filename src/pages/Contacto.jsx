import ContactCard from '../components/ContactCard';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Contacto = () => {
  const contactos = [
    {
      icon: FaEnvelope,
      title: "Correo",
      content: "giancordova360@gmail.com",
      // link: "giancordova360@gmail.com",
      isEmail: true
    },
    {
      icon: FaGithub,
      title: "GitHub",
      content: "@GianCordova",
      link: "https://github.com/GianCordova"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      content: "Giancarlo Cordova",
      link: "https://www.linkedin.com/in/giancarlo-sebastian-cordova-garcia-145563422/" 
    },
    // {
    //   icon: FaBriefcase,
    //   title: "CompuTrabajo",
    //   content: "Mi perfil",
    //   link: "https://www.computrabajo.com/profile/your-username" // Ajusta con tu URL real
    // },
    {
      icon: FaMapMarkerAlt,
      title: "Ubicación",
      content: "Guatemala, Ciudad de Guatemala"
    }
  ];

  return (
    <main className="container">
      <section id="contacto" className="intro-box-left">
        <h1>Contáctame</h1>
        
        <p>Puedes contactarme a través de cualquiera de estos medios. ¡No dudes en escribirme!</p>

        <div className="contact-grid">
          {contactos.map((contacto, index) => (
            <ContactCard 
              key={index}
              {...contacto}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contacto;