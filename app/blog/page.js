import Banner from "@/components/Banner";
import BlogPostList from "@/components/BlogPostList";

function Blog() {
  return (
    <>
      <Banner title="Blog" image="/static/blog/banner.jpg" />
      <BlogPostList />
    </>
  );
}

export default Blog;
