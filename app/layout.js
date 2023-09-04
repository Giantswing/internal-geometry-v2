import "/styles/globals.scss";
import { Inter } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Header from "/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const font_primary = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "700"],
});

const font_secondary = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-secondary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Internal Geometry</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
      <body className={`${font_primary.variable} ${font_secondary.variable}`}>
        <Header />
        <div>
          <main className="c-main">{children}</main>
        </div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
