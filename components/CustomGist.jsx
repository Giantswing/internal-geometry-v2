"use client";

import Gist from "react-gist";

function CustomGist({ id }) {
  return (
    <div>
      <Gist suppressHydrationWarning id={id} />
    </div>
  );
}

export default CustomGist;
