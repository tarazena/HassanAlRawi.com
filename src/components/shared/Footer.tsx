import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { NeoContainer } from "./NeoContainer";

export const Footer: FC = () => (
  <Grid container>
    <NeoContainer
      fullWidth
      py={1}
      styleOverride={{ borderRadius: "40px 40px 0px 0px", textAlign: 'center' }}
    >
      <Typography variant="caption">
        ©{new Date().getFullYear()} Hassan Al Rawi. All Rights Reserved
      </Typography>
    </NeoContainer>
  </Grid>
);
