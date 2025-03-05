import { ChangeEventHandler, FormEventHandler, HTMLAttributes, memo, useState } from "react";
import { TextField } from "@/components/elements/text-field/TextField";
import "./Form.scss";

type TProps = HTMLAttributes<HTMLDivElement>;

interface IFormState {
  name: string;
  phone: string;
  nameErrorMessage: string;
  phoneErrorMessage: string;
  isSubmitted: boolean;
  isSuccess: boolean;
}

export const Form = memo(({ ...rest }: TProps) => {
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    phone: "",
    nameErrorMessage: "",
    phoneErrorMessage: "",
    isSubmitted: false,
    isSuccess: false
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    let isSuccess = false;

    if (formState.name.length > 1 && formState.phone.replace(/\D/g, "").length === 11) {
      isSuccess = true;

      // set data to server
    }

    checkAvailability({ ...formState, isSubmitted: true, isSuccess: isSuccess });
  };

  const checkAvailability = (state: IFormState) => {
    state = { ...state, phoneErrorMessage: "", nameErrorMessage: "" };
    const nameLength = state.name.length;
    const phoneLength = state.phone.replace(/\D/g, "").length;

    if (state.isSubmitted) {
      if (nameLength === 1) {
        state.nameErrorMessage = "Name must be at least 2 characters long.";
      } else if (nameLength === 0) {
        state.nameErrorMessage = "Name cannot be empty.";
      } else {
        state.nameErrorMessage = "";
      }

      if (phoneLength < 11 && phoneLength > 0) {
        state.phoneErrorMessage = "Phone number must be 11 digits long.";
      } else if (phoneLength === 0) {
        state.phoneErrorMessage = "Phone number cannot be empty.";
      }
    }

    setFormState(state);
  };

  const onNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let value = event.target.value;
    value = value.replace(/[^ a-zа-я]+/i, "");

    checkAvailability({ ...formState, name: value });
  };

  const onPhoneChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let value = event.target.value;

    if (formState.phone.endsWith(")")) {
      if (value.length <= formState.phone.length && value.charAt(-1) !== ")") {
        value = value.slice(0, -1);
      }
    }

    let cleaned = [...value.replace(/\D/g, "")];
    cleaned = cleaned.slice(0, 11);

    let formatted = value.includes("+") ? "+" : "";
    formatted += cleaned.slice(0, 1);
    formatted += cleaned.length > 1 ? "(" : "";
    formatted += cleaned.slice(1, 4).join("");
    formatted += cleaned.length > 4 ? ")" : "";
    formatted += cleaned.slice(4, 100).join("");

    checkAvailability({ ...formState, phone: formatted });
  };

  return (
    <section {...rest}>
      <form
        className={`form ${formState.isSuccess && "form--success"}`}
        id="form"
        onSubmit={onSubmit}
      >
        <TextField
          value={formState.name}
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          onChange={onNameChange}
          errorMessage={formState.nameErrorMessage}
          disabled={formState.isSuccess}
        />
        <TextField
          value={formState.phone}
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your phone"
          onChange={onPhoneChange}
          errorMessage={formState.phoneErrorMessage}
          disabled={formState.isSuccess}
        />

        <button
          type="submit"
          className={`form__button ${formState.isSuccess && "form__button--success"}`}
        >
          <span className="form__label-text">Let's get into!</span>
          <span className="form__success-text">We got you!</span>
        </button>
      </form>
    </section>
  );
});
