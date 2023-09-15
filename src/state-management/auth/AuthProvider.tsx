import { ReactNode, useReducer } from "react";
import UserContext from "./userContext";

interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

interface AuthProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <UserContext.Provider value={{ user, dispatchUser: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
