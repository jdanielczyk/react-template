import React from 'react';
import type { ITodo } from '../types';

/**
 * Props for the TodoListView component.
 *
 * @property {ITodo[]=} todos - Optional array of todo items to display.
 * @property {(e: React.ChangeEvent<HTMLInputElement>, todo: ITodo) => void} handleCheckboxChange -
 *   Callback invoked when a todo item's checkbox is toggled.
 * @property {(e: React.MouseEvent<HTMLSpanElement, MouseEvent>, todo: ITodo) => void} handleDelete -
 *   Callback invoked when a todo item's delete action is triggered.
 */
interface TodoListViewProps {
  readonly todos?: ITodo[];
  readonly handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>, todo: ITodo) => void;
  readonly handleDelete: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, todo: ITodo) => void;
}

/**
 * Renders a list of todo items with checkboxes and delete buttons.
 *
 * @param todos - An array of todo objects to display.
 * @param handleCheckboxChange - Callback invoked when a todo's checkbox is toggled.
 * @param handleDelete - Callback invoked when the delete button for a todo is clicked.
 *
 * @remarks
 * Each todo item displays its title, a checkbox to mark it as completed, and a button to delete the item.
 */
function TodoListView({ todos, handleCheckboxChange, handleDelete }: TodoListViewProps) {
  return (
    <div>
      <ul className="p-2">
        {todos?.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={event => handleCheckboxChange(event, todo)}
              className="mr-2"
            />
            <span>{todo.title}</span>
            <button
              className="text-red-500 ml-2 cursor-pointer font-bold bg-transparent border-0 p-0"
              onClick={e => handleDelete(e, todo)}
              aria-label="Delete todo"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListView;
