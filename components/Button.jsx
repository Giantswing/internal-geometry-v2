//import Link
import Link from "next/link";

function Button({ title, direction }) {
  return (
    <Link className="c-button" href={direction}>
      {title}
    </Link>
  );
}

export default Button;
