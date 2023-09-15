import { useContext } from "react";
import TaskContext from "../contexts/taskContext";

const useTasksProvider = () => useContext(TaskContext);
export default useTasksProvider;
