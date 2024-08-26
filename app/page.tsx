"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./globals.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import TodoList from "./components/TodoList";

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

  return (
    // Todo check the widths for mobile, tablet and desktop
    <main className="flex flex-col items-stretch gap-y-3 max-w-[500px]">
      <h1 className="font-bold text-3xl">Today I will...</h1>
      <button className="btn-primary" onClick={createTodo}>+ new</button>
      {/* TODO add loading spinner */}
        { todos.length === 0 && 
          <p className="p-2 text-black flex justify-between items-center rounded-lg">✅ Looks like you have nothing to do!</p> 
        }
      <TodoList todos={todos} />
      <div className="flex flex-col space-y-2">
        <p>Keep your todo lists short and simple. Make it possible to achieve something every day!</p>
        <p>🥳 Don't forget to delete your completed tasks when they are done and celebrate!</p>
        {/* TODO feedback button */}
      </div>
    </main>
  );
}
