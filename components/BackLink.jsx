import Link from "next/link";

function BackLink({ destination, children }) {
  return (
    <Link href={destination}>
      <div className="c-backlink">{children}</div>
    </Link>
  );
}

export default BackLink;
