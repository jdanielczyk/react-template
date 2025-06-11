/**
 * Represents a todo item.
 *
 * @property userId - The ID of the user who owns the todo.
 * @property id - The unique identifier for the todo.
 * @property title - The title or description of the todo.
 * @property completed - Indicates whether the todo has been completed.
 * @property created_at - The date and time when the todo was created.
 */
export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  created_at: Date;
}
