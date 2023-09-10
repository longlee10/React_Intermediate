import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";

interface TodoContext {
  prevTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useMutation<Todo, Error, Todo, TodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://xjsonplaceholder.typicode.com/posts", todo)
        .then((res) => res.data),

    // Optimistic approach
    onMutate: (newTodo: Todo) => {
      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      // Approach 1 invalidating cache -> Use the queryClient object. Not working in JSON place holder
      // Approach 2: Updating data in cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      if (ref.current) ref.current.value = "";

      return { prevTodos };
    },

    // if post request success: update the todo list (Pessimistic approach)
    // Now with optimistic approach, in onSuccess success scenarios
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    // Handling error scenario
    onError: (err, newTodo, context) => {
      if (!context) return;

      // returning the previous UI
      queryClient.setQueryData<Todo[]>(["todos"], context.prevTodos);
    },
  });

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          // mutating data
          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: 1000,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
          }
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
