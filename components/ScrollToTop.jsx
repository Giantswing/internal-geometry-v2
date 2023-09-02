"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [hide, setHide] = useState(false);
  const [goUp, setGoUp] = useState(false);

  function shouldGoUp() {
    //detect if we are near the bottom of the page
    if (
      window.scrollY >
      document.body.offsetHeight - window.innerHeight - 100
    ) {
      setGoUp(true);
    } else {
      setGoUp(false);
    }
  }

  function shouldShow() {
    if (window.scrollY > 400) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", shouldShow);
    window.addEventListener("scroll", shouldGoUp);
    return () => {
      window.removeEventListener("scroll", shouldShow);
      window.removeEventListener("scroll", shouldGoUp);
    };
  }, []);

  return (
    <>
      <Link
        href="#top"
        className={
          `c-scroll-to-top ${!hide ? "c-scroll-to-top--hide" : ""}` +
          `${goUp ? "c-scroll-to-top--up" : ""}`
        }
      >
        <div className="c-scroll-to-top__icon"></div>
      </Link>
    </>
  );
}

export default ScrollToTop;
