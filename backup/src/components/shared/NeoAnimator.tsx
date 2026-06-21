import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { NeomorphColorVariant } from "core/theme";
import { getBoxShadow } from "core";

const useClasses = (
  shadowValueX: number,
  shadowValueY: number,
  leftColor: string,
  rightColor: string,
  transitionDelay?: string
) =>
  makeStyles(() => {
    const originalShadow = getBoxShadow([
      { shadowValueX, shadowValueY, color: leftColor },
      {
        shadowValueX: -shadowValueX,
        shadowValueY: -shadowValueY,
        color: rightColor,
      },
    ]);

    const animatedShadow = getBoxShadow([
      {
        shadowValueX: shadowValueX * 0.4,
        shadowValueY: shadowValueY * 0.4,
        color: leftColor,
      },
      {
        shadowValueX: -shadowValueX * 0.4,
        shadowValueY: -shadowValueY * 0.4,
        color: rightColor,
      },
    ]);
    return {
      root: {
        boxShadow: originalShadow,
        minHeight: 30,
        borderRadius: 30,
        transitionDelay,
        transition: "box-shadow 1s ease-in-out, width 0.5s ease-in-out",
        width: "0%",
      },
      animated: {
        boxShadow: animatedShadow,
        transition: "box-shadow 1s ease-in-out, width 0.5s ease-in-out",
        width: "100%",
      },
    };
  })();

interface IDelayNeoAnimator {
  delay: number;
}

export const DelayNeoAnimator: FC<IDelayNeoAnimator> = ({ delay }) => {
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

interface IActiveNeoAnimator {
  trigger: boolean;
}

export const ActiveNeoAnimator: FC<IActiveNeoAnimator> = ({ trigger }) => {
  const { left, right } = NeomorphColorVariant["AthensGray"](0.15);
  const [a, setA] = useState(false);
  const classes = useClasses(15, 15, right, left);

  useEffect(() => {
    setA(trigger);
  }, [trigger, setA]);

  return (
    <div
      className={clsx(classes.root, {
        [classes.animated]: a,
      })}
    />
  );
};
