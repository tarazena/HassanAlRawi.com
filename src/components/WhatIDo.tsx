import { Grid, Typography } from "@mui/material";
import { WHAT_I_DO } from "core";
import { FC } from "react";
import { NeoContainer } from "./Shared";

export const WhatIDo: FC = () => {
  return (
    <Grid
      container
      my={5}
      alignContent={"center"}
      justifyContent={"center"}
      spacing={4}
    >
      <Grid item container xs={12} justifyContent={"center"}>
        <Typography variant="h4">What I Do</Typography>
      </Grid>
      {WHAT_I_DO.map(({ title, imageUrl, text }, index) => (
        <Grid item xs={12} sm={4} key={`what-i-do-${index}`} p={3}>
          <NeoContainer styleOverride={{ padding: 20 }} fullHeight>
            <Grid
              container
              direction={"column"}
              justifyItems={"center"}
              alignItems={"center"}
            >
              <img
                src={imageUrl}
                alt="icon"
                style={{ height: 64, width: 64 }}
              />
              <Typography variant="h6" py={1}>
                {title}
              </Typography>
              <Typography variant="body1">{text}</Typography>
            </Grid>
          </NeoContainer>
        </Grid>
      ))}
    </Grid>
  );
};
