import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { NeomorphColorVariant } from "theme";

const useClasses = (
  shadowDepthX: number,
  shadowDepthY: number,
  leftColor: string,
  rightColor: string,
  transitionDelay: string
) =>
  makeStyles(() => ({
    root: {
      boxShadow: `${shadowDepthX}px ${shadowDepthY}px ${Math.ceil(
        (shadowDepthX + shadowDepthY) / 2
      )}px ${leftColor},-${shadowDepthX}px -${shadowDepthY}px ${Math.ceil(
        (shadowDepthX + shadowDepthY) / 2
      )}px ${rightColor}`,
      minHeight: 30,
      borderRadius: 30,
      transitionDelay,
      transition: "box-shadow 1s ease-in-out, width 0.5s ease-in-out",
      width: "0%",
    },
    animated: {
      boxShadow: `${shadowDepthX * 0.4}px ${shadowDepthY * 0.4}px ${Math.ceil(
        (shadowDepthX * 0.4 + shadowDepthY * 0.4) / 2
      )}px ${leftColor},-${shadowDepthX * 0.4}px -${
        shadowDepthY * 0.4
      }px ${Math.ceil(
        (shadowDepthX * 0.4 + shadowDepthY * 0.4) / 2
      )}px ${rightColor}`,
      transition: "box-shadow 1s ease-in-out, width 0.5s ease-in-out",
      width: "100%",
    },
  }))();

interface INeoAnimator {
  delay: number;
}

export const NeoAnimator: FC<INeoAnimator> = ({ delay }) => {
  const { left, right } = NeomorphColorVariant["AthensGray"](0.15);
  const [a, setA] = useState(false);
  const classes = useClasses(15, 15, left, right, `${delay}s`);

  useEffect(() => {
    setTimeout(() => {
      setA(true);
    }, delay * 1000);
  }, [delay, setA]);
  return (
    <div
      className={clsx(classes.root, {
        [classes.animated]: a,
      })}
    />
  );
};
