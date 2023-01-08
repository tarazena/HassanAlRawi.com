import { FC } from "react";
import { Button, ButtonTypeMap } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { OverrideProps } from "@mui/material/OverridableComponent";
import { ComponentWithChildren } from "core";

type NeoButtonType = OverrideProps<ButtonTypeMap<{}, "button">, "button">;

const useClasses = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export const NeoButton: FC<NeoButtonType & ComponentWithChildren> = ({
  children,
  className,
  style,
  ...rest
}) => {
  const classes = useClasses();
  return (
    <Button
      color="inherit"
      style={{
        borderRadius: 69,
        ...style,
      }}
      className={`${classes.root} ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};
