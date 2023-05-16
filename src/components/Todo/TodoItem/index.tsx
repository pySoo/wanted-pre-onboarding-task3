import { FaSpinner, FaTrash } from 'react-icons/fa';
import { useCallback, useState } from 'react';

import { deleteTodo } from '../../../api/todo';
import styles from './styles.module.scss';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export default function TodoItem({ id, title, setTodos }: TodoItemProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className={styles.todoList}>
      <span>{title}</span>
      <div className={styles.todoListOption}>
        {!isLoading ? (
          <button type="button" onClick={() => handleRemoveTodo()}>
            <FaTrash className={styles.btnTrash} />
          </button>
        ) : (
          <FaSpinner className={styles.spinner} />
        )}
      </div>
    </li>
  );
}
