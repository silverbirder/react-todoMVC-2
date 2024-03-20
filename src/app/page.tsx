"use client";

import TodoList from "@/ui/todo-list";
import { Todo } from "@/ui/types";
import { useState, type KeyboardEvent } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text) return;
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    setText("");
    const params = new URLSearchParams("");
    params.set("added", "true");
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }
    addTodo();
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleKeydown(e)}
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
      <main className="main">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>
    </section>
  );
}
