import React, { useMemo } from "react";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
export const SideBarItem = ({ id, title = "", body, date, imageUrls = [] }) => {
  const newTitle = useMemo(() => {
    return title.length > 17 + "..." ? title.substring : title;
  }, [title]);

  const dispatch = useDispatch();

  const onActivate = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  return (
    <ListItem>
      <ListItemButton onClick={onActivate}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
