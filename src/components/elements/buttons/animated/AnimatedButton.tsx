import { ButtonHTMLAttributes, memo } from "react";
import "./AnimatedButton.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  labelText: string;
  hoverText: string;
}

export const AnimatedButton = memo(({ labelText, hoverText, className = "", ...rest }: IProps) => {
  return (
    <button className={`anim-button ${className}`} {...rest}>
      <div className="anim-button__label-text">{labelText}</div>
      <div className="anim-button__hover-text">{hoverText}</div>
    </button>
  );
});
