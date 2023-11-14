/* eslint-disable react/no-unescaped-entities */
import Banner from "@/components/Banner";
import HeroCard from "@/components/HeroCard";
import Button from "@/components/Button";
import InfoCard from "@/components/InfoCard";
import TitledSeparator from "@/components/TitledSeparator";
import BlogPostList from "@/components/BlogPostList";

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
          <p>
            In my coding journey, I've got two trusty sidekicks: C# and
            JavaScript. These languages have been my ride-or-die for bringing my
            digital dreams to life. C# is my go-to for building rock-solid
            applications, and JavaScript? Well, it's my jack-of-all-trades for
            web wizardry. Whether I'm cooking up complex backend magic or
            whipping together snazzy web interfaces, these two buddies have my
            back.
          </p>
          <Button title={"Contact me"} direction={"/about"} />
        </HeroCard>

        <InfoCard
          iconfolder="/coding/languages"
          foldertitle="KNOWLEDGE IN LANGUAGES"
          heroImage="/coding/coding-img2.jpg"
        >
          Now, when it comes to my passion, both as a professional and in my
          off-hours fun. My weapon of choice? Unity, of course! It's the gaming
          playground where I've let my creativity run wild. From giving
          characters their own personalities to creating interesting gameplay,
          Unity's been my trusted companion. I've also dabbled in other game
          engines, such as Unreal Engine and Godot, but Unity's been my go-to
          for years.
          <p>
            With a ton of experience in C#, JavaScript, and Unity, I'm not just
            writing code; I'm crafting experiences that I hope people enjoy.
            From building epic game worlds to cooking up slick applications, my
            coding journey is a thrilling ride. Join me in this world of code
            where imagination knows no limits, and we'll turn ideas into digital
            reality, one line at a time.
          </p>
        </InfoCard>
      </div>

      <div className="o-container u-m-b-xl">
        <TitledSeparator>Game projects</TitledSeparator>

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

        <ProjectOverview
          projectTitle="Spiky"
          projectDescription="Card Puzzle Game"
          projectFolderImages="public/coding/projects/spiky"
          projectButtonDir="https://giantswing.itch.io/spiky"
        >
          Spiky is a Card, Platform, Puzzle game, with soothing graphics and a
          cute aesthetic, , made for the Ludum Dare 41 Game Jam. Go through many
          levels collecting crystals and avoiding traps, the catch being that
          you have to use cards in a turn-based format to move around the level.
        </ProjectOverview>
      </div>

      <div className="o-container">
        <TitledSeparator>Web/App projects</TitledSeparator>

        <ProjectOverview
          projectTitle="Habit Journey"
          projectDescription="Improving your life"
          projectFolderImages="public/coding/projects/habitjourney"
          projectButtonDir="https://habitjourney.vercel.app/"
        >
          <ul>
            <li>
              Positive Reinforcement: Achieve your goals and good habits to earn valuable points.
            </li>
            <li>
              Negative Accountability: Keep those not-so-great tendencies in check by paying with your hard-earned points
            </li>
            <li>
              Categorize with Ease: Organize your tendencies into categories for seamless filtering.
            </li>
          </ul>
        </ProjectOverview>

        <ProjectOverview
          projectTitle="Memorizapp"
          projectDescription="Text Retention Toolkit"
          projectFolderImages="public/coding/projects/memorizapp"
          projectButtonDir="https://memorizapp.vercel.app/"
        >
          <ul>
            <li>
              Text Formatting: Paste your study material, format it to your
              liking, and prepare for memorization.
            </li>
            <li>
              Gradual Challenge: Select the percentage of words to vanish,
              kickstarting your memory workout.
            </li>
            <li>
              Guess & Verify: Test your recall skills by guessing the missing
              words and verify your accuracy.
            </li>
          </ul>
        </ProjectOverview>



        <BlogPostList filter="GameDev, Coding, WebDev" showReadMore="true" />
      </div>
    </>
  );
}

export default Coding;
