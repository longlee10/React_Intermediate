import { Todo } from "../api-client/todoService";
import todosKey from "../constant";
import useData from "./useData";

const useTodos = () => useData<Todo[]>(todosKey);

export default useTodos;
