import Banner from "@/components/Banner";
import HeroCard from "@/components/HeroCard";
import Button from "@/components/Button";
import BlogPostList from "@/components/BlogPostList";
import InfoCard from "@/components/InfoCard";
import TitledSeparator from "@/components/TitledSeparator";
import ProjectOverview from "@/components/ProjectOverview";

function d3d() {
  return (
    <>
      <Banner title="3D" image="/3d/banner.jpg" />
      <div className="o-container">
        <HeroCard title="The third dimension" description="Inspired by Sci-Fi">
          {" "}
          <p>
            My goal is simple: to transform ideas into captivating visuals.
            Whether it's inventing futuristic tech or crafting the aesthetic of
            otherworldly characters, I find fulfillment in giving life to
            imaginative concepts through 3D modeling.
          </p>
          <Button title={"Contact me"} direction={"/about"} />
        </HeroCard>

        <InfoCard
          iconfolder="/3d/programs"
          foldertitle="KNOWLEDGE IN SOFTWARE"
          heroImage="/3d/spidey.jpg"
        >
          My fascination with 3D modeling started as a hobby and has evolved
          into a rewarding profession. I find my true passion lies in creating
          precise hard surface objects, from sleek designs to intricate
          machinery.
          <p>
            To bring my visions to life, I rely on a range of tools. Blender
            serves as my primary platform, while Plasticity, ZBrush, Substance
            Painter and Designer, Houdini, and Marvelous Designer provide
            essential support, allowing me to explore various aspects of 3D
            modeling.
          </p>
        </InfoCard>

        <TitledSeparator>IG-SYSTEMS</TitledSeparator>
        <div className="c-simple-text u-text-align-mobile">
          <p>Crafting Sci-Fi Arsenal for Your Universe.</p>
          <p>
            Step into the realm of imagination with IG-SYSTEMS, where science
            fiction weaponry comes to life in 3D detail. At IG-SYSTEMS, we're
            more than just a fictional weapon manufacturer; we're the creators
            of futuristic armaments that fuel your favorite films and video
            games. Our mission is simple: to bring awe-inspiring firepower to
            the sci-fi cosmos.
          </p>
        </div>

        <ProjectOverview
          projectTitle="Flugi"
          projectDescription="2.D Platformer"
          projectFolderImages="public/coding/projects/flugi"
          projectButtonDir="https://giantswing.itch.io/flugi"
        >
          Join Flugi, a young and brave fly, on an exciting adventure to save
          his family and defeat the evil sorcerer Spark. Navigate through
          challenging levels filled with traps and puzzles, using your wits and
          skills to overcome obstacles and enemies. With the help of your trusty
          companion Mr. Whiskers and clues hidden throughout the game, explore
          the enchanted world of Flylandia and uncover its secrets. Will you be
          able to save Flugi's family and restore peace to the land?
        </ProjectOverview>

        <BlogPostList filter="3D" showReadMore="true" />
      </div>
    </>
  );
}

export default d3d;
