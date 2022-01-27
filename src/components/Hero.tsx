import { Box, Grid, IconButton, Stack, Theme, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FC } from "react";

import { DynamicText, NeoContainer, PillContainer } from "./shared";
import { HERO_TEXT, PUBLIC_LINKS } from "core";
import { makeStyles } from "@mui/styles";

const useClasses = makeStyles((theme: Theme) => ({
  textContainer: {
    padding: "20px 40px",
    margin: 12,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    "& h2": {
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.75rem !important",
      },
    },
  },
}));

export const Hero: FC = () => {
  const classes = useClasses();
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <NeoContainer className={classes.textContainer}>
        <Typography variant="h2" textAlign={"center"}>
          Hassan Al Rawi
        </Typography>
      </NeoContainer>
      <Box py={6}>
        <DynamicText text={HERO_TEXT} />
      </Box>
      <PillContainer invertedShadow shadowDepthX={6} shadowDepthY={6} mx={4}>
        <Grid direction={"row"} container py={1} justifyContent={"center"}>
          {PUBLIC_LINKS.map(({ icon, link }, index) => (
            <Grid
              item
              xs={4}
              sm={2}
              key={`icon-button-${index}`}
              container
              justifyContent={"center"}
            >
              <IconButton
                style={{ margin: "0px 10px" }}
                href={link}
                target="_blank"
              >
                <FontAwesomeIcon icon={icon} style={{ margin: 5 }} />
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </PillContainer>
    </Stack>
  );
};
