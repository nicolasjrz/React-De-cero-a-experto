import { async } from "@firebase/util";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { loadNotes } from "../../../helpers/loadNotes";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNote,
} from "../../../store/journal/journalSlice";
import { startLoadingNote, startNewNote } from "../../../store/journal/thunks";
require("dotenv").config();
describe("Pruebas en Journal Thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const SECONDS = 1000;
  jest.setTimeout(70 * SECONDS);
  beforeEach(() => jest.clearAllMocks());

  test("startNewNote debe crear una nueva nota en blanco", async () => {
    const uid = "test-uid";
    getState.mockReturnValue({ auth: { uid: uid } });
    await startNewNote()(dispatch, getState);

    const newNote = {
      body: "",
      title: "",
      id: expect.any(String),
      date: expect.any(Number),
      imageUrls: [],
    };

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(newNote));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote(newNote));

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises);
  });

  test("startLoadingNote debe cargar las notas desde firebase", async () => {
    const uid = "test-uid";
    getState.mockReturnValue({ auth: { uid } });
    await startLoadingNote()(dispatch, getState);
    const notes = await loadNotes(uid);
    expect(dispatch).toHaveBeenCalledWith(setNote(notes));

    //console.log(process.env.REACT_APP_NAME_ENV);
  });

  //   test("startSaveNote debe guardadar la nota", async () => {
  //     const uid = "test-uid";
  //     getState.mockReturnValue({
  //       auth: { uid: uid },
  //     });
  //     getState.mockReturnValue({ journal: { active: { id: 1, name: "libro" } } });

  //     const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);

  //     //console.log(collectionRef);
  //   });
});
