import { FC } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { RouterProvider } from "./BrowserRouter";
import { UIContextProvider } from "contexts";
import { ComponentWithChildren } from "core";

export const ProvidersContext: FC<ComponentWithChildren> = ({ children }) => {
  return (
    <UIContextProvider>
      <ThemeProvider>
        <RouterProvider>{children}</RouterProvider>
      </ThemeProvider>
    </UIContextProvider>
  );
};
