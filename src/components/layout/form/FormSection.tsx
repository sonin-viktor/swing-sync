import imageRight from "/assets/img/form-right.webp";
import imageLeft from "/assets/img/form-left.webp";
import { Form } from "@/components/elements/form/Form";
import { isTablet } from "@/utils/helpers/devices";
import "./FormSection.scss";

export const FormSection = () => {
  return (
    <section className="form-section">
      <div className="form-section__wrapper wrapper-first">
        <div className="form-section__inner-top">
          <h2 className="form-section__title">
            Stay Connected with <span className="text--red">SwingSync</span>
          </h2>
          <p className="form-section__subtitle">We call you back in 30 minutes.</p>
        </div>

        <div className="form-section__inner-bottom">
          {!isTablet() && (
            <img
              src={imageLeft}
              alt="Stay Connected with SwingSync"
              className="form-section__image"
            />
          )}

          <Form className="form-section__form" />

          {!isTablet() && (
            <img
              src={imageRight}
              alt="Stay Connected with SwingSync"
              className="form-section__image"
            />
          )}
        </div>
      </div>
    </section>
  );
};
