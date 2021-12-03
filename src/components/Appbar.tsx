import { FC } from "react";
import { AppBar, Grid, Theme, Toolbar } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import { colors } from "theme";
import { NeoButton, NeoIconButton } from "components";
import { drawerWidth } from "core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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

interface IAppBar {
  onClick: () => void;
}

export const Appbar: FC<IAppBar> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        className={`${classes.appBar}`}
      >
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between">
            <NeoIconButton onClick={onClick}>
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
