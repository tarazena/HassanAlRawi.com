import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FC } from "react";

import { DynamicText, NeoContainer, PillContainer } from "./Shared";
import { HERO_TEXT, PUBLIC_LINKS } from "core";

export const Hero: FC = () => (
  <Stack
    justifyContent="center"
    alignItems="center"
    style={{ height: "100vh" }}
  >
    <NeoContainer
      styleOverride={{
        padding: "20px 40px",
        margin: 12,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" textAlign={"center"}>
        Hassan Al Rawi
      </Typography>
    </NeoContainer>
    <Box py={6}>
      <DynamicText text={HERO_TEXT} />
    </Box>
    <Grid
      direction={"row"}
      container
      justifyContent={"center"}
      style={{ marginTop: 20 }}
    >
      <PillContainer py={1} invertedShadow shadowDepthX={6} shadowDepthY={6}>
        {PUBLIC_LINKS.map(({ icon, link }, index) => (
          <IconButton
            key={`icon-button-${index}`}
            style={{ margin: "0px 10px" }}
            href={link}
            target="_blank"
          >
            <FontAwesomeIcon icon={icon} style={{ margin: 5 }} />
          </IconButton>
        ))}
      </PillContainer>
    </Grid>
  </Stack>
);
