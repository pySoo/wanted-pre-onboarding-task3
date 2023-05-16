import { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import InputTodo from '../../components/Todo/InputTodo';
import TodoList from '../../components/Todo/TodoList';
import { getTodoList } from '../../api/todo';
import styles from './styles.module.scss';

export default function Main() {
  const [todoListData, setTodoListData] = useState<TodoItemType[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
}
