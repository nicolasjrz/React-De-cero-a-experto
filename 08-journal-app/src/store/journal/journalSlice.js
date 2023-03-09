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
      state.saveMessage = "";
    },
    savingNewNote: (state /* action */) => {
      state.isSaving = true;
    },
    setNote: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state /* action */) => {
      state.isSaving = true;
      state.saveMessage = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      state.saveMessage = `${action.payload.title}, updated`;
    },
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
