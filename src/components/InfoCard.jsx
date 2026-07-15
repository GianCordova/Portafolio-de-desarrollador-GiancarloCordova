const InfoCard = ({ icon: Icon, title, children }) => {
  return (
    <div className="info-card">
      {Icon && <Icon className="info-card-icon" />}
      <h3>{title}</h3>
      <div className="info-card-content">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;