import { InputHTMLAttributes, memo } from "react";
import "./TextField.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string;
}

export const TextField = memo(({ errorMessage, ...rest }: IProps) => {
  return (
    <label>
      <input className={`text-field ${errorMessage && "text-field--error"}`} {...rest} />

      {errorMessage && <div className="text-field__error-message">{errorMessage}</div>}
    </label>
  );
});
