import React, { Dispatch } from "react";
import { AuthAction } from "./AuthProvider";

interface UserContextType {
  user: string;
  dispatchUser: Dispatch<AuthAction>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);
export default UserContext;
