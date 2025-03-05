import { IBandItemProps } from "@/types/i.cards";
import "./BandItem.scss";

export const BandItem = ({ image, title }: IBandItemProps) => {
  return (
    <div className="band_item">
      <div className="band__img">{image}</div>

      <h5 className="band__title">{title}</h5>
    </div>
  );
};
