import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostQuery } from "./usePosts";

const useData = <T>(endpoint: string, userId?: number | undefined) => {
  const fetchData = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/" + endpoint, {
        params: { userId },
      })
      .then((res) => res.data);

  return useQuery<T, Error>({
    queryKey: userId ? ["users", userId, endpoint] : [endpoint],
    queryFn: fetchData,
    staleTime: 10 * 1000,
  });
};

export default useData;
