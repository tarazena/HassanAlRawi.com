import { FC, CSSProperties } from "react";

import { NeomorphColorVariant } from "theme";
import { Colors } from "interfaces";
import { makeStyles } from "@mui/styles";

interface INeoContainer {
  styleOverride?: CSSProperties;
  shadowDepthX?: number;
  shadowDepthY?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  shadowColor?: Colors;
  shadowIntensity?: number;
}

const useClasses = (
  shadowDepthX: number,
  shadowDepthY: number,
  leftColor: string,
  rightColor: string
) =>
  makeStyles(() => ({
    root: {
      boxShadow: `${shadowDepthX}px ${shadowDepthY}px ${Math.ceil(
        (shadowDepthX + shadowDepthY) / 2
      )}px ${leftColor},-${shadowDepthX}px -${shadowDepthY}px ${Math.ceil(
        (shadowDepthX + shadowDepthY) / 2
      )}px ${rightColor}`,
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: `${shadowDepthX * 0.4}px ${shadowDepthY * 0.4}px ${Math.ceil(
          (shadowDepthX * 0.4 + shadowDepthY * 0.4) / 2
        )}px ${leftColor},-${shadowDepthX * 0.4}px -${
          shadowDepthY * 0.4
        }px ${Math.ceil(
          (shadowDepthX * 0.4 + shadowDepthY * 0.4) / 2
        )}px ${rightColor}`,
        transition: "box-shadow 0.3s ease-in-out",
      },
    },
  }))();

export const NeoContainer: FC<INeoContainer> = ({
  styleOverride,
  children,
  fullWidth,
  fullHeight,
  shadowDepthX = 15,
  shadowDepthY = 15,
  shadowColor = "AthensGray",
  shadowIntensity = 0.15,
}) => {
  const { left, right } = NeomorphColorVariant[shadowColor](shadowIntensity);
  const classes = useClasses(shadowDepthX, shadowDepthY, left, right);

  return (
    <div
      className={`${classes.root}`}
      style={{
        width: fullWidth ? "100%" : "auto",
        height: fullHeight ? "100%" : "auto",
        borderRadius: 40,
        ...styleOverride,
      }}
    >
      {children}
    </div>
  );
};
