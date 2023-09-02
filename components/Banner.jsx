import Image from "next/image";

function Banner({ title, image }) {
  return (
    <div className="c-banner">
      {title && (
        <div className="c-banner__content">
          <h1>{title}</h1>
        </div>
      )}

      <Image priority src={image} alt="Image" width={1920} height={1920} />
    </div>
  );
}

export default Banner;
