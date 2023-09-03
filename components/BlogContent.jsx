"use client";

import Markdown from "markdown-to-jsx";
import CustomGist from "@/components/CustomGist";

function BlogContent({ content }) {
  return (
    <Markdown
      suppressHydrationWarning
      className="u-m-b-xl"
      options={{
        overrides: {
          CustomGist: {
            component: CustomGist,
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
}

export default BlogContent;
