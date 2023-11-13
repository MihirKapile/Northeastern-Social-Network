import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost, updateAllPost } from "../public/src/features/postSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  useEffect(() => {
    const fetchData = () => {
      const response = axios
        .get("http://localhost:8080/api/v1/post")
        .then((response) => {
          console.log(response.data);
          dispatch(updateAllPost(response.data));
        });
    };
    fetchData();
    console.log(posts);
  }, [posts]);

  return (
    <div>
      {posts
        .slice()
        .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp))
        .map((post) => (
          <Post post={post} key={post.id} />
        ))}
    </div>
  );
};

export default Posts;
