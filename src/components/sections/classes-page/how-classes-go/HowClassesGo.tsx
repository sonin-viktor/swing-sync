import { AnchorButton } from "@/components/elements/buttons/anchor/AnchorButton";
import { memo } from "react";
import "./HowClassesGo.scss";

export const HowClassesGo = memo(() => {
  return (
    <section className="classes-go">
      <div className="classes-go__wrapper wrapper-third">
        <h1 className="classes-go__title">How Our Classes Go</h1>
        <p className="classes-go__subtitle">
          At SwingSync, learning happens in the real world! Join our offline classes to experience
          the energy of Neoswing firsthand. Master the basics with in‑person guidance. Connect with
          fellow enthusiasts and dance as a community. Feel the rhythm and flow in a vibrant,
          supportive environment. Step onto the dance floor and bring Neoswing to life with us!
        </p>
        <AnchorButton title="Explore more" scrollTo="dance-styles" />
      </div>
    </section>
  );
});
