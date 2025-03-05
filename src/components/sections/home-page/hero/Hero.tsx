import { AnchorButton } from "@/components/elements/buttons/anchor/AnchorButton";
import image from "/assets/img/hero.webp";
import { memo } from "react";
import "./Hero.scss";

export const Hero = memo(() => {
  return (
    <section className="hero">
      <div className="hero__wrapper wrapper-third">
        <h1 className="hero__title">
          Explore The World Of <span className="text--red"> Neoswing</span>
        </h1>

        <p className="hero__subtitle">
          Unleash your passion for dance with SwingSync! Discover the electrifying fusion of vintage
          swing and modern beats. Join us and step into the rhythm of neoswing—where every move
          tells a story.
        </p>

        <AnchorButton title="Explore more" textAlign="right" scrollTo="meaning" />

        <img src={image} alt="Explore The World Of Neoswing" className="hero__photo" />
      </div>
    </section>
  );
});
