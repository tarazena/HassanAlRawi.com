import { createTheme } from "@mui/material";
import { Colors, NeomorphType } from "core/interfaces";

import { colors } from "./colors";

export const theme = (backgroundColor: Colors) =>
  createTheme({
    palette: {
      background: {
        default: colors[backgroundColor],
      },
    },
    typography: {
      allVariants: {
        fontFamily: "Manrope, sans-serif;",
        color: "rgba(0,0,0,0.6)",
      },
    },
  });

export const colorLuminance = (hex: string, lum: number) => {
  // validate hex string
  hex = hex.replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  let rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substring(c.length);
  }

  return rgb;
};

const neoMorphGen = (color: string, lum: number = 0.15): NeomorphType => ({
  left: colorLuminance(color, -lum),
  right: colorLuminance(color, lum),
});

export const NeomorphColorVariant: Record<
  Colors,
  (intensity?: number) => NeomorphType
> = {
  AthensGray: (intensity: number = 0.15) =>
    neoMorphGen(colors.AthensGray, intensity),
  EasternBlue: (intensity: number = 0.15) =>
    neoMorphGen(colors.EasternBlue, intensity),
  FrenchGray: (intensity: number = 0.15) =>
    neoMorphGen(colors.FrenchGray, intensity),
  MorningGlory: (intensity: number = 0.15) =>
    neoMorphGen(colors.MorningGlory, intensity),
  TexasRose: (intensity: number = 0.15) =>
    neoMorphGen(colors.TexasRose, intensity),
};
