import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const newNote = {
      title: "",
      body: "",
      date: new Date().getDate(),
    };

    const newDoc = doc(collection(FirebaseDB, `${auth.uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    /// dispatch
    /// dispatcj new note
    /// dispatch activaNote
  };
};
