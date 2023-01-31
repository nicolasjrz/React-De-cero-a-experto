import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../09-useReducer/TodoApp";
import { useTodo } from "../../hooks/useTodo";

jest.mock("../../hooks/useTodo");

describe("Prueba en todo App ", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "piedra del alma", done: false },
      { id: 2, description: "piedra del espacio", done: true },
    ],
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    todoCount: 2,
    pendingTodos: 1,
  });

  test("debe de montar el componente correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText("piedra del alma")).toBeTruthy();
    expect(screen.getByText("piedra del espacio")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
