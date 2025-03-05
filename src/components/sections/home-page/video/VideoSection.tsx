import { AnchorButton } from "@/components/elements/buttons/anchor/AnchorButton";
import { isTablet } from "@/utils/helpers/devices";
import "./VideoSection.scss";

export const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-section__wrapper wrapper-second">
        <div className="video-section__container">
          <h2 className="video-section__title">Experience Neoswing in Motion</h2>
          {!isTablet() && (
            <AnchorButton title="Let’s get into!" textAlign="left" scrollTo="form-section" />
          )}
        </div>

        <iframe
          title="Experience Neoswing in Motion"
          className="video-section__video"
          // src="https://www.youtube.com/embed/lH4ja-o31eU?si=EPY1KjxVxOPZBM-9"
          src="https://www.youtube.com/embed/HTjMaqu_OEM?si=0YROqGdivgDcBhS1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        />

        {isTablet() && (
          <AnchorButton title="Let’s get into!" textAlign="left" scrollTo="form-section" />
        )}
      </div>
    </section>
  );
};
