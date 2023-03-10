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
    setPhotoToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },

    deleteNoteByID: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    clearNotesLogout: (state /* action */) => {
      state.isSaving = false;
      state.saveMessage = "";
      state.notes = [];
      state.active = null;
    },
  },
});
export const {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNote,
  setSaving,
  updateNote,
  setPhotoToActiveNote,
  deleteNoteByID,
  clearNotesLogout,
} = journalSlice.actions;
