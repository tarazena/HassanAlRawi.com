import { ComponentWithChildren } from "core";
import { FC } from "react";
import { BrowserRouter as ReactRouter } from "react-router-dom";

export const RouterProvider: FC<ComponentWithChildren> = ({ children }) => (
  <ReactRouter>{children}</ReactRouter>
);
