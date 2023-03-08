import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    saveMessage: "",
    notes: [],
    active: null,
  },
  reducers: {
    addNewEmptyNote: (state /* action */) => {},
    setActiveNote: (state /* action */) => {},
    setNote: (state /* action */) => {},
    setSaving: (state /* action */) => {},
    updateNote: (state /* action */) => {},
    deleteNoteByID: (state /* action */) => {},
  },
});
export const {
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteByID,
} = journalSlice.actions;
