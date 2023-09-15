import { ReactNode, useReducer } from "react";
import authReducer from "./authReducer";
import UserContext from "./userContext";

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
