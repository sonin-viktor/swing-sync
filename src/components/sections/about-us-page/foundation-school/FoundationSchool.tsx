import { AnchorButton } from "@/components/elements/buttons/anchor/AnchorButton";
import "./FoundationSchool.scss";
import { memo } from "react";

export const FoundationSchool = memo(() => {
  return (
    <section className="foundation">
      <div className="foundation__wrapper wrapper-third">
        <h1 className="foundation__title">Foundation Of Our School</h1>

        <p className="foundation__subtitle">
          SwingSync was born out of a love for movement and music. It all started with a small group
          of dancers who were captivated by the vibrant energy of swing and the modern pulse of
          electroswing. What began as casual meetups to share steps and styles soon grew into
          something greater—a vision to make Neoswing accessible to everyone.
        </p>

        <p className="foundation__subtitle foundation__subtitle--offset-big">
          Guided by the belief that dance is more than just movement—it’s a way to connect, express,
          and transform—we opened SwingSync. Today, our school brings people together, celebrating
          the charm of vintage swing and the excitement of its modern revival. Step into our world
          and write your own story with the rhythm of Neoswing!
        </p>

        <AnchorButton title="Explore more" scrollTo="teachers" />
      </div>
    </section>
  );
});
