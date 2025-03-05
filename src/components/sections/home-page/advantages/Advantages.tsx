import { AdvantagesItem } from "./item/AdvantagesItem";
import { advantageItems } from "@/data/Advantage";
import "./Advantages.scss";

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__wrapper wrapper-second">
        <h2 className="advantages__title">
          Transform Your Body and Life with
          <span className="text--red"> Neoswing!</span>
        </h2>

        <div className="advantages__items">
          {advantageItems.map((item, index) => (
            <AdvantagesItem
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
};
