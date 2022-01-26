import { FC } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Hidden,
} from "@mui/material";

import { colors } from "core/theme";
import { PillContainer, NeoContainer } from "components";
import { useNavigate } from "react-router-dom";

export const NeoCard: FC = () => {
  const navigate = useNavigate();
  return (
    <NeoContainer
      fullWidth
      shadowDepthX={6}
      shadowDepthY={6}
      styleOverride={{ borderRadius: 30, padding: 0 }}
    >
      <Card
        elevation={0}
        style={{
          borderRadius: 30,
          padding: 0,
          backgroundColor: colors.AthensGray,
        }}
      >
        <CardActionArea onClick={() => navigate({ pathname: "recipe" })}>
          <NeoContainer
            shadowDepthX={6}
            shadowDepthY={6}
            styleOverride={{ borderRadius: 15, padding: 0 }}
            shadowColor={"AthensGray"}
            shadowIntensity={0.4}
          >
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg"
              title="Contemplative Reptile"
              style={{
                borderRadius: 15,
              }}
            />
          </NeoContainer>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <Hidden smDown>
          <CardActions>
            <Grid container justifyContent="flex-end">
              <PillContainer />
            </Grid>
          </CardActions>
        </Hidden>
      </Card>
    </NeoContainer>
  );
};
