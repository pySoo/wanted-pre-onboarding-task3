import TodoItem from '../TodoItem';
import styles from './styles.module.scss';

type TodoListProps = {
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export default function TodoList({ todos, setTodos }: TodoListProps) {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className={styles.emptyList}>...</div>
  );
}
