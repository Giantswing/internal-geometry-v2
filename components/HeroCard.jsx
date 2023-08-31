function HeroCard({ title, description, children }) {
  return (
    <div className="c-hero-card">
      <div className="c-hero-card__content">
        <h2>{title}</h2>
        <h5>{description}</h5>
        {children}
      </div>
    </div>
  );
}

export default HeroCard;
