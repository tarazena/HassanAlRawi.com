import { FC } from "react";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { NeoContainer } from "components";

interface INeoIconButton {
  onClick: () => void;
}

const useClasses = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export const NeoIconButton: FC<INeoIconButton> = ({ children, onClick }) => {
  const classes = useClasses();
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={onClick}
      className={classes.root}
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
