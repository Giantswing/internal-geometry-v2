import Banner from "@/components/Banner";
import HeroCard from "@/components/HeroCard";
import Button from "@/components/Button";
import InfoCard from "@/components/InfoCard";
import SimpleGallery from "@/components/SimpleGallery";
import getFolderImages from "@/utilities/getFolderImages";

function Coding() {
  return (
    <>
      <Banner title="Coding/Games" image="/static/coding/banner-coding.jpg" />
      <div className="o-container">
        <HeroCard
          title="Crafting Digital Worlds"
          description="Where Imagination Meets Code"
        >
          {" "}
          <p>
            Join me on this exciting adventure through a showcase of my work.
            Explore worlds I've built, characters I've brought to life, and the
            technologies that power them. Whether you're a fellow developer or a
            gaming enthusiast, here, you'll find a glimpse into the magic of
            coding and the artistry of game development.
          </p>
          <Button title={"Contact me"} direction={"/contact"} />
        </HeroCard>

        <InfoCard
          iconfolder="public/coding/languages"
          foldertitle="KNOWLEDGE IN LANGUAGES"
        >
          Join me on this exciting adventure through a showcase of my work.
          Explore worlds I've built, characters I've brought to life, and the
          technologies that power them. Whether you're a fellow developer or a
          gaming enthusiast, here, you'll find a glimpse into the magic of
          coding and the artistry of game development.{" "}
        </InfoCard>
      </div>

      <div className="o-container">
        <div className="o-grid o-grid--center c-project u-space-b-md">
          <div className="o-grid__col u-12 u-6@lg">
            <SimpleGallery
              imageList={getFolderImages({
                folderDir: "public/coding/projects/flugi",
              })}
            />
          </div>
          <div className="o-grid__col u-12 u-6@lg">
            <div className="c-project__info">
              <h2>Flugi: The adventures of the fly</h2>
              <h4>2.5D platformer</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, debitis. Quas, et cum. Quis eligendi, qui accusamus
                culpa corrupti tempora! Officiis fugiat quasi ipsa eos
                perspiciatis quos quia veritatis culpa! Autem consequuntur quos
                distinctio corporis vel quae fuga hic ad! Neque at iste,
                laudantium necessitatibus velit ea quidem provident aut?Neque at
                iste, laudantium necessitatibus velit ea quidem provident
                aut?Neque at iste, laudantium necessitatibus velit ea quidem
                provident aut?
              </p>
              <div className="button u-space-t-md">
                <a href="https://google.com">Download link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coding;
