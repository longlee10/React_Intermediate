import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/reducer/taskReducer";
import TaskContext from "./state-management/contexts/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import authReducer from "./state-management/reducer/authReducer";
import UserContext from "./state-management/contexts/userContext";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [user, dispatchUser] = useReducer(authReducer, "");
  return (
    <>
      <UserContext.Provider value={{ user, dispatchUser }}>
        <TaskContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <HomePage />
        </TaskContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
