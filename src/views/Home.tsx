import { FC, useContext } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { ActiveNeoAnimator, DynamicText, NeoContainer } from "components";
import { ITextType } from "interfaces";
import { UIContext } from "contexts";

export const Home: FC = () => {
  const text: ITextType[] = [
    { text: "An Engineer", type: "text" },
    // { text: "🚀", type: "emoji" },
    { text: "A Designer", type: "text" },
    // { text: "❤️", type: "emoji" },
    { text: "A Developer", type: "text" },
    // { text: "👍", type: "emoji" },
    { text: "A Musician", type: "text" },
    // { text: "🎸", type: "emoji" },
  ];

  return (
    <Box maxHeight="100%" style={{ paddingTop: 100 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={5}>
          <NeoContainer styleOverride={{ padding: "10px 40px 20px" }}>
            <Typography variant="h2" textAlign={"end"}>
              Hi, my name is Hassan, I'm
            </Typography>
          </NeoContainer>
        </Grid>
        <Grid container item xs={12} sm={7} justifyContent="start" pl={5}>
          <DynamicText text={text} />
        </Grid>
      </Grid>
      <Animation1 />
    </Box>
  );
};

const Animation1: FC = () => {
  const { scrollLocation } = useContext(UIContext);

  return (
    <Grid container item xs={12}>
      {new Array(6).fill("").map((_c, i) => (
        <Grid
          key={`l${i}`}
          container
          item
          xs={12}
          sm={12}
          mt={i === 0 ? 20 : 0}
          py={1}
          justifyContent={i % 2 === 0 ? "left" : "right"}
        >
          <ActiveNeoAnimator trigger={scrollLocation > i * 10 + 300} />
        </Grid>
      ))}
    </Grid>
  );
};
