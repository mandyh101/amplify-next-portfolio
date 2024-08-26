import { Schema } from '@/amplify/data/resource';
import { generateClient } from "aws-amplify/data";
import React from 'react'
import { MdDelete } from "react-icons/md";
const client = generateClient<Schema>();


type TodoItemProps = {
  todo: Schema["Todo"]["type"] //use amplify data management to define the type of todo
}

  // delete a todo item from the database
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

const TodoItem = ({todo}: TodoItemProps) => {
  return (
    <div>
      <li 
          className="bg-white p-2 text-black flex justify-between items-center"
          >
            <span className="pr-4">{todo.content}</span>
            <button 
              className="flex-shrink-0 flex-basis-1 bg-red-400 hover:bg-red-500 rounded-lg px-4 py-3" 
              onClick={() => deleteTodo(todo.id)}
              >
                <MdDelete />
              </button>
          </li>
    </div>
  )
}

export default TodoItem