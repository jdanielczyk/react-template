import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import TodoListContainer from './TodoListContainer';
import { store } from '../../../store';
import { Provider } from 'react-redux';

type Story = StoryObj<typeof TodoListContainer>;

const meta = {
  title: 'Features/Todos/TodoListContainer',
  parameters: {
    layout: 'centered',
  },
  component: TodoListContainer,
} satisfies Meta<typeof TodoListContainer>;

export default meta;

// Sample todo data
const todosMock = [
  { id: '1', title: 'Learn React', completed: false },
  { id: '2', title: 'Learn TypeScript', completed: true },
  { id: '3', title: 'Learn Redux', completed: false },
];

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/todos', () => {
          return HttpResponse.json(todosMock, { status: 200 });
        }),
        // http.put('/api/todos/:id', (req, res, ctx) => {
        //   return res(ctx.json<TodoUpdateResponse>({ ...req.params, ...req.body }));
        // }),
        // http.delete('/api/todos/:id', (req, res, ctx) => {
        //   return res(ctx.json<DeleteTodoResponse>({ success: true }));
        // }),
      ],
    },
  },
};

// export const Loading: Story = {
//   parameters: {
//     msw: {
//       handlers: [
//         http.get('/api/todos', (req, res, ctx) => {
//           // Simulate loading by delaying the response
//           return res(ctx.delay(Infinity));
//         }),
//       ],
//     },
//   },
// };

// export const Error: Story = {
//   parameters: {
//     msw: {
//       handlers: [
//         http.get('/api/todos', (req, res, ctx) => {
//           return res(ctx.status(500), ctx.json({ message: 'Failed to fetch todos' }));
//         }),
//       ],
//     },
//   },
// };

// export const ErrorUpdating: Story = {
//   parameters: {
//     msw: {
//       handlers: [
//         http.get('/api/todos', (req, res, ctx) => {
//           return res(ctx.json(todosMock));
//         }),
//         http.put('/api/todos/:id', (req, res, ctx) => {
//           return res(ctx.status(500), ctx.json({ message: 'Error updating todo' }));
//         }),
//       ],
//     },
//   },
// };
