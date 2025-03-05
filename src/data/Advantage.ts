import image1_mobile from "/assets/img/advantage/mobile/1.webp";
import image2_mobile from "/assets/img/advantage/mobile/2.webp";
import image3_mobile from "/assets/img/advantage/mobile/3.webp";
import image4_mobile from "/assets/img/advantage/mobile/4.webp";
import image1 from "/assets/img/advantage/1.webp";
import image2 from "/assets/img/advantage/2.webp";
import image3 from "/assets/img/advantage/3.webp";
import image4 from "/assets/img/advantage/4.webp";
import { ICardProps } from "@/types/i.cards";
import { isMobile } from "@/utils/helpers/devices";

export const advantageItems: ICardProps[] = [
  {
    imageURL: isMobile() ? image1_mobile : image1,
    title: "Stay Fit and Energized",
    subtitle:
      "Dancing improves cardiovascular health, boosts stamina, and helps you stay in shape—all while having fun!"
  },
  {
    imageURL: isMobile() ? image2_mobile : image2,
    title: "Enhance Your Coordination",
    subtitle:
      "Neoswing trains your balance, agility, and rhythm, making you more confident in your movements."
  },
  {
    imageURL: isMobile() ? image3_mobile : image3,
    title: "Relieve Stress",
    subtitle:
      "Lose yourself in the music and let go of stress as dance becomes your perfect mental escape."
  },
  {
    imageURL: isMobile() ? image4_mobile : image4,
    title: "Boost Your Confidence",
    subtitle:
      "Mastering new moves empowers you, helping you express yourself and shine on the dance floor."
  }
];
