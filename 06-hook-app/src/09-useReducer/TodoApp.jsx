import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todoCount,
    pendingTodos,
  } = useTodo();
  return (
    <>
      <h1>
        todo app ({todoCount}) <small>pentiendtes:{pendingTodos}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            list={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
      </div>
      <div className="col-5 mt-3">
        <h4>agregar todo</h4>
        <hr />
        <TodoAdd handleNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
