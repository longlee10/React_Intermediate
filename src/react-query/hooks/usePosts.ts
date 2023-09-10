import useData from "./useData";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (userId: number | undefined) =>
  useData<Post[]>("posts", userId);

export default usePosts;
