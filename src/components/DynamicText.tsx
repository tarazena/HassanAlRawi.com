import { FC, useEffect, useState } from "react";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

import { colors, NeomorphColorVariant } from "theme";
import { ITextType, Shadow } from "interfaces";

interface IDynamicText {
  text: ITextType[];
}
const useStyles = ({ left, right }: Shadow, text: ITextType) => {
  const s = 6; // Shadow value

  const targetTextShadow = `${s}px ${s}px ${Math.ceil(
    (s + s) / 2
  )}px ${left},-${s}px -${s}px ${Math.ceil((s + s) / 2)}px ${right}`;

  const initialTextShadow = `${0}px ${0}px ${Math.ceil(
    (0 + 0) / 2
  )}px ${left},-${0}px -${0}px ${Math.ceil((0 + 0) / 2)}px ${right}`;

  return makeStyles((theme: Theme) => ({
    animatedItem: {
      animation: `$textEffect 3000ms ${theme.transitions.easing.easeInOut}`,
      color: colors.AthensGray,
      fontWeight: 900,
      [theme.breakpoints.down("sm")]: {
        fontSize: 50,
      },
    },
    emoji: {
      color: "inherit",
      fontSize: 58,
      "&::before": {
        color: "transparent",
        textShadow: `0 0 0 ${colors.AthensGray}`,
        position: "absolute",
        fontSize: parseInt(theme.typography.h1.fontSize?.toString() || "0") + 2,
        content: `'${text.text}'`,
        zIndex: -1,
      },
    },
    "@keyframes textEffect": {
      "0%": {
        textShadow: initialTextShadow,
      },
      "25%": {
        textShadow: targetTextShadow,
      },
      "75%": {
        textShadow: targetTextShadow,
      },
      "100%": {
        textShadow: initialTextShadow,
      },
    },
  }))();
};

export const DynamicText: FC<IDynamicText> = ({ text }) => {
  const [currentText, setCurrentText] = useState(text[0]);
  const { left, right } = NeomorphColorVariant["AthensGray"](0.3);

  const classes = useStyles({ left, right }, currentText);

  useEffect(() => {
    setTimeout(() => {
      const index = text.indexOf(currentText);
      switch (index) {
        case -1:
        case text.length - 1:
          setCurrentText(text[0]);
          break;
        default:
          setCurrentText(text[index + 1]);
          break;
      }
    }, 5000);
  }, [text, currentText]);

  return (
    <span>
      {currentText.text.split("").map((l, i) => (
        <Typography
          variant="h1"
          key={`a${i}`}
          component="span"
          className={clsx(classes.animatedItem)}
          style={{ animationDelay: `${0.5 + i / 10}s` }}
        >
          {l}
        </Typography>
      ))}
    </span>
  );
};
