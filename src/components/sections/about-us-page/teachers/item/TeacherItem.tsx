import { AnchorButton } from "@/components/elements/buttons/anchor/AnchorButton";
import { ICardProps } from "@/types/i.cards";
import "./TeacherItem.scss";

export const TeacherItem = ({ imageURL, title, subtitle }: ICardProps) => {
  return (
    <div className="teacher__item">
      <img src={imageURL} alt={title} className="teacher__img" />

      <h6 className="teacher__title">{title}</h6>
      <p className="teacher__desc">{subtitle}</p>

      <AnchorButton
        title="Let’s get into!"
        textAlign="right"
        className="teacher__anchor"
        scrollTo="form-section"
      />
    </div>
  );
};
