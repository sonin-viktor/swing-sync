import { ICardProps } from "@/types/i.cards";
import "./MeaningItem.scss";

interface IProps extends ICardProps {
  number: number;
}

export const MeaningItem = ({ number, title, subtitle }: IProps) => {
  return (
    <div className="event-step">
      <div className="event-step__wrapper">
        <h4 className="event-step__number">{number}</h4>
        <h4 className="event-step__title">{title}</h4>
        <p className="event-step__desc">{subtitle}</p>
      </div>

      <div className="event-step__border"></div>
    </div>
  );
};
