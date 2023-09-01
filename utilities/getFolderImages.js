import fs from "fs";

function getFolderImages({ folderDir }) {
  const images = fs.readdirSync(folderDir);
  const finalFolderDir = folderDir.replace("public/", "/");

  const imageList = images.map((image) => ({
    src: `${finalFolderDir}/${image}`,
    alt: image,
  }));
  return imageList;
}

export default getFolderImages;
