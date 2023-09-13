import API_Client from "./api";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const todoAPI = new API_Client<Todo>("todos");

export default todoAPI;
