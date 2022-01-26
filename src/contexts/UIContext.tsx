import { createContext, FC, useCallback, useState } from "react";

interface IUIContext {
  toggleDrawer: (value?: boolean) => void;
  drawerOpen: boolean;
  activeSlide: number;
  setActiveSlide: (value: number) => void;
}

export const UIContext = createContext<IUIContext>({
  drawerOpen: false,
  toggleDrawer: () => undefined,
  activeSlide: 0,
  setActiveSlide: () => undefined,
});

export const UIContextProvider: FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [activeSlide, setSlide] = useState(0);

  const toggleDrawer = useCallback(
    (value?: boolean) => {
      setDrawerOpen(value || !drawerOpen);
    },
    [drawerOpen]
  );

  const setActiveSlide = useCallback(
    (value: number) => {
      setSlide(value);
    },
    [setSlide]
  );

  return (
    <UIContext.Provider
      value={{ drawerOpen, toggleDrawer, setActiveSlide, activeSlide }}
    >
      {children}
    </UIContext.Provider>
  );
};
