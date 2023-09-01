import Banner from "@/components/Banner";
import BlogPostList from "@/components/BlogPostList";

function Blog() {
  return (
    <>
      <Banner title="Blog" image="/static/coding/banner-coding.jpg" />
      <BlogPostList />
    </>
  );
}

export default Blog;
