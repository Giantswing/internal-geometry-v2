import Image from "next/image";
import Link from "next/link";

function BlogPreview(props) {
  return (
    <Link href={`/blog/${props.slug}`} className="c-blog-preview">
      <div className="c-blog-preview__image">
        <Image src={props.banner} alt={props.title} width="200" height="200" />
      </div>
      <div className="c-blog-preview__content">
        <span
          className={`c-blog-preview__content__category ${
            props.category === "Game Development"
              ? "c-blog-preview__content__category--blue"
              : ""
          }
            ${
              props.category === "3D"
                ? "c-blog-preview__content__category--red"
                : ""
            }
          `}
        >
          {props.category}
        </span>
        <h2 className="c-blog-preview__content__title">{props.title}</h2>
        <p className="c-blog-preview__content__date">{props.date}</p>
        <h3 className="c-blog-preview__content__description">
          {props.description}
        </h3>

        <div className="c-blog-preview__content__arrow">
          <Image src="/select-arrow.svg" alt="Arrow" width={40} height={40} />
        </div>
      </div>
    </Link>
  );
}

export default BlogPreview;
