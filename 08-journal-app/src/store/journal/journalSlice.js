import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    saveMessage: "",
    notes: [],
    active: null,
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    savingNewNote: (state /* action */) => {
      state.isSaving = true;
    },
    setNote: (state /* action */) => {},
    setSaving: (state /* action */) => {},
    updateNote: (state /* action */) => {},
    deleteNoteByID: (state /* action */) => {},
  },
});
export const {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteByID,
} = journalSlice.actions;
