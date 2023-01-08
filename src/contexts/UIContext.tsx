import { Colors, ComponentWithChildren } from "core";
import { createContext, FC, useCallback, useState } from "react";

interface IUIContext {
  toggleDrawer: (value?: boolean) => void;
  drawerOpen: boolean;
  shadow: ShadowState;
  color: Colors;
  setShadows: (newShadow: ShadowState) => void;
  setColor: (color: Colors) => void;
}

interface ShadowState {
  shadowX: number;
  shadowY: number;
  intensity: number;
}

export const UIContext = createContext<IUIContext>({
  drawerOpen: false,
  toggleDrawer: () => undefined,
  setShadows: () => undefined,
  setColor: () => undefined,
  shadow: {
    shadowX: 15,
    shadowY: 15,
    intensity: 0.15,
  },
  color: "EasternBlue",
});

export const UIContextProvider: FC<ComponentWithChildren> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [shadowData, setShadowsState] = useState<ShadowState>({
    shadowX: 15,
    shadowY: 15,
    intensity: 0.15,
  });
  const [color, setColorState] = useState<Colors>('AthensGray');

  const setColor = useCallback((newColor: Colors) => {
    setColorState(newColor);
  }, []);

  const setShadows = useCallback((newShadow: ShadowState) => {
    setShadowsState(newShadow);
  }, []);

  const toggleDrawer = useCallback(
    (value?: boolean) => {
      setDrawerOpen(value || !drawerOpen);
    },
    [drawerOpen]
  );

  return (
    <UIContext.Provider
      value={{
        drawerOpen,
        toggleDrawer,
        shadow: shadowData,
        color,
        setColor,
        setShadows,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
