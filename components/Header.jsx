"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

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
              <HeaderItem title="Coding" url="/coding" />
              <HeaderItem title="3D" url="/3d" />
              <HeaderItem title="Blog" url="/blog" />
              <HeaderItem title="About" url="/about" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
