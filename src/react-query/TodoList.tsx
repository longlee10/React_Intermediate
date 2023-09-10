import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading data....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {data?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
