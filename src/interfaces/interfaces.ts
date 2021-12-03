import { colors } from "theme";

export interface ITextType {
  text: string;
  type: "text" | "emoji";
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
