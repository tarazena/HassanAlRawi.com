import { Grid, Link, TextField, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { NeoButton, NeoContainer } from "components";

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: FC = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleOnSubmit = useCallback(async () => {
    try {
      await fetch("https://www.hassanalrawi.com/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      setMessageSent(true);
    } catch (e) {
      console.warn(e);
    }
  }, [formData]);

  return (
    <Grid
      container
      my={5}
      alignContent={"center"}
      justifyContent={"center"}
      spacing={4}
      id="contact"
    >
      <Grid item container xs={11} sm={12} justifyContent={"center"}>
        <Typography variant="h4">Contact me</Typography>
      </Grid>
      <Grid item container xs={11} sm={12} justifyContent={"center"}>
        <Typography variant="body1">
          You can email me at{" "}
          <Link href="mailto:hassan@iffproductions.com">
            hassan@iffproductions.com
          </Link>{" "}
          or you can use the form below and I will reach out to you
        </Typography>
      </Grid>
      <Grid item container xs={11} sm={8} justifyContent={"center"} mb={4}>
        <NeoContainer
          fullHeight
          p={3}
          fullWidth
          invertedShadow
          shadowDepthX={6}
          shadowDepthY={6}
        >
          {messageSent ? (
            <Typography variant="body1" textAlign={"center"}>
              Your message was delivered, I will contact you shortly
            </Typography>
          ) : (
            <>
              <Grid container justifyContent={"center"}>
                <Grid container item direction={"row"}>
                  <Grid item xs={6} p={1}>
                    <TextField
                      id="name"
                      label="Name"
                      required
                      variant="standard"
                      fullWidth
                      value={formData?.name}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          name: e.currentTarget.value,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} p={1}>
                    <TextField
                      id="email"
                      label="Email"
                      required
                      variant="standard"
                      value={formData?.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.currentTarget.value,
                        });
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} p={1}>
                <TextField
                  id="subject"
                  label="Subject"
                  required
                  value={formData?.subject}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      subject: e.currentTarget.value,
                    });
                  }}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} p={1}>
                <TextField
                  id="message"
                  label="Message"
                  variant="standard"
                  fullWidth
                  multiline
                  required
                  value={formData?.message}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      message: e.currentTarget.value,
                    });
                  }}
                  rows={4}
                />
              </Grid>
              <Grid item mt={3} container justifyContent={"center"}>
                <NeoButton
                  onClick={() => {
                    handleOnSubmit();
                  }}
                >
                  <NeoContainer px={4} py={1}>
                    Send
                  </NeoContainer>
                </NeoButton>
              </Grid>
            </>
          )}
        </NeoContainer>
      </Grid>
    </Grid>
  );
};
