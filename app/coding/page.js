import Banner from "@/components/Banner";
import HeroCard from "@/components/HeroCard";
import Button from "@/components/Button";
import fs from "fs";
import Link from "next/link";

function Coding() {
  return (
    <>
      <Banner title="Coding/Games" image="/static/coding/banner-coding.jpg" />
      <div class="o-container">
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
      </div>
    </>
  );
}

export default Coding;