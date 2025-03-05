import { MeaningItem } from "@/components/sections/home-page/meaning/item/MeaningItem";
import { AnchorButton } from "@/components/elements/buttons/anchor/AnchorButton";
import { meaningItems } from "@/data/Meaning";
import "./Meaning.scss";

export const Meaning = () => {
  return (
    <section className="meaning">
      <div className="meaning__wrapper wrapper-second">
        <div className="meaning__top">
          <h2 className="meaning__title">What is Neoswing and Electroswing?</h2>
          <p className="meaning__subtitle">
            Neoswing is a dynamic dance style that fuses the lively moves of traditional swing with
            the edgy rhythms of modern music. Its roots lie in Electroswing, a unique musical genre
            that blends vintage jazz and swing sounds with electronic beats, creating a fresh and
            irresistible groove. Together, they bring the charm of the past and the pulse of the
            future to the dance floor.
          </p>
        </div>

        <div className="meaning__bottom">
          <h3 className="meaning__title">The Evolution of Neoswing and Electroswing</h3>
          <div className="meaning__events">
            {meaningItems.map((item, index) => (
              <MeaningItem
                key={index}
                number={++index}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>

        <AnchorButton title="Explore more" className="meaning__anchor" scrollTo="advantages" />
      </div>
    </section>
  );
};
