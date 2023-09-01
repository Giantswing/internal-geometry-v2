import Image from "next/image";
import fs from "fs";

function InfoCard({ iconfolder, foldertitle, children }) {
  function GetImages() {
    const folder = "public/coding/languages";
    const images = fs.readdirSync(folder);

    const imageList = images.map((image) => ({
      src: `/coding/languages/${image}`,
      alt: image,
    }));
    return imageList;
  }

  return (
    <div class="o-grid o-grid--center o-grid--reverse o-grid--no-gutters u-space-b-lg u-hide-overflow">
      <div class="o-grid__col u-12 u-4@lg c-info-card__image">
        <Image
          src="/coding/coding-img2.jpg"
          alt="Coding"
          width={1024}
          height={1024}
        />
      </div>

      <div class="o-grid__col u-12 u-8@lg">
        <div class="c-info-card">
          <p class="u-space-b-md">{children}</p>
          <h3>{foldertitle}</h3>
          <div class="c-info-card__list">
            {GetImages().map((image) => (
              <div class="c-info-card__list_item" key={image.src}>
                <Image src={image.src} alt={image.alt} width={64} height={64} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
