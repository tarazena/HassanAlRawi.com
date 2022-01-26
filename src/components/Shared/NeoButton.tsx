import { FC, MouseEventHandler } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { NeoContainer, NeoContainerType } from "components";

interface INeoButton extends NeoContainerType {
  onClickEvent?: MouseEventHandler<HTMLButtonElement>;
}

const useClasses = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export const NeoButton: FC<INeoButton> = ({
  children,
  onClickEvent,
  ...neoContainerProps
}) => {
  const classes = useClasses();
  return (
    <Button
      color="inherit"
      style={{
        borderRadius: 69,
      }}
      onClick={onClickEvent}
      className={classes.root}
    >
      <NeoContainer {...neoContainerProps}>{children}</NeoContainer>
    </Button>
  );
};
