import { AnimatedButton } from "@/components/elements/buttons/animated/AnimatedButton";
import { ButtonHTMLAttributes, memo } from "react";
import "./AnchorButton.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  textAlign?: AlignSetting;
  isUnderlined?: boolean;
  scrollTo: string;
}

export const AnchorButton = memo((props: IProps) => {
  const {
    title,
    textAlign = "center",
    isUnderlined = true,
    scrollTo,
    className = "",
    ...rest
  } = props;

  const getOptionalClasses = () => {
    return `${isUnderlined && "anchor__button--underline"} anchor__button--${textAlign}`;
  };

  return (
    <AnimatedButton
      onClick={() =>
        document.getElementsByClassName(scrollTo)[0].scrollIntoView({ behavior: "smooth" })
      }
      className={`anchor__button ${getOptionalClasses()} ${className}`}
      labelText={title}
      hoverText={title}
      {...rest}
    />
  );
});
