import Banner from "@/components/Banner";
import HeroCard from "@/components/HeroCard";
import Button from "@/components/Button";
import InfoCard from "@/components/InfoCard";

import ProjectOverview from "@/components/ProjectOverview";
import Link from "next/link";

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

      <div className="o-container u-alternate-children">
        <ProjectOverview
          projectTitle="Flugi"
          projectDescription="2.D Platformer"
          projectFolderImages="public/coding/projects/flugi"
          projectButtonDir="https://giantswing.itch.io/flugi"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          deserunt optio ex rerum, tempora aliquam ullam modi vel quibusdam
          corrupti autem aliquid consequatur consectetur inventore perspiciatis
          similique illo mollitia magni!
        </ProjectOverview>

        <ProjectOverview
          projectTitle="Spiky"
          projectDescription="Card Puzzle Game"
          projectFolderImages="public/coding/projects/spiky"
          projectButtonDir="https://giantswing.itch.io/spiky"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          deserunt optio ex rerum, tempora aliquam ullam modi vel quibusdam
          corrupti autem aliquid consequatur consectetur inventore perspiciatis
          similique illo mollitia magni!
        </ProjectOverview>
      </div>
    </>
  );
}

export default Coding;
