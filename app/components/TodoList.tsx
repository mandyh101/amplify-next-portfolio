import React from 'react'
import type { Schema } from "@/amplify/data/resource";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<Schema["Todo"]["type"]>
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {

    return (
      <div>
        <ul className="pl-0 list-none flex flex-col my-8 space-y-0.5 bg-black border border-black rounded-lg max-w-[500px] overflow-hidden break-all text-white">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </ul>
      </div>
    )
}

export default TodoList