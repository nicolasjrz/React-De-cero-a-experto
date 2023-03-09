import React, { useMemo } from "react";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
export const SideBarItem = ({ id, title = "", body }) => {
  const newTitle = useMemo(() => {
    return title.length > 17 + "..." ? title.substring : title;
  }, [title]);

  return (
    <ListItem>
      <ListItemButton>
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
