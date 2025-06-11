import TodoFormContainer from './components/TodoFormContainer';
import TodoListContainer from './components/TodoListContainer';

/**
 * Renders the main Todos feature component.
 *
 * This component displays the heading, the form to add new todos,
 * and the container that lists all existing todos.
 *
 * @component
 */
function Todos() {
  return (
    <>
      <h2>Todos</h2>
      <TodoFormContainer />
      <TodoListContainer />
    </>
  );
}

export default Todos;
