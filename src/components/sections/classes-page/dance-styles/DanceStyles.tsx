import { DanceStylesItem } from "@/components/sections/classes-page/dance-styles/item/DanceStylesItem";
import { danceStyleItems } from "@/data/DanseStyles";
import { memo } from "react";
import "./DanceStyles.scss";

export const DanceStyles = memo(() => {
  return (
    <section className="dance-styles">
      <div className="dance-styles__wrapper wrapper-second">
        <h2 className="dance-styles__title">Dance Styles</h2>

        <div className="dance-styles__items">
          {danceStyleItems.map((item, index) => (
            <DanceStylesItem
              key={index}
              imageURL={item.imageURL}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
