import Link from "next/link";

function Button({ title, direction }) {
  const isOutsideLink = direction.includes("http");

  return (
    <Link
      className="c-button"
      href={direction}
      target={isOutsideLink ? "_blank" : "_self"}
    >
      {title}
    </Link>
  );
}

export default Button;
