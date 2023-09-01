import Image from "next/image";

function Banner({ title, image }) {
  return (
    <div className="c-banner">
      {title && (
        <div className="c-banner__content">
          <h1>{title}</h1>
        </div>
      )}

      <Image src={image} alt="Image" width={400} height={400} />
    </div>
  );
}

export default Banner;
