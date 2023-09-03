import fs from "fs";
import matter from "gray-matter";

function getPostMetadata() {
  const folder = "markdown-blogposts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  //const slugs = markdownPosts.map((file) => file.replace(".md", ""));

  //Get the data from each file using gray-matter
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug: fileName.replace(".md", ""),
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      banner: matterResult.data.banner,
      category: matterResult.data.category,
      status: matterResult.data.status,
    };
  });

  return posts;
}

export default getPostMetadata;
