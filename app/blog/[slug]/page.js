import Banner from "@/components/Banner";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import BlogPostList from "@/components/BlogPostList";
import BackLink from "@/components/BackLink";
import getPostMetadata from "@/utilities/getPostMetadata";

function GetPostContent(slug) {
  const folder = "markdown-blogposts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function BlogPostPage({ params }) {
  const slug = params.slug;
  const post = GetPostContent(slug);

  return (
    <>
      <Banner title="" image={post.data.banner} />

      <div className="o-container c-blog-full">
        <div className="o-grid o-grid--center">
          <div className="o-grid__col u-12 u-11@sm u-8@md">
            <BackLink destination="/blog">Back to blog</BackLink>

            <p
              className={`c-blog-preview__content__category ${
                post.data.category === "Game Development"
                  ? "c-blog-preview__content__category--blue"
                  : ""
              }
            ${
              post.data.category === "3D"
                ? "c-blog-preview__content__category--red"
                : ""
            }
          `}
            >
              {post.data.category}
            </p>
            <h1>{post.data.title}</h1>
            <h4>{post.data.description}</h4>
            <Markdown className="u-m-b-xl">{post.content}</Markdown>

            <BlogPostList
              filter={post.data.category}
              currentPost={slug}
              showReadMore="true"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostPage;
