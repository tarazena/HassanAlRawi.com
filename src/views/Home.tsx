import { FC } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { DynamicText, NeoAnimator, NeoContainer } from "components";
import { ITextType } from "interfaces";

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
        <Grid item xs={12} sm={6}>
          <NeoContainer styleOverride={{ padding: "10px 40px 20px" }}>
            <Typography variant="h2">Hi, my name is Hassan, I'm</Typography>
          </NeoContainer>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent="center">
          <DynamicText text={text} />
        </Grid>
        {new Array(8).fill("").map((_c, i) => (
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
            <NeoAnimator delay={(i + 1) * 0.5} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
