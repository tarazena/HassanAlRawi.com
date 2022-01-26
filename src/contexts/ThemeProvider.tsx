import { FC } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "../core/theme";

export const ThemeProvider: FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
