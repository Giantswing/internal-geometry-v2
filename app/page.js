"use client";

import Image from "next/image";
import HeroCard from "@/components/HeroCard";
import HeroCardImage from "@/components/HeroCardImage";
import Button from "@/components/Button";
import SectionCard from "@/components/SectionCard";
import MainVideo from "@/components/MainVideo";

export default function Home() {
  return (
    <div>
      <main className="c-main">
        <MainVideo />
        <div class="o-container">
          <HeroCardImage
            title="Hi! Welcome to my portfolio, I'm Alex!"
            description="Passionate Game Developer | Creative Multimedia Professional | Seeking New Opportunities"
          >
            <p>
              Throughout my life, I've been immersed in the world of game
              development, from my early days in GM Studio to mastering Unity.
              My skills span multiple programming languages, including C#,
              Javascript, Python, and C++. I thrive on creativity, and I'm
              deeply invested in the entire creative pipeline - from programming
              to 3D modeling, graphic design, and audio/music. In my
              professional journey, I've had the privilege of leading graphic
              design initiatives and collaborating on video and web design
              projects. Now, I'm excited to pivot towards a greater focus on
              programming and 3D modeling, leveraging my diverse skill set to
              drive innovation. Let's connect and explore how we can create
              something amazing together. Open to new opportunities and
              collaborations!
            </p>
            <Button title={"Contact"} direction={"/contact"} />
          </HeroCardImage>
        </div>

        <div class="o-container">
          <div class="o-grid">
            <SectionCard
              title="Coding/Games"
              image="/static/coding/banner-coding.jpg"
              color="red"
              direction="/coding"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SectionCard>

            <SectionCard
              title="3D"
              image="/static/3d/banner-3d.jpg"
              color="blue"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SectionCard>
          </div>
        </div>
      </main>
    </div>
  );
}
