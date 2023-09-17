import useAuthProvider from "./useAuthProvider";
import useAuthStore from "./user";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  // const { user, dispatchUser } = useAuthProvider();
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("mosh.hamedani")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
