import { BandItem } from "@/components/sections/home-page/bands/item/BandItem";
import { bandItems } from "@/data/Bands";
import "./Bands.scss";

export const Bands = () => {
  return (
    <section className="bands">
      <div className="bands__wrapper wrapper-third">
        <h2 className="bands__title">The Most Famous Electro Swing Bands</h2>

        <div className="bands__items">
          {bandItems.map((item) => (
            <BandItem key={item.title} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
