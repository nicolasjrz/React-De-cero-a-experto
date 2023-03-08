import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

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
