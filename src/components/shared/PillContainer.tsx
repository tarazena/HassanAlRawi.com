import { FC } from "react";
import { Grid } from "@mui/material";

import { NeoContainer } from "./NeoContainer";
import { NeoContainerType } from "./NeoContainer";
import { ComponentWithChildren } from "core";

interface IPillContainer extends NeoContainerType {}

export const PillContainer: FC<IPillContainer & ComponentWithChildren> = ({
  children,
  ...neoContainerStyles
}) => (
  <NeoContainer {...neoContainerStyles}>
    <Grid container direction="row" justifyContent="space-evenly">
      {/* <Grid item>
        <Button color="primary"  style={{ borderTopLeftRadius: 15, borderBottomLeftRadius: 15, padding: 5 }}>1</Button>
      </Grid>
      <Grid item>
        <Button color="primary" style={{ padding: 5 }}>2</Button>
      </Grid>
      <Grid item>
        <Button color="primary"  style={{ borderTopRightRadius: 15, borderBottomRightRadius: 15, padding: 5 }}>3</Button>
      </Grid> */}
      {children}
    </Grid>
  </NeoContainer>
);
