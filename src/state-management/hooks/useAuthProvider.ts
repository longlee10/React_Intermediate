import { useContext } from "react";
import UserContext from "../contexts/userContext";

const useAuthProvider = () => useContext(UserContext);
export default useAuthProvider;
