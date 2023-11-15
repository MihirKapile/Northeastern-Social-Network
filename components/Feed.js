import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import Posts from "@/components/Posts";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* Create Box */}
        <CreatePost data-testid="create-post"/>
        {/* Posts */}
        <Posts data-testid="posts"/>
      </div>
    </div>
  );
};

export default Feed;
