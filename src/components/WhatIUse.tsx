import { Grid, Link, Typography } from "@mui/material";
import { IHeader, Technology, WHAT_I_USE } from "core";
import { FC } from "react";
import { NeoContainer } from "components";

export const WhatIUse: FC = () => (
  <Grid
    container
    my={5}
    alignContent={"center"}
    justifyContent={"center"}
    spacing={4}
  >
    <Grid
      item
      container
      xs={12}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Typography variant="h4">What I Use</Typography>
    </Grid>
    {WHAT_I_USE.map((data, index) => (
      <DataRow data={data} key={`technologies-${index}`} />
    ))}
  </Grid>
);

interface IDataRow {
  data: IHeader;
}

const DataRow: FC<IDataRow> = ({ data: { technologies, title } }) => (
  <Grid item container xs={12} justifyContent={"center"} my={1}>
    <Typography variant="h5">{title}</Typography>
    <Grid container item xs={12} justifyContent={"center"}>
      {technologies.map((technology, index) => (
        <Tile
          technology={technology}
          index={index}
          key={`technology-${index}`}
        />
      ))}
    </Grid>
  </Grid>
);

interface ITile {
  technology: Technology;
  index: number;
}
const Tile: FC<ITile> = ({ index, technology: { logo, name, url } }) => (
  <Grid
    item
    xs={6}
    md={2}
    key={`what-i-do-${index}`}
    p={3}
    component={Link}
    href={url}
    target="_blank"
  >
    <NeoContainer styleOverride={{ padding: 20 }} fullHeight>
      <Grid
        container
        direction={"column"}
        justifyItems={"center"}
        alignItems={"center"}
      >
        <img src={logo} alt={name} title={name} style={{ height: 64, width: 64 }} />
      </Grid>
    </NeoContainer>
  </Grid>
);
