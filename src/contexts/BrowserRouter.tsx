import { FC } from "react";
import { BrowserRouter as ReactRouter } from "react-router-dom";

export const RouterProvider: FC = ({ children }) => (
  <ReactRouter>{children}</ReactRouter>
);
