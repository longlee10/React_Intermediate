import { useContext } from "react";
import UserContext from "./userContext";

const useAuthProvider = () => useContext(UserContext);
export default useAuthProvider;
