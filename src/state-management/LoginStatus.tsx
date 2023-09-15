import useAuthProvider from "./auth/useAuthProvider";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const { user, dispatchUser } = useAuthProvider();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatchUser({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatchUser({ type: "LOGIN", username: "mosh.hamedani" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
