import { FC } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { RouterProvider } from "./BrowserRouter";
import { UIContextProvider } from "contexts";

export const ProvidersContext: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <RouterProvider>
        <UIContextProvider>{children}</UIContextProvider>
      </RouterProvider>
    </ThemeProvider>
  );
};
