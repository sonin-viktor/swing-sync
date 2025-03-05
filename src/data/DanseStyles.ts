import image1_mobile from "/assets/img/dance-styles/mobile/1.webp";
import image2_mobile from "/assets/img/dance-styles/mobile/2.webp";
import image3_mobile from "/assets/img/dance-styles/mobile/3.webp";
import image4_mobile from "/assets/img/dance-styles/mobile/4.webp";
import image1_tablet from "/assets/img/dance-styles/tablet/1.webp";
import image2_tablet from "/assets/img/dance-styles/tablet/2.webp";
import image3_tablet from "/assets/img/dance-styles/tablet/3.webp";
import image4_tablet from "/assets/img/dance-styles/tablet/4.webp";
import image1 from "/assets/img/dance-styles/1.webp";
import image2 from "/assets/img/dance-styles/2.webp";
import image3 from "/assets/img/dance-styles/3.webp";
import image4 from "/assets/img/dance-styles/4.webp";
import { isMobile, isTablet } from "@/utils/helpers/devices";
import { ICardProps } from "@/types/i.cards";

export const danceStyleItems: ICardProps[] = [
  {
    imageURL: isMobile() ? image1_mobile : isTablet() ? image1_tablet : image1,
    title: "Electro Lindy",
    subtitle: "Fusing Classic Lindy Hop Moves with Modern Electronic Beats"
  },
  {
    imageURL: isMobile() ? image2_mobile : isTablet() ? image2_tablet : image2,
    title: "Swing Hous",
    subtitle: "Where Swing Meets House Music"
  },
  {
    imageURL: isMobile() ? image3_mobile : isTablet() ? image3_tablet : image3,
    title: "Electro Charleston",
    subtitle: "The Charleston with an Electrifying Twist"
  },
  {
    imageURL: isMobile() ? image4_mobile : isTablet() ? image4_tablet : image4,
    title: "Swing Hop",
    subtitle: "A Fusion of Hip-Hop and Swing Dance Moves"
  }
];
