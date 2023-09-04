import "/styles/globals.scss";
import { Inter } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Header from "/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Internal Geometry",
  description: "Personal portfolio of Alejandro Pino Alcalde",
};

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
