import React from "react";
import { Todo } from "./types";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className={todo.completed ? "completed" : ""} key={todo.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <label>{todo.text}</label>
            <button className="destroy" onClick={() => deleteTodo(todo.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
