import { FC, CSSProperties, useContext } from "react";

import { NeomorphColorVariant } from "core/theme";
import { makeStyles } from "@mui/styles";
import { Box, BoxTypeMap } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import clsx from "clsx";
import { getBoxShadow } from "core";
import { UIContext } from "contexts";

interface INeoContainer {
  styleOverride?: CSSProperties;
  shadowDepthX?: number;
  shadowDepthY?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  shadowIntensity?: number;
  invertedShadow?: boolean;
  scaleContentOnHover?: boolean;
}

export type NeoContainerType = OverrideProps<BoxTypeMap<{}, "div">, "div"> &
  INeoContainer;

const useClasses = (
  shadowValueX: number,
  shadowValueY: number,
  leftColor: string,
  rightColor: string,
  invertedShadow?: boolean
) => {
  const originalShadow = getBoxShadow([
    { shadowValueX, shadowValueY, color: leftColor, inset: invertedShadow },
    {
      shadowValueX: -shadowValueX,
      shadowValueY: -shadowValueY,
      color: rightColor,
      inset: invertedShadow,
    },
  ]);

  const animatedShadow = getBoxShadow([
    {
      shadowValueX: shadowValueX * 0.4,
      shadowValueY: shadowValueY * 0.4,
      color: leftColor,
      inset: invertedShadow,
    },
    {
      shadowValueX: -shadowValueX * 0.4,
      shadowValueY: -shadowValueY * 0.4,
      color: rightColor,
      inset: invertedShadow,
    },
  ]);
  return makeStyles(() => ({
    root: {
      boxShadow: originalShadow,
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: animatedShadow,
        transition: "box-shadow 0.3s ease-in-out",
      },
    },
    content: {
      transition: "transform .3s ease-in-out",
      "&:hover": {
        transform: "scale(1.01)",
      },
    },
  }))();
};

export const NeoContainer: FC<NeoContainerType> = ({
  styleOverride,
  fullWidth,
  fullHeight,
  shadowDepthX,
  shadowDepthY,
  shadowIntensity,
  children,
  invertedShadow,
  scaleContentOnHover,
  className,
  ...props
}) => {
  const { color, shadow } = useContext(UIContext);
  const { left, right } = NeomorphColorVariant[color](
    shadowIntensity ?? shadow.intensity
  );
  const classes = useClasses(
    shadowDepthX ?? shadow.shadowX,
    shadowDepthY ?? shadow.shadowY,
    left,
    right,
    invertedShadow
  );

  return (
    <Box
      className={`${classes.root} ${className}`}
      style={{
        width: fullWidth ? "100%" : "auto",
        height: fullHeight ? "100%" : "auto",
        borderRadius: 40,
        ...styleOverride,
      }}
      {...props}
    >
      <Box
        className={clsx({
          [classes.content]: scaleContentOnHover,
        })}
      >
        {children}
      </Box>
    </Box>
  );
};
