import React from "react";
import Image from "next/image";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signOut } from "next-auth/react";

/**
 * Header component of the application.
 * It includes the logo, search bar, navigation icons, and user profile section.
 */
const Header = () => {
    const { data: session } = useSession();

    return (
        <div className="sticky z-50 flex h-16 bg-white items-center p-2 shadow-md top-0">
            {/* Left section with logo and search bar */}
            <div className="flex min-w-fit">
                {/* University Logo */}
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
                    height={40}
                    width={40}
                    alt={"Northeastern University"}
                />
                {/* Search Input */}
                <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
                    <HiOutlineSearch size={20} />
                    <input
                        className="hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink"
                        type="text"
                        placeholder="Search NEU SV"
                    />
                </div>
            </div>

            {/* Center section with navigation icons */}
            <div className="flex flex-grow justify-center mx-2">
                <div className="flex items-center">
                    {/* Home Icon */}
                    <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                        <HiOutlineHome
                            className="mx-auto text-red-400"
                            size={25}
                        />
                    </div>
                    {/* Other Navigation Icons (e.g., Flag, Video) */}
                    {/* ... */}
                </div>
            </div>

            {/* Right section with user profile and additional options */}
            <div className="flex items-center space-x-2 justify-end min-w-fit">
                {/* User Profile Image or Icon */}
                {session.user.image ? (
                    <Image
                        src={session.user.image}
                        height={40}
                        width={40}
                        onClick={signOut}
                        className="rounded-full cursor-pointer"
                        alt={"user photo"}
                    />
                ) : (
                    <AiOutlineUser
                        size={20}
                        className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
                        onClick={signOut}
                    />
                )}

                {/* User Name Display */}
                <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
                    {session?.user.name.split(" ")[0]}
                </p>
                {/* Additional Icons (e.g., Messages, Notifications) */}
                {/* ... */}
            </div>
        </div>
    );
};

export default Header;
