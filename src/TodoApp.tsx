import { useState } from "react";
import { Todo, useGetTodoQuery, useGetTodosQuery } from "./store";

const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  const { data: todo, isLoading: isTodoLoading } = useGetTodoQuery(todoId);

  console.log(`🚀 ~ TodoApp ~ todo:`, todo);

  console.log(`🚀 ~ TodoApp ~ data:`, todos);


  const increaseBy = (increaseBy: number) => setTodoId(prevTodo => Math.max(1, prevTodo + increaseBy));

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      {isLoading && <span>Loading...</span>}
      {!isTodoLoading && <pre>{JSON.stringify(todo)}</pre>}


      <button
        onClick={() => increaseBy(-1)}
      >
        Prev Todo
      </button>
      <button
        onClick={() => increaseBy(1)}
      >
        Next
      </button>
      <ul>
        {!isLoading && todos?.map((todo: Todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;