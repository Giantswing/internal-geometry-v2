import Image from "next/image";

function HeroCardImage({ title, description, children }) {
  return (
    <div className="o-grid o-grid--center">
      <div className="o-grid__col u-12 u-2@md">
        <div className="c-hero-card__img">
          <Image
            src="/static/rrss/imagen-cv.png"
            alt="A photograph of a handsome man"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="o-grid__col u-12 u-10@md">
        <div className="c-hero-card">
          <div className="c-hero-card__content">
            <h2>{title}</h2>
            <h5>{description}</h5>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCardImage;
