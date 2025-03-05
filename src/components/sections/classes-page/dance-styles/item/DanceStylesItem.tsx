import { AnchorButton } from "@/components/elements/buttons/anchor/AnchorButton";
import { ICardProps } from "@/types/i.cards";
import "./DanceStylesItem.scss";
import { memo } from "react";

export const DanceStylesItem = memo(({ imageURL, title, subtitle }: ICardProps) => {
  return (
    <div className="dance-style__item ">
      <img src={imageURL} alt={title} className="dance-style__img" />

      <div className="dance-style__container">
        <h3 className="dance-style__title">{title}</h3>
        <p className="dance-style__desc">{subtitle}</p>

        <AnchorButton
          title="Let’s get into!"
          textAlign="left"
          className="dance-style__anchor"
          scrollTo="form-section"
        />
      </div>
    </div>
  );
});
