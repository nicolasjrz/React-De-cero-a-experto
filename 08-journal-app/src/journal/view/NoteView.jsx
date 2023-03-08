import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGalery } from "../components/ImageGalery";

export const NoteView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction={"row"}
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={30} fontWeight="ligth">
          28 de agosto 2023
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSizeL: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type={"text"}
          variant="filled"
          fullWidth
          placeholder="Add title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="What happened today?"
          sx={{ border: "none", mb: 1 }}
          multiline
          minRows={5}
        />
      </Grid>
      <ImageGalery />
    </Grid>
  );
};
