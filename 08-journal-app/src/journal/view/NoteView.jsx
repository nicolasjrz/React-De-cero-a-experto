import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/journal/thunks";
import { ImageGalery } from "../components/ImageGalery";

export const NoteView = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

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
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote}>
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
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="What happened today?"
          sx={{ border: "none", mb: 1 }}
          multiline
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGalery />
    </Grid>
  );
};
