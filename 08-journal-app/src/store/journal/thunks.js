import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNote,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { auth } = getState();
    const newNote = {
      title: "",
      body: "",
      date: new Date(),
    };

    const newDoc = doc(collection(FirebaseDB, `${auth.uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));

    /// dispatch
    /// dispatcj new note
    /// dispatch activaNote
  };
};

export const startLoadingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("uid in user not found");
    const notes = await loadNotes(uid);
    dispatch(setNote(notes));
  };
};
