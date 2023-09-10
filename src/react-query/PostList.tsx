import { useState } from "react";
import usePosts from "./hooks/usePosts";
import useInfinitePost from "./hooks/useInfinitePost";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfinitePost({
      pageSize,
    });

  if (isLoading) return <p>Loading data...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId} // the right user get selected
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      {/* <button
        className="btn btn-primary my-3"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button> */}
      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
function useInfinitePosts(userId: number | undefined): {
  data: any;
  error: any;
  isLoading: any;
} {
  throw new Error("Function not implemented.");
}
