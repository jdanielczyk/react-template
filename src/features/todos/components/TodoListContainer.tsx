import { useTodoList } from './hooks/useTodoList';
import TodoListView from './TodoListView';

/**
 * Container component for managing the state and logic of the Todo list.
 *
 * Fetches todos using the `useGetTodosQuery` hook and provides mutation handlers
 * for updating and deleting todos via `usePutTodoMutation` and `useDeleteTodoMutation`.
 *
 * Handles loading and error states, and passes the todos and event handlers to the
 * `TodoListView` presentational component.
 *
 * @component
 */
function TodoListContainer() {
  const {
    todos,
    isLoading,
    isError,
    error,
    isErrorPutTodo,
    errorPutTodo,
    handleCheckboxChange,
    handleDelete,
  } = useTodoList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }
  return (
    <>
      <TodoListView
        todos={todos}
        handleCheckboxChange={handleCheckboxChange}
        handleDelete={handleDelete}
      />

      {isErrorPutTodo && (
        <div className="text-red-500">Error updating todo: {JSON.stringify(errorPutTodo)}</div>
      )}
    </>
  );
}

export default TodoListContainer;
