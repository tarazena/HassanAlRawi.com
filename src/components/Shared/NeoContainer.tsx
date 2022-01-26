import { FC, CSSProperties } from "react";

import { NeomorphColorVariant } from "core/theme";
import { Colors } from "core/interfaces";
import { makeStyles } from "@mui/styles";
import { Box, BoxTypeMap } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import clsx from "clsx";

interface INeoContainer {
  styleOverride?: CSSProperties;
  shadowDepthX?: number;
  shadowDepthY?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  shadowColor?: Colors;
  shadowIntensity?: number;
  invertedShadow?: boolean;
  scaleContentOnHover?: boolean;
}

export type NeoContainerType = OverrideProps<BoxTypeMap<{}, "div">, "div"> &
  INeoContainer;

const useClasses = (
  shadowDepthX: number,
  shadowDepthY: number,
  leftColor: string,
  rightColor: string,
  invertedShadow?: boolean
) =>
  makeStyles(() => ({
    root: {
      boxShadow: `${
        invertedShadow ? "inset " : ""
      }${shadowDepthX}px ${shadowDepthY}px ${Math.ceil(
        (shadowDepthX + shadowDepthY) / 2
      )}px ${leftColor},${
        invertedShadow ? "inset " : ""
      }-${shadowDepthX}px -${shadowDepthY}px ${Math.ceil(
        (shadowDepthX + shadowDepthY) / 2
      )}px ${rightColor}`,
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: `${invertedShadow ? "inset " : ""}${shadowDepthX * 0.4}px ${
          shadowDepthY * 0.4
        }px ${Math.ceil(
          (shadowDepthX * 0.4 + shadowDepthY * 0.4) / 2
        )}px ${leftColor},${invertedShadow ? "inset " : ""}-${
          shadowDepthX * 0.4
        }px -${shadowDepthY * 0.4}px ${Math.ceil(
          (shadowDepthX * 0.4 + shadowDepthY * 0.4) / 2
        )}px ${rightColor}`,
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

export const NeoContainer: FC<NeoContainerType> = ({
  styleOverride,
  fullWidth,
  fullHeight,
  shadowDepthX = 15,
  shadowDepthY = 15,
  shadowColor = "AthensGray",
  shadowIntensity = 0.15,
  children,
  invertedShadow,
  scaleContentOnHover,
  ...props
}) => {
  const { left, right } = NeomorphColorVariant[shadowColor](shadowIntensity);
  const classes = useClasses(
    shadowDepthX,
    shadowDepthY,
    left,
    right,
    invertedShadow
  );

  return (
    <Box
      className={classes.root}
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
