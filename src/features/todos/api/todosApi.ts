import { baseApi } from '../../../store/baseApi';
import type { ITodo } from '../types';

const ENDPOINT = '/todo';

/**
 * The `todosApi` object defines a set of endpoints for managing todo items using RTK Query.
 *
 * @remarks
 * This API slice is injected into the base API and provides endpoints for fetching, creating, updating, and deleting todos.
 *
 * @example
 * // Usage in a component
 * const { data: todos } = useGetTodosQuery();
 * const [postTodo] = usePostTodoMutation();
 *
 * @endpoints
 * - `getTodos`: Fetches the list of todos.
 * - `postTodo`: Creates a new todo.
 * - `putTodo`: Updates an existing todo.
 * - `deleteTodo`: Deletes a todo.
 *
 * @providesTags
 * - `Todos`: Used for cache invalidation and refetching.
 *
 * @typeParam ITodo - The type representing a todo item.
 */
export const todosApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => ENDPOINT,
      providesTags: ['Todos'],
    }),
    postTodo: builder.mutation<ITodo, Partial<ITodo>>({
      query: todo => ({
        url: ENDPOINT,
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    putTodo: builder.mutation<ITodo, Partial<ITodo>>({
      query: todo => ({
        url: `${ENDPOINT}?id=eq.${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation<ITodo, Partial<ITodo>>({
      query: todo => ({
        url: `${ENDPOINT}?id=eq.${todo.id}`,
        method: 'DELETE',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTodosQuery, usePostTodoMutation, usePutTodoMutation, useDeleteTodoMutation } =
  todosApi;
