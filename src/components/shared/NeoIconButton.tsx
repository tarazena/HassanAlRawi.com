import { CSSProperties, FC } from "react";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { NeoContainer } from "components";
import { ComponentWithChildren } from "core";

interface INeoIconButton {
  onClick: () => void;
  style?: CSSProperties;
}

const useClasses = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export const NeoIconButton: FC<INeoIconButton & ComponentWithChildren> = ({
  children,
  onClick,
  style,
}) => {
  const classes = useClasses();
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={onClick}
      className={classes.root}
      style={style}
    >
      <NeoContainer
        shadowDepthY={6}
        shadowDepthX={6}
        styleOverride={{
          padding: 10,
        }}
      >
        {children}
      </NeoContainer>
    </IconButton>
  );
};
