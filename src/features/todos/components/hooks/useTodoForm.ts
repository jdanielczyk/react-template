import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { usePostTodoMutation } from '../../api/todosApi';

const schema = z.object({
  todo: z.string().nonempty('Todo is required'),
});

type FormData = z.infer<typeof schema>;

/**
 * Custom React hook for managing the form logic of a Todo creation component.
 *
 * Integrates form validation with Zod, handles form submission via a mutation,
 * and provides form state and utility handlers for use in a component.
 *
 * @returns An object containing:
 * - `register`: Function to register form fields.
 * - `handleSubmit`: Function to handle form submission.
 * - `errors`: Validation errors for the form fields.
 * - `isLoading`: Boolean indicating if the mutation is in progress.
 * - `isError`: Boolean indicating if the mutation resulted in an error.
 * - `error`: Error object from the mutation, if any.
 * - `onCancel`: Function to reset the form fields.
 */
export function useTodoForm() {
  const [postTodo, { isLoading, isError, error }] = usePostTodoMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: FormData) => {
    await postTodo({ title: data.todo, completed: false });
    reset();
  };

  const handleCancel = () => reset();

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
    isError,
    error,
    onCancel: handleCancel,
  };
}
