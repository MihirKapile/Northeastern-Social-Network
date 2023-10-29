import Image from "next/image";
// import { React, useState, useRef } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import {signOut, useSession} from "next-auth/react";
import Sidebaritem from "@/components/Sidebaritem";
import {AiOutlineUser} from "react-icons/ai";
import React from "react";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import axios from "axios";
// import { addPost, selectPost } from "../public/src/features/postSlice";
// import { useDispatch, useSelector } from "react-redux";

const CreatePost = () => {

  const { data: session, status } = useSession();


  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2 divide-y">
      <div className="flex p-4 space-x-2 items-center">

        { session.user.image? (
            <Image
                src={session.user.image}
                height={40}
                width={40}
                className="hidden rounded-full cursor-pointer"
            />
        ) : (
            <AiOutlineUser
                size={20}
                className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
            />
        )}

        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            placeholder={`What's on your mind, ${session?.user.name}?`}></input>
          <button hidden>
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <HiOutlineVideoCamera className="text-red-400" size={20} />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <IoMdPhotos className="text-red-500" size={20} />
          <p className="font-semibold text-gray-400">Photo/Video</p>
          <input
            type="file"
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <BsEmojiSmile className="text-red-400" size={20} />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
