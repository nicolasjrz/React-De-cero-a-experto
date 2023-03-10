import { async } from "@firebase/util";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  deleteNoteByID,
  savingNewNote,
  setActiveNote,
  setNote,
  setPhotoToActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { auth } = getState();
    const newNote = {
      title: "",
      body: "",
      date: new Date().getDate(),
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

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToFireStore = { ...note };

    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

    //await fileUpload(files[0]);

    const fileUploadPromises = [];

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosURL = await Promise.all(fileUploadPromises);

    dispatch(setPhotoToActiveNote(photosURL));
  };
};

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note}`);

    await deleteDoc(docRef);

    dispatch(deleteNoteByID(note.id));
  };
};
