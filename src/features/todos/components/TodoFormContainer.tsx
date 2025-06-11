import { useTodoForm } from './hooks/useTodoForm';
import TodoForm from './TodoForm';

/**
 * Container component for the Todo form.
 *
 * This component retrieves the necessary props using the `useTodoForm` hook
 * and passes them to the `TodoForm` presentational component.
 *
 * @returns {JSX.Element} The rendered TodoForm component with injected props.
 */
function TodoFormContainer() {
  const todosFormProps = useTodoForm();
  return <TodoForm {...todosFormProps} />;
}

export default TodoFormContainer;
