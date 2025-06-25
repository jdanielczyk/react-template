import { useDeleteTodoMutation, useGetTodosQuery, usePutTodoMutation } from '../../api/todosApi';
import type { ITodo } from '../../types';

/**
 * Custom React hook for managing a todo list using RTK Query mutations and queries.
 *
 * @returns An object containing:
 * - `todos`: The list of todos fetched from the API.
 * - `isLoading`: Boolean indicating if the todos are currently being loaded.
 * - `isError`: Boolean indicating if there was an error fetching the todos.
 * - `error`: The error object if fetching todos failed.
 * - `isErrorPutTodo`: Boolean indicating if there was an error updating a todo.
 * - `errorPutTodo`: The error object if updating a todo failed.
 * - `handleCheckboxChange`: Event handler to toggle the completed state of a todo.
 * - `handleDelete`: Event handler to delete a todo.
 */
export function useTodoList() {
  const { data: todos, isLoading, isError, error } = useGetTodosQuery(undefined, {});
  const [putTodo, { isError: isErrorPutTodo, error: errorPutTodo }] = usePutTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, todo: ITodo): void => {
    e.preventDefault();
    putTodo({ ...todo, completed: !todo.completed });
  };

  const handleDelete = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, todo: ITodo): void => {
    e.preventDefault();
    deleteTodo(todo);
  };

  return {
    todos,
    isLoading,
    isError,
    error,
    isErrorPutTodo,
    errorPutTodo,
    handleCheckboxChange,
    handleDelete,
  };
}
