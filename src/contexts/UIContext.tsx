import { createContext, FC, useCallback, useState } from "react";

interface IUIContext {
  toggleDrawer: (value?: boolean) => void;
  drawerOpen: boolean;
}

export const UIContext = createContext<IUIContext>({
  drawerOpen: false,
  toggleDrawer: () => undefined,
});

export const UIContextProvider: FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(
    (value?: boolean) => {
      setOpen(value || !open);
    },
    [open]
  );

  return (
    <UIContext.Provider value={{ drawerOpen: open, toggleDrawer }}>
      {children}
    </UIContext.Provider>
  );
};
