import { FC } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { RouterProvider } from "./BrowserRouter";
import { UIContextProvider } from "contexts";

export const ProvidersContext: FC = ({ children }) => {
  return (
    <UIContextProvider>
      <ThemeProvider>
        <RouterProvider>{children}</RouterProvider>
      </ThemeProvider>
    </UIContextProvider>
  );
};
