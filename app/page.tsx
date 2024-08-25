"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./globals.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
// import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // sets the list of todos from the database
  // TODO look up the functions observe query and subscribe
  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  // Call the listTodos function when the component mounts
  useEffect(() => {
    listTodos();
  }, []);

  // create a new todo in the database
  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  // delete a todo item from the database
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  return (
    // Todo check the widths for mobile, tablet and desktop
    <main className="flex flex-col items-stretch gap-y-3 max-w-[500px]">
      <h1 className="font-bold text-2xl">My todos</h1>
      <button className="btn-primary" onClick={createTodo}>+ new</button>
      <ul className="pl-0 list-none flex flex-col my-8 border border-black space-y-1 bg-black rounded-lg overflow-auto text-white">
        {todos.map((todo) => (
          <li 
          className="bg-white p-2 text-black hover:bg-linkHover"
          key={todo.id}
          onClick={() => deleteTodo(todo.id)} 
          >
            {todo.content}
          </li>
        ))}
      </ul>
      <div className="flex flex-col space-y-2">
        <p>🥳 Try creating a new todo. Keep your todo lists short and simple. Make it possible to achieve something every day!</p>
        <p>Don't forget to mark your completed tasks as done!</p>
        {/* TODO feedback button */}
      </div>
    </main>
  );
}
