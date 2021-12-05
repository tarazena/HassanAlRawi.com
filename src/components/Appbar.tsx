import { FC, useContext } from "react";
import { AppBar, Grid, Theme, Toolbar } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import { colors } from "theme";
import { NeoButton, NeoIconButton } from "components";
import { drawerWidth } from "core";
import clsx from "clsx";
import { UIContext } from "contexts";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: `${theme.zIndex.drawer + 1} !important`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export const Appbar: FC = () => {
  const { drawerOpen, toggleDrawer } = useContext(UIContext);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between">
            <NeoIconButton onClick={() => toggleDrawer(!drawerOpen)}>
              <MenuSharp
                style={{
                  color: colors.EasternBlue,
                  display: "block",
                  margin: "auto",
                }}
              />
            </NeoIconButton>
            <NeoButton>Login</NeoButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
