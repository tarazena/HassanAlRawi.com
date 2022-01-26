import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { colors } from "core/theme";

export interface ITextType {
  text: string;
  type: "text" | "emoji";
}

export interface IHeader {
  title: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  logo: string;
  url: string;
}

export interface ILink {
  icon: IconDefinition;
  link: string;
}
export interface IWhatIdDoData {
  imageUrl: string;
  title: string;
  text: string;
}

export type Colors = keyof typeof colors;

export interface NeomorphType {
  left: string;
  right: string;
}

export interface Shadow {
  left: string;
  right: string;
}
