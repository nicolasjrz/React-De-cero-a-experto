import {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteByID,
  journalSlice,
  savingNewNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
} from "../../../store/journal/journalSlice";

const initialState = {
  isSaving: false,
  saveMessage: "",
  notes: [],
  active: null,
};

const initialState2 = {
  isSaving: false,
  saveMessage: "",
  notes: [
    { id: 1, nota: "nota a", title: "titulo a" },
    { id: 2, nota: "nota b", title: "titulo b" },
  ],
  active: null,
};
describe("Pruebas en journalSlice", () => {
  test("debe regresar el estado inicial y llamarse journal", () => {
    expect(journalSlice.name).toBe("journal");
    const state = journalSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("debe agregar una nueva nota", () => {
    const state = journalSlice.reducer(
      initialState,
      addNewEmptyNote({ id: 123, name: "abc" })
    );

    expect(state.notes).toHaveLength(1);
  });

  test("la nota debe estar activa", () => {
    const state = journalSlice.reducer(
      initialState,
      setActiveNote({ id: 123, name: "nota 1" })
    );
    expect(state.active).toBeTruthy();
  });

  test("savingNewNote, isSaving  debe cambiar a true", () => {
    const state = journalSlice.reducer(
      initialState,
      savingNewNote(initialState)
    );
    expect(state.isSaving).toBe(true);
  });

  test("setNote debe actualizar la lista de notas", () => {
    const state = journalSlice.reducer(
      initialState,
      setNote({ id: 123, name: "bbb" })
    );
    expect(state.notes).toBeTruthy();
  });

  test("setSaving debe cambiar isSaving a true y limpiar saveMesagge", () => {
    const state = journalSlice.reducer(initialState, setSaving(initialState));

    expect(state.isSaving).toBe(true);
    expect(state.saveMessage).toBe("");
  });

  test("debe actualizar la nota", () => {
    const state = journalSlice.reducer(
      initialState2,
      updateNote({ id: 1, nota: "ac", title: "nuevo titulo nota a" })
    );

    expect(state.notes).toEqual([
      { id: 1, nota: "ac", title: "nuevo titulo nota a" },
      { id: 2, nota: "nota b", title: "titulo b" },
    ]);
  });

  test("debe eliminar una nota por id", () => {
    const state = journalSlice.reducer(initialState2, deleteNoteByID(1));

    expect(state.notes.length).toBe(1);
    expect(state.notes).toHaveLength(1);
  });

  test("clearNotesLogout debe actualizar los datos a default", () => {
    const state = journalSlice.reducer(initialState2, clearNotesLogout());

    expect(state).toEqual({
      isSaving: false,
      saveMessage: "",
      notes: [],
      active: null,
    });
  });
});
