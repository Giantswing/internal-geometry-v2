"use client";

import Script from "next/script";
import Link from "next/link";

function LinkedInEmbed() {
  return (
    <>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      />
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="alejandro-pino-alcalde"
        data-version="v1"
      >
        <Link
          className="badge-base__link LI-simple-link"
          href={`https://www.linkedin.com/in/alejandro-pino-alcalde?trk=profile-badge`}
        ></Link>
      </div>
    </>
  );
}

export default LinkedInEmbed;
