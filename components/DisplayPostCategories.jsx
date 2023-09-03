function DisplayPostCategories({ category }) {
  const categories = category.split(", ");

  return (
    <div className="c-blog_categories">
      {categories.map((item) => {
        return (
          <span
            key={item}
            className={`c-blog_categories_item c-blog_categories_item--${item}`}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default DisplayPostCategories;
