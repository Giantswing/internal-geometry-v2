import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function HeaderItem({ title, url }) {
  const path = usePathname();
  const pathname = "/" + path.split("/")[1];

  useEffect(() => {
    const url = `${pathname}`;
    if (url === pathname) console.log(url);
  }, [pathname]);

  return (
    <li
      className={`c-nav__list_item ${
        url === pathname ? "c-nav__list_item--active" : ""
      }`}
    >
      <Link href={url}>{title}</Link>
    </li>
  );
}

export default HeaderItem;
