import BlogPreview from "@/components/BlogPreview";
import getPostMetadata from "@/utilities/getPostMetadata";

function BlogPostList({ filter = "", currentPost = "", showReadMore = false }) {
  const postMetadata = getPostMetadata();
  const currentFilter = filter;

  const postPreviews = postMetadata
    .filter((post) => {
      if (currentFilter) {
        return post.category === filter;
      } else {
        return true;
      }
    })
    .filter((post) => {
      return post.slug !== currentPost;
    })
    .map((post) => {
      return (
        <BlogPreview
          key={post.slug}
          slug={post.slug}
          banner={post.banner}
          title={post.title}
          date={post.date}
          description={post.description}
          category={post.category}
        />
      );
    });

  return (
    <div className="o-container c-blog-list">
      <div className="o-grid">
        {showReadMore && <h3>Related {filter} blog posts</h3>}
        <div className="c-postgrid">{postPreviews}</div>
      </div>
    </div>
  );
}

export default BlogPostList;
