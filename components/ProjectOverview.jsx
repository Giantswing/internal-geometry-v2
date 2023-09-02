import SimpleGallery from "@/components/SimpleGallery";
import getFolderImages from "@/utilities/getFolderImages";
import Button from "@/components/Button";

function ProjectOverview({
  projectTitle,
  projectDescription,
  projectFolderImages,
  projectButtonDir,
  children,
}) {
  return (
    <>
      <div className="o-grid o-grid--center c-project">
        <div className="o-grid__col u-12 u-6@lg">
          <SimpleGallery
            imageList={getFolderImages({
              folderDir: projectFolderImages,
            })}
          />
        </div>
        <div className="o-grid__col u-12 u-6@lg">
          <div className="c-project__info">
            <h2>{projectTitle}</h2>
            <h4>{projectDescription}</h4>
            <p>{children}</p>
            <Button title="See more" direction={projectButtonDir} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOverview;
