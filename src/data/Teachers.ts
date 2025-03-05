import image1 from "/assets/img/teachers/1.webp";
import image2 from "/assets/img/teachers/2.webp";
import image3 from "/assets/img/teachers/3.webp";
import image4 from "/assets/img/teachers/4.webp";
import { ICardProps } from "@/types/i.cards";

export const teacherItems: ICardProps[] = [
  {
    imageURL: image1,
    title: 'Eleanor "Ellie" Sparks',
    subtitle: "Lead Swing Instructor"
  },
  {
    imageURL: image2,
    title: 'Liam "The Beat" Carter',
    subtitle: "Electroswing Choreographer"
  },
  {
    imageURL: image3,
    title: "Sophie Novak",
    subtitle: "Neoswing Specialist"
  },
  {
    imageURL: image4,
    title: 'Jack "Jazzman" Rivers',
    subtitle: "Rhythm and Musicality Coach"
  }
];
