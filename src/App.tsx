import { useState, FC } from "react";
import { Box, Container, Theme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { Home, Recipe } from "./views";
import { Appbar, Menu } from "./components";
import { drawerWidth } from "./core";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

const App: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  return (
    <Box>
      <Appbar onClick={handleClick} />
      <Menu open={open} />
      <main className={`${classes.content} ${open && classes.contentShift}`}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipe" element={<Recipe />} />
          </Routes>
        </Container>
      </main>
    </Box>
  );
};

export default App;
