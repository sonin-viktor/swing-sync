import { AnchorButton } from "@/components/elements/buttons/anchor/AnchorButton";
import { ICardProps } from "@/types/i.cards";
import "./AdvantagesItem.scss";

export const AdvantagesItem = ({ imageURL, title, subtitle }: ICardProps) => {
  return (
    <div className="advantage__item">
      <div className="advantage__inner">
        <img src={imageURL} alt={title} className="advantage__img" />
        <h3 className="advantage__title">{title}</h3>

        <div className="advantage__container">
          <p className="advantage__desc">{subtitle}</p>

          <AnchorButton
            title="Let’s get into!"
            className="advantage__anchor"
            scrollTo="form-section"
          />
        </div>
      </div>
    </div>
  );
};
