import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Inbox, Mail } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import { drawerWidth } from "core";
import { colors } from "theme";
import { NeoContainer } from "components";
import { UIContext } from "contexts";

const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: `${colors.AthensGray} !important`,
    border: "none",
    borderRight: "none !important",
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

export const Menu: FC = () => {
  const { drawerOpen } = useContext(UIContext);

  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      open={drawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <NeoContainer
              key={text}
              shadowDepthX={3}
              shadowDepthY={3}
              styleOverride={{
                margin: "15px 25px 15px 0px",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              <ListItem
                className={classes.root}
                button
                style={{
                  borderTopRightRadius: 40,
                  borderBottomRightRadius: 40,
                }}
                onClick={() => navigate("/")}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </NeoContainer>
          ))}
        </List>
      </div>
    </Drawer>
  );
};
