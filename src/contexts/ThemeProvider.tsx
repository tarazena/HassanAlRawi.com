import { FC, useContext } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "../core/theme";
import { UIContext } from "./UIContext";

export const ThemeProvider: FC = ({ children }) => {
  const { color } = useContext(UIContext);
  return (
    <MuiThemeProvider theme={theme(color)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
