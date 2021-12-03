import { FC } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { RouterProvider } from "./BrowserRouter";

export const ProvidersContext: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <RouterProvider>{children}</RouterProvider>
    </ThemeProvider>
  );
};
