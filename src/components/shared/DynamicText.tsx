import { FC, useContext, useEffect, useState } from "react";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { colors, NeomorphColorVariant } from "core/theme";
import { Colors, ITextType, Shadow } from "core/interfaces";
import { getBoxShadow } from "core";
import { UIContext } from "contexts";

interface IDynamicText {
  text: ITextType[];
}
const useStyles = ({ left, right }: Shadow, text: ITextType, color: Colors) => {
  const shadowValue = 6; // Shadow value

  const targetTextShadow = (shadowValue: number) =>
    getBoxShadow([
      {
        shadowValueX: shadowValue,
        shadowValueY: shadowValue,
        color: left,
      },
      {
        shadowValueX: -shadowValue,
        shadowValueY: -shadowValue,
        color: right,
      },
    ]);
  const initialTextShadow = getBoxShadow([
    { shadowValueX: 0, shadowValueY: 0, color: left },
    { shadowValueX: 0, shadowValueY: 0, color: right },
  ]);

  return makeStyles((theme: Theme) => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        marginTop: 20,
      },
    },
    animatedItem: {
      animation: `$textEffect 3000ms ${theme.transitions.easing.sharp}`,
      color: `${colors[color]} !important`,
      fontWeight: 900,
      [theme.breakpoints.down("sm")]: {
        animation: `$textEffectSmallScreen 3000ms ${theme.transitions.easing.sharp}`,
        fontSize: "48px !important",
      },
    },
    "@keyframes textEffect": {
      "0%": {
        textShadow: initialTextShadow,
      },
      "25%": {
        textShadow: targetTextShadow(shadowValue),
      },
      "75%": {
        textShadow: targetTextShadow(shadowValue),
      },
      "100%": {
        textShadow: initialTextShadow,
      },
    },
    "@keyframes textEffectSmallScreen": {
      "0%": {
        textShadow: initialTextShadow,
      },
      "25%": {
        textShadow: targetTextShadow(shadowValue / 2),
      },
      "75%": {
        textShadow: targetTextShadow(shadowValue / 2),
      },
      "100%": {
        textShadow: initialTextShadow,
      },
    },
  }))();
};

export const DynamicText: FC<IDynamicText> = ({ text }) => {
  const { color } = useContext(UIContext);
  const [currentText, setCurrentText] = useState(text[0]);
  const { left, right } = NeomorphColorVariant[color](0.3);

  const classes = useStyles({ left, right }, currentText, color);

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
    <span className={classes.root}>
      <Typography
        variant="h1"
        component="span"
        className={classes.animatedItem}
      >
        {currentText.text}
      </Typography>
    </span>
  );
};
