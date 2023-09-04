import Banner from "@/components/Banner";
import fs from "fs";
import matter from "gray-matter";
import BlogPostList from "@/components/BlogPostList";
import BackLink from "@/components/BackLink";
import getPostMetadata from "@/utilities/getPostMetadata";
import BlogContent from "@/components/BlogContent";
import DisplayPostCategories from "@/components/DisplayPostCategories";
import Head from "next/head";

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
      <Head>
        <title>{post.data.title}</title>
        <meta name="description" content={post.data.description} key="desc" />
      </Head>
      <Banner title="" image={post.data.banner} />

      <div className="o-container c-blog-full">
        <div className="o-grid o-grid--center">
          <div className="o-grid__col u-12 u-11@sm u-8@md">
            <BackLink destination="/blog">Back to blog</BackLink>

            <div className="u-m-b-sm">
              <DisplayPostCategories category={post.data.category} />
            </div>
            <h1>{post.data.title}</h1>
            <h4>{post.data.description}</h4>

            <BlogContent suppressHydrationWarning content={post.content} />

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
