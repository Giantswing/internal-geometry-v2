import Banner from "@/components/Banner";
import HeroCard from "@/components/HeroCard";
import Button from "@/components/Button";
import CustomGist from "@/components/CustomGist";

function d3d() {
  return (
    <>
      <Banner title="3D" image="/static/coding/banner-coding.jpg" />
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

        <CustomGist id="53f2ff7de8a3b6619b5f527d07bdb002" />
      </div>
    </>
  );
}

export default d3d;
