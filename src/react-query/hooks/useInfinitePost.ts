import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post, PostQuery } from "./usePosts";

export interface InfinitePostQuery {
  pageSize: number;
}

const useInfinitePost = (query: InfinitePostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
    keepPreviousData: true,
    getNextPageParam: (last, all) => {
      return last.length > 0 ? all.length + 1 : undefined;
    },
  });
};

export default useInfinitePost;
