import { ReactNode } from "react";

export interface ICardProps {
  imageURL?: string;
  title?: string;
  subtitle?: string;
}

export interface IBandItemProps {
  image: ReactNode;
  title: string;
}
