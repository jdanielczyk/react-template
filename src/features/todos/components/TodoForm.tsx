import CustomButton from '../../../shared/ui/atoms/CustomButton';
import CustomInput from '../../../shared/ui/atoms/CustomInput';

/**
 * Props for the TodoForm component.
 *
 * @property register - Function or object used to register form fields, typically from a form library like react-hook-form.
 * @property handleSubmit - Function to handle form submission, optionally receives a React synthetic event.
 * @property errors - Object containing validation errors for the form fields.
 * @property isLoading - Indicates whether the form is currently submitting or loading.
 * @property isError - Indicates whether there was an error during form submission.
 * @property error - The error object or message returned if an error occurred.
 * @property onCancel - Callback function invoked when the cancel action is triggered.
 */
type TodoFormProps = {
  register: any;
  handleSubmit: (e?: React.BaseSyntheticEvent) => void;
  errors: any;
  isLoading: boolean;
  isError: boolean;
  error: any;
  onCancel: () => void;
};

/**
 * Renders a form for adding a new todo item.
 *
 * @param register - Function to register form input fields, typically from react-hook-form.
 * @param handleSubmit - Function to handle form submission, typically from react-hook-form.
 * @param errors - Object containing validation errors for the form fields.
 * @param isLoading - Boolean indicating if the form is in a loading state.
 * @param isError - Boolean indicating if there was an error during form submission.
 * @param error - Error object or message to display if an error occurred.
 * @param onCancel - Callback function to handle cancel action.
 *
 * @returns The rendered todo form component.
 */
function TodoForm({
  register,
  handleSubmit,
  errors,
  isLoading,
  isError,
  error,
  onCancel,
}: Readonly<TodoFormProps>) {
  return (
    <form onSubmit={handleSubmit} className="flex p-3stringify gap-2 items-center mb-4">
      <CustomInput
        type="text"
        placeholder="Add a new todo"
        {...register('todo')}
        disabled={isLoading}
      />
      {errors.todo && <span className="text-red-500">{errors.todo.message}</span>}

      <CustomButton type="submit" disabled={isLoading}>
        Add
      </CustomButton>

      <CustomButton
        type="button"
        disabled={isLoading}
        onClick={onCancel}
        className="cursor-pointer"
      >
        Cancel
      </CustomButton>

      {isLoading && <span className="ml-2 text-gray-500">Loading...</span>}
      {isError && <span className="ml-2 text-red-500">Error: {JSON.stringify(error)}</span>}
    </form>
  );
}

export default TodoForm;
