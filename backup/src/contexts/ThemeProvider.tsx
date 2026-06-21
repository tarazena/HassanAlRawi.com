import { FC, useContext } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "../core/theme";
import { UIContext } from "./UIContext";
import { ComponentWithChildren } from "core";

export const ThemeProvider: FC<ComponentWithChildren> = ({ children }) => {
  const { color } = useContext(UIContext);
  return (
    <MuiThemeProvider theme={theme(color)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
