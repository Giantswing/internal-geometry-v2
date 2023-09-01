import Link from "next/link";

function BackLink({ destination, children }) {
  return <Link href={destination}>{children}</Link>;
}

export default BackLink;
