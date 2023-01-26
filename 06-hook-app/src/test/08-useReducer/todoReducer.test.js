import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { todoReducer } from "../../09-useReducer/TodoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe agregar un toDo", () => {
    const action = {
      type: "send",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe eliminar un todo", () => {
    const action = {
      type: "remove",
      payload: 2,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
  });

  test("debe de realizar el toggle del todo", () => {
    const action = {
      type: "toggleTodo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
  });
});
