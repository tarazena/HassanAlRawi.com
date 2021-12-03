import { CSSProperties, FC } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { NeoContainer } from "components";
import { colors } from "theme";

interface INeoButton {
  styleOverride?: CSSProperties;
}

const useClasses = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export const NeoButton: FC<INeoButton> = ({ children, styleOverride }) => {
  const classes = useClasses();
  return (
    <Button
      color="inherit"
      style={{
        borderRadius: 69,
      }}
      className={classes.root}
    >
      <NeoContainer
        shadowDepthX={6}
        shadowDepthY={6}
        styleOverride={{
          padding: 10,
          color: colors.EasternBlue,
          ...styleOverride,
        }}
      >
        {children}
      </NeoContainer>
    </Button>
  );
};
