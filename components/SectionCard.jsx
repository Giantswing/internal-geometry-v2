import Image from "next/image";
import Link from "next/link";

function SectionCard({ title, color, image, children, direction = "/" }) {
  return (
    <Link href={direction} className="o-grid__col u-12 u-6@sm u-m-b-sm">
      <div className="c-section-card">
        <div className="c-section-card__img">
          <Image src={image} alt="Image" width={400} height={400} />
        </div>

        <div className="c-section-card__content">
          <h2
            className={`c-section-card__content__title c-section-card__content__title--${color}`}
          >
            {" "}
            {title}
          </h2>
          <p>{children}</p>

          <div className="c-section-card__content__arrow">
            <Image src="/select-arrow.svg" alt="Arrow" width={40} height={40} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SectionCard;
