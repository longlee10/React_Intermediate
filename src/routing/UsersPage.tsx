import { Outlet, useParams } from "react-router-dom";
import UserList from "./UserListPage";

const UsersPage = () => {
  const params = useParams();

  return (
    <>
      <div className="row">
        <div className="col">
          <UserList />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UsersPage;
