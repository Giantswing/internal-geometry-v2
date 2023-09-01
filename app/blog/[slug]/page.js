import Banner from "@/components/Banner";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import BlogPostList from "@/components/BlogPostList";

function GetPostContent(slug) {
  const folder = "markdown-blogposts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

function BlogPostPage({ params }) {
  const slug = params.slug;
  const post = GetPostContent(slug);

  return (
    <>
      <Banner title="" image={post.data.banner} />

      <div className="o-container c-blog-full">
        <div class="o-grid o-grid--center">
          <div class="o-grid__col u-12 u-11@sm u-8@md">
            <h1>{post.data.title}</h1>
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
