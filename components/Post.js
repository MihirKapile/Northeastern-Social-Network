import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

/**
 * Post component displays individual posts with content, images, and interaction options.
 *
 * @param {{ post: Object }} props - The post data including name, timestamp, content, and image.
 */
const Post = ({ post }) => {
    return (
        <div className="flex flex-col" key={post.id}>
            {/* Post Header with User Info */}
            <div className="bg-white mt-6 rounded-md p-4">
                <div className="flex items-center space-x-2">
                    {/* User profile picture: Uncomment below line to display */}
                    {/* <img src={post.profilePic} className="rounded-full w-10 h-10" /> */}
                    <div>
                        <p className="font-medium">{post.name}</p>
                        <p className="text-xs text-gray-500">
                            {post.timeStamp}
                        </p>
                    </div>
                </div>
                <p className="py-4">{post.post}</p>
            </div>

            {/* Post Image: Displayed if available */}
            {post.image != null && (
                <div className="relative h-60 md:h-96 bg-white">
                    <Image src={post.image} objectFit="cover" layout="fill" />
                </div>
            )}

            {/* Footer with Interaction Options: Like, Comment, and Share */}
            <div className="flex items-center justify-center bg-white p-2">
                {/* <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <FiThumbsUp className="h-4" />
                    <p className="text-xs sm:text-base">Like</p>
                </div>
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <FaRegCommentAlt className="h-4" />
                    <p className="text-xs sm:text-base">Comment</p>
                </div>
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <RiShareForwardLine className="h-4" />
                    <p className="text-xs sm:text-base">Share</p>
                </div> */}
            </div>
        </div>
    );
};

export default Post;
