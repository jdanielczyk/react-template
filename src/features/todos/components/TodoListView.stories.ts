import type { Meta, StoryObj } from '@storybook/react';
import TodoListView from './TodoListView';
import type { ITodo } from '../types';

const meta: Meta<typeof TodoListView> = {
  component: TodoListView,
  title: 'Features/Todos/TodoListView',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TodoListView>;

// Mock todos data
const todos: ITodo[] = [
  { id: 1, title: 'Learn React', completed: false, created_at: new Date(), userId: 1 },
  { id: 2, title: 'Learn TypeScript', completed: true, created_at: new Date(), userId: 1 },
  { id: 3, title: 'Learn Storybook', completed: false, created_at: new Date(), userId: 1 },
];

// Mock event handlers
const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, todo: ITodo) => {
  console.log('Checkbox changed for todo:', todo.title, 'New value:', e.target.checked);
};

const handleDelete = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, todo: ITodo) => {
  console.log('Delete clicked for todo:', todo.title);
};

export const Default: Story = {
  args: {
    todos,
    handleCheckboxChange,
    handleDelete,
  },
};

export const EmptyList: Story = {
  args: {
    todos: [],
    handleCheckboxChange,
    handleDelete,
  },
};

export const SingleTodo: Story = {
  args: {
    todos: [
      { id: 1, title: 'Learn Storybook', completed: false, created_at: new Date(), userId: 1 },
    ],
    handleCheckboxChange,
    handleDelete,
  },
};

export const AllCompleted: Story = {
  args: {
    todos: todos.map(todo => ({ ...todo, completed: true })),
    handleCheckboxChange,
    handleDelete,
  },
};
