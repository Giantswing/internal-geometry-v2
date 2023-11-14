/* eslint-disable react/no-unescaped-entities */
import Banner from "@/components/Banner";
import HeroCardImage from "@/components/HeroCardImage";
import Button from "@/components/Button";
import TitledSeparator from "@/components/TitledSeparator";
import FileDownload from "@/components/FileDownload";
import InfoCard from "@/components/InfoCard";
import LinkedInEmbed from "@/components/LinkedInEmbed";

function About() {
  return (
    <>
      <Banner title="About me" image="/static/coding/banner-coding.jpg" />
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
        <div className="o-grid o-grid--center">
          <div className="o-grid__col u-12 u-10@xs u-8@md">
            <TitledSeparator>My portfolio and curriculum</TitledSeparator>
          </div>
        </div>

        <div className="o-grid o-grid--center">
          <div className="o-grid__col u-11 u-8@xs u-4@sm">
            <FileDownload
              fileName="Curriculum (English)"
              fileURL="/cv/alejandro-pino-cv-eng-se.pdf"
            />
          </div>

          <div className="o-grid__col u-11 u-8@xs u-4@sm">
            <FileDownload
              fileName="Curriculum (Spanish)"
              fileURL="/cv/alejandro-pino-cv-esp-se.pdf"
            />
          </div>
        </div>
      </div>

      <div className="o-container">
        <div className="o-grid o-grid--center">
          <div className="o-grid__col u-12 u-10@xs u-8@md">
            <p className="u-text-align-mobile">
              As for my portfolio... well, you're looking at it!
            </p>

            <InfoCard
              key="about-internal-geometry"
              heroImage="/static/blog/internal-vertical.png"
            >
              <h2>Internal Geometry</h2>
              <p>
                Internal Geometry is my brand and my company, it represents the
                work that I've done throughout my life and career. I've made
                this website to showcase my work and to share my passion with
                the world. I hope you enjoy it!
              </p>
              <p>
                This website is most definitely an infinite work-in-progress,
                I'll keep improving and updating it as a way to be as
                informative and complete as possible and, even more importantly,
                as a way to keep having fun with Web Development, React and
                NextJS!
              </p>
            </InfoCard>
          </div>
          <div className="o-grid__col u-8">
            <LinkedInEmbed />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
