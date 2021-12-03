import { FC } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { DynamicText } from "components";
import { ITextType } from "interfaces";

export const Home: FC = () => {
  const text: ITextType[] = [
    { text: "Engineer", type: "text" },
    { text: "🚀", type: "emoji" },
    { text: "Designer", type: "text" },
    { text: "❤️", type: "emoji" },
    { text: "Developer", type: "text" },
    { text: "👍", type: "emoji" },
    { text: "Musician", type: "text" },
    { text: "🎸", type: "emoji" },
  ];

  return (
    <Box maxHeight="100%" style={{ paddingTop: 100 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h2">Hi, My name is Hassan</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DynamicText text={text} />
        </Grid>
      </Grid>
    </Box>
  );
};
