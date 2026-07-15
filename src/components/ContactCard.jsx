import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const ContactCard = ({ icon: Icon, title, content, link, isEmail }) => {
  const CardContent = () => {
    if (link) {
      return (
        <a 
          href={isEmail ? `mailto:${link}` : link} 
          target={!isEmail ? "_blank" : undefined}
          rel={!isEmail ? "noreferrer" : undefined}
          className="contact-link"
        >
          {content}
        </a>
      );
    }
    return <p className="contact-content">{content}</p>;
  };

  return (
    <div className="contact-card">
      <div className="contact-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <CardContent />
    </div>
  );
};

export default ContactCard;