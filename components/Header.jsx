import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="o-container o-container--fluid c-header">
      <div className="o-grid o-grid--center">
        <Link href="/" className="o-grid__col u-12 u-1@sm u-flex-center">
          <Image
            src="/main-logo--white.svg"
            alt="Logo"
            width={50}
            height={60}
          />
        </Link>

        <div className="o-grid__col u-12 u-11@sm">
          <nav className="c-nav">
            <ul className="c-nav__list">
              <li className="c-nav__list_item">
                <Link href="/coding">Coding</Link>
              </li>
              <li className="c-nav__list_item">
                <Link href="/3d">3d</Link>
              </li>
              {/*
              <li className="c-nav__list_item">
                <Link href="/design">Design</Link>
              </li>
              <li className="c-nav__list_item">
                <Link href="/music">Music</Link>
              </li>
              <li className="c-nav__list_item">
                <Link href="/contact">Contact</Link>
              </li>
              */}
              <li className="c-nav__list_item">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
