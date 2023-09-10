import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import todosKey from "../constant";

interface TodoContext {
  prevTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, TodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    // Optimistic approach
    onMutate: (newTodo: Todo) => {
      const prevTodos = queryClient.getQueryData<Todo[]>([todosKey]) || [];
      // Approach 1 invalidating cache -> Use the queryClient object. Not working in JSON place holder
      // Approach 2: Updating data in cache
      queryClient.setQueryData<Todo[]>([todosKey], (todos = []) => [
        newTodo,
        ...todos,
      ]);

      // Replacing updating UI to move control to the component
      onAdd();
      return { prevTodos };
    },

    // if post request success: update the todo list (Pessimistic approach)
    // Now with optimistic approach, in onSuccess success scenarios
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>([todosKey], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    // Handling error scenario
    onError: (err, newTodo, context) => {
      if (!context) return;

      // returning the previous UI
      queryClient.setQueryData<Todo[]>([todosKey], context.prevTodos);
    },
  });
};

export default useAddTodo;
