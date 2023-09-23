import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  console.log(params);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name")); //add this to url: ?name=Alice -> this is for searching purpose
  const location = useLocation();
  console.log(location); // current location in the url
  return <p>User</p>;
};

export default UserDetailPage;
