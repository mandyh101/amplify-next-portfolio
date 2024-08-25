"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./globals.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { MdDelete } from "react-icons/md";
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
      <ul className="pl-0 list-none flex flex-col my-8 space-y-1 bg-transparent rounded-lg max-w-[500px] overflow-hidden break-all text-white">
        { todos.length === 0 && 
          <p className="p-2 text-black border border-white flex justify-between items-center rounded-lg">✅ Looks like you have nothing to do!</p> 
        }
        {todos.map((todo) => (
          <li 
          className="bg-white p-2 text-black flex justify-between items-center rounded-lg"
          key={todo.id}
          >
            <span className="pr-4">{todo.content}</span>
            <button 
              className="flex-shrink-0 flex-basis-1 bg-red-400 hover:bg-red-500 rounded-lg px-4 py-3" 
              onClick={() => deleteTodo(todo.id)}
              >
                <MdDelete />
              </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-col space-y-2">
        <p>Keep your todo lists short and simple. Make it possible to achieve something every day!</p>
        <p>🥳 Don't forget to delete your completed tasks when they are done and celebrate!</p>
        {/* TODO feedback button */}
      </div>
    </main>
  );
}
