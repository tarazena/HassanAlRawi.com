import { FC } from "react";
import { Grid, Typography } from "@mui/material";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Pinterest,
//   WhatsApp,
// } from "@mui/icons-material";

import { NeoContainer, PillContainer } from "components";

export const Recipe: FC = () => {
  const ingredients = [
    "2 tablespoons unsalted butter",
    "2 tablespoons extra-virgin olive oil",
    "1 medium onion, very thinly sliced",
    "3 garlic cloves, smashed",
    "5 cups canned whole tomatoes in their juice (from three 14-ounce cans)",
    "1 cup water",
    "2/3 cup heavy cream",
    "1 tablespoon sugar",
    "1/4 teaspoon crushed red pepper",
    "1/4 teaspoon celery seed",
    "1/4 teaspoon dried oregano",
    "Salt and freshly ground pepper",
    "Four 3/4-inch-thick slices of white country bread, crusts trimmed, bread cut into 3/4-inch dice",
  ];

  const directions = [
    "In a large saucepan, melt 1 tablespoon of the butter in 1 tablespoon of the olive oil. Add the sliced onion and smashed garlic and cook over moderate heat, stirring occasionally, until softened, about 5 minutes. Add the tomatoes and their juice, the water, heavy cream, sugar, crushed red pepper, celery seed and oregano and season with salt and pepper. Bring the soup to a boil over high heat, breaking up the tomatoes with the back of a spoon. Reduce the heat to moderate and simmer for 10 minutes.",
    "Meanwhile, in a small skillet, cook the remaining 1 tablespoon of butter over moderately high heat until it begins to brown, about 1 minute. Scrape the browned butter into a medium bowl. Add the olive oil to the skillet. Add the diced bread and cook over moderately high heat, stirring occasionally, until it is slightly browned, about 6 minutes. Transfer the bread to the browned butter and toss well.",
    "Working in batches, transfer the tomato soup to a blender and puree until smooth. Return the soup to a clean pot and rewarm the soup if necessary. Season the soup with salt and pepper. Ladle the soup into bowls and serve with the croutons.",
  ];

  return (
    <Grid container style={{ marginTop: 100 }}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        spacing={3}
      >
        <Grid item container xs={12} sm={6}>
          <Grid container>
            <NeoContainer styleOverride={{ padding: "10px 40px 20px" }}>
              <Typography variant="h2">Recipe Title</Typography>
              <Typography variant="h5">
                An amazing soup with a Zesty taste and plenty of other things
                like fish and other stuff
              </Typography>
            </NeoContainer>
          </Grid>
          <Grid item xs={6}>
            <NeoContainer
              // shadowDepthX={3}
              // shadowDepthY={3}
              // shadowIntensity={0.1}
              styleOverride={{ margin: "30px 30px 0px 0px" }}
            >
              <Typography
                variant="body1"
                style={{ padding: 13, textAlign: "center" }}
              >
                Time: 1 Hour(s) 45 Minute(s)
              </Typography>
            </NeoContainer>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 30 }}>
            <PillContainer style={{ padding: 0 }}>
              {/* <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <Pinterest />
              </IconButton>
              <IconButton>
                <WhatsApp />
              </IconButton> */}
            </PillContainer>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            style={{ paddingTop: 30 }}
            alignItems="flex-start"
          >
            <NeoContainer>
              <Grid item xs style={{ paddingTop: 30 }}>
                <Typography component="h4" style={{ padding: "0px 40px" }}>
                  Ingredients:
                </Typography>
                <Typography
                  variant="body1"
                  component="ul"
                  style={{ padding: "0px 60px 30px" }}
                >
                  {ingredients.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                container
                alignItems="flex-start"
                justifyContent="center"
              ></Grid>
            </NeoContainer>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <NeoContainer fullWidth fullHeight shadowIntensity={0.3}>
            <img
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: 40,
                padding: 0,
              }}
              alt="Nice cooking pho"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F12%2F06%2Fcreamy-tomato-soup-with-buttery-croutons-xl-r-200403.jpg"
            />
          </NeoContainer>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: 40 }}>
        <NeoContainer styleOverride={{ padding: 40 }}>
          <Grid item>Directions</Grid>
          <Grid item>
            <ol>
              {directions.map((x, i) => (
                <li key={i}>
                  {x}

                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: 40,
                      padding: 0,
                    }}
                    alt="Nice cooking pho"
                    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F12%2F06%2Fcreamy-tomato-soup-with-buttery-croutons-xl-r-200403.jpg"
                  />
                </li>
              ))}
            </ol>
          </Grid>
        </NeoContainer>
      </Grid>
    </Grid>
  );
};
