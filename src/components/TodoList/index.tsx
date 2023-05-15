import TodoItem from '../TodoItem';

type TodoListProps = {
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
