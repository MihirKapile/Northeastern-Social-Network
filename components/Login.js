import Image from "next/image";
import { signIn } from "next-auth/react";
("next-auth/client");

const Login = () => {
  return (
    // <div className="flex flex-col items-center mt-8">
    //   <Image
    //     src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
    //     width={200}
    //     height={200}
    //   />
    //   <a
    //     onClick={signIn}
    //     className="p-4 mt-6 cursor-pointer bg-blue-500 rounded-full text-white">
    //     Login with Facebook
    //   </a>
    // </div>
    <div className="flex flex-col items-center mx-auto space-y-[15px]">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
        className="space-y-[10px]"
        height={240}
        width={240}
      />

        <a
            onClick={() => signIn("azure-ad")}
            className="px-20 py-5 z-10 text-xl cursor-pointer -mt-16 bg-red-300 rounded-md text-white">
            Sign in with Northeastern Account
        </a>

      <a
        onClick={() => signIn("google")}
        className="px-20 py-5 z-10 text-xl cursor-pointer -mt-16 bg-red-300 rounded-md text-white">
        Guest? Sign in with Google
      </a>

    </div>
  );
};

export default Login;
