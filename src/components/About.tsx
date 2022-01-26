import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { NeoButton, NeoContainer } from "./Shared";

export const About: FC = () => (
  <Grid container direction={"row"} justifyContent="center" my={5}>
    <Grid item sm={6} container justifyContent={"end"} alignContent={"center"}>
      <NeoContainer styleOverride={{ margin: 20 }} invertedShadow scaleContentOnHover>
        <img
          src="https://www.hassanalrawi.com/img/author.722ae374.jpg"
          style={{
            display: "block",
            maxWidth: "100%",
            // maxHeight: "100%",
            height: "auto",
            borderRadius: 40,
            padding: 20,
          }}
          alt="Author"
        />
      </NeoContainer>
    </Grid>
    <Grid item sm container direction={"column"} justifyContent={"center"}>
      <NeoContainer
        styleOverride={{ padding: 30, margin: 20, borderRadius: 20 }}
      >
        <Typography variant="h5" style={{ textTransform: "capitalize" }}>
          I'm an Engineer, Developer, Photographer, Musician &amp; Designer
        </Typography>
        <dl />
        <Typography variant="body1">
          Being a tech savvy; I was curious to know how things work as long as I
          can remember, which helped me learn a great deal and kept me driven to
          learn new stuff everyday! My journey with technology and programming
          began since I was young, when my parents gave me a computer called{" "}
          <a href="https://en.wikipedia.org/wiki/MSX">MSX</a>. The computer then
          used a language developed by Microsoft called Basic. From the very
          “Basic” I learned a lot of programming concepts, and until now; my
          passion for learning new languages is never ending.
        </Typography>
      </NeoContainer>
      <Grid item container direction="row" justifyContent={"center"} pt={5}>
        <NeoButton
          styleOverride={{ textTransform: "none" }}
          px={2}
          py={1}
          shadowDepthX={6}
          shadowDepthY={6}
          invertedShadow
        >
          Contact Me
        </NeoButton>
        <NeoButton
          styleOverride={{ textTransform: "none" }}
          px={2}
          py={1}
          shadowDepthX={6}
          shadowDepthY={6}
          invertedShadow
        >
          Download Resume
        </NeoButton>
      </Grid>
    </Grid>
  </Grid>
);
