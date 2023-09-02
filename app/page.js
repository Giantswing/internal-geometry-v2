/* eslint-disable react/no-unescaped-entities */
"use client";

import HeroCardImage from "@/components/HeroCardImage";
import Button from "@/components/Button";
import SectionCard from "@/components/SectionCard";
import MainVideo from "@/components/MainVideo";

export default function Home() {
  return (
    <>
      <MainVideo />
      <div className="o-container">
        <HeroCardImage
          title="Hi! Welcome to my portfolio, I'm Alex!"
          description="Passionate Game Developer | Creative Multimedia Professional | Seeking New Opportunities"
        >
          <p>
            Throughout my life, I've been immersed in the world of game
            development, from my early days in GM Studio to mastering Unity. My
            skills span multiple programming languages, including C#,
            Javascript, Python, and C++. I thrive on creativity, and I'm deeply
            invested in the entire creative pipeline - from programming to 3D
            modeling, graphic design, and audio/music. In my professional
            journey, I've had the privilege of leading graphic design
            initiatives and collaborating on video and web design projects. Now,
            I'm excited to pivot towards a greater focus on programming and 3D
            modeling, leveraging my diverse skill set to drive innovation. Let's
            connect and explore how we can create something amazing together.
            Open to new opportunities and collaborations!
          </p>
          <Button
            title={"Contact me"}
            direction={"https://www.linkedin.com/in/alejandro-pino-alcalde/"}
          />
        </HeroCardImage>
      </div>

      <div className="o-container">
        <div className="o-grid">
          <SectionCard
            title="Coding/Games"
            image="/static/coding/banner-coding.jpg"
            color="red"
            direction="/coding"
          >
            From video game development to web development and everything in
            between, come here to learn more about the projects I've worked on!
          </SectionCard>

          <SectionCard title="3D" image="/static/3d/banner-3d.jpg" color="blue">
            Characters and hard surface models with a touch of experimentation
            to liven it up. Click here to learn more about the models I've
            created. Characters and hard surface models with a touch of
            experimentation to liven it up. Click here to learn more about the
            models I've created.
          </SectionCard>
        </div>
      </div>
    </>
  );
}
