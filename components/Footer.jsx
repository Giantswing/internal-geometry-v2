import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="o-container o-container--fluid c-footer">
        <div className="o-grid o-grid--center">
          <div className="o-grid__col u-12 u-4@sm">
            <Link href="/" className="site-title">
              <p>Internal Geometry. 2023</p>
            </Link>
          </div>

          <div className="o-grid__col u-12 u-8@sm">
            <nav className="c-nav">
              <ul className="c-nav__list">
                <li className="c-nav__list_item">
                  <Link href="index.html">
                    <Image
                      src="/static/rrss/twitter-icon.svg"
                      alt="Twitter logo"
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
                <li className="c-nav__list_item">
                  <Link href="index.html">
                    <Image
                      src="/static/rrss/linkedin-icon.svg"
                      alt="LinkedIn Logo"
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
                <li className="c-nav__list_item">
                  <Link href="index.html">
                    <Image
                      src="/static/rrss/instagram-icon.svg"
                      alt="Instagram logo"
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
                <li className="c-nav__list_item">
                  <p>Alejandro Pino Alcalde</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
