import { FC, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

import { Home, Recipe } from "./views";
// import { Appbar, Menu } from "./components";
import { drawerWidth } from "./core";
import { UIContext } from "contexts";
import { Container, Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    paddingBottom: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    paddingBottom: 0,
  },
}));

const App: FC = () => {
  const { drawerOpen } = useContext(UIContext);

  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: drawerOpen,
      })}
    >
      <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipe" element={<Recipe />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
