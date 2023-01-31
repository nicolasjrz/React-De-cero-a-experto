import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../09-useReducer/components/TodoItem";

describe("pruebas en el componente todo item", () => {
  const todo = { id: 1, description: "piedra del alma", done: false };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el componente o el todo pendiente", () => {
    render(
      <TodoItem
        description={todo.description}
        id={todo.id}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("debe de mostrar el todo completado ", () => {
    todo.done = true;
    render(
      <TodoItem
        description={todo.description}
        id={todo.id}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span debe de llamar el toggleTodo cuando se hace click  ", () => {
    render(
      <TodoItem
        description={todo.description}
        id={todo.id}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("span debe de llamar el ondelete cuando se hace click  ", () => {
    render(
      <TodoItem
        description={todo.description}
        id={todo.id}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
