import { useGetTodosQuery } from "./store";

const TodoApp = () => {
  const { ...data } = useGetTodosQuery(undefined);

  console.log(`🚀 ~ TodoApp ~ data:`, data);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <span>Loading...</span>
      <pre>...</pre>
      <button /* aria-disabled={true} disabled={true} */>
        Next
      </button>
    </>
  );
};

export default TodoApp;