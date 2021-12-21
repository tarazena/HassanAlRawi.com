import {
  createContext,
  FC,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";

interface IUIContext {
  toggleDrawer: (value?: boolean) => void;
  drawerOpen: boolean;
  scrollLocation: number;
}

export const UIContext = createContext<IUIContext>({
  drawerOpen: false,
  toggleDrawer: () => undefined,
  scrollLocation: 0,
});

export const UIContextProvider: FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollLocation, setScrollLocation] = useState(0);

  const toggleDrawer = useCallback(
    (value?: boolean) => {
      setOpen(value || !open);
    },
    [open]
  );

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollLocation(position);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <UIContext.Provider
      value={{ drawerOpen: open, toggleDrawer, scrollLocation }}
    >
      {children}
    </UIContext.Provider>
  );
};
