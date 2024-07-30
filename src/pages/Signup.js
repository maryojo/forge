import React from "react";
import logo from "../assets/logo.png";
import signupDisplayImage from "../assets/signup-image.jpg";
import LineButtons from "../components/LineButtons";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import Slider from "../components/Slider";

const Signup = () => {
  const googleButtonContent = (
    <div className="flex flex-row justify-center items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 48 48"
      >
        <path
          fill="#FFC107"
          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
        />
        <path
          fill="#FF3D00"
          d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
        />
      </svg>
      <p className="text-neutral-600">Continue with Google</p>
    </div>
  );

  const xButtonContent = (
    <div className="flex flex-row justify-center items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"
        />
      </svg>
      <p className="text-neutral-600">Continue with X</p>
    </div>
  );

  return (
    <div className="flex flex-row w-full h-full gap-4">
      <div className="w-[50%] p-4 pr-0 h-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <img src={logo} alt="logo" />
          <div className="text-[14px] font-[500] flex flex-row items-center gap-2">
            <p>Already have an account?</p>
            <p className="underline cursor-pointer text-[#CD7427]">Login</p>
          </div>
        </div>
        <div className="my-auto">
          <h1 className="text-[24px] font-[600] tracking-[-1.44px] mb-5">
            Create an Account
          </h1>
          <div className="flex flex-col gap-2">
            <LineButtons content={googleButtonContent} />
            <LineButtons content={xButtonContent} />
          </div>
          <form className="flex flex-col gap-3 mt-5">
            <InputField
              name="email"
              label="Email"
              placeholder="Enter you email"
              type="email"
            />
            <InputField
              name="password"
              label="Password"
              placeholder="Enter you password"
              type="password"
            />
            <InputField
              name="repeat-password"
              label="Repeat Password"
              placeholder="Enter you password again"
              type="password"
            />
            <PrimaryButton content="Signup" additionalClassName="mt-5" />
            <p className="text-[12px] text-center">
              By creating an account, you’re agreeing to our{" "}
              <span className="font-semibold cursor-pointer">
                terms and conditions
              </span>
            </p>
          </form>
        </div>
      </div>
      <div className="w-[50%] p-4 pl-0 pr-0 ml-4 mr-4 h-screen relative overflow-clip z-20">
        <div className="absolute w-full bottom-4 h-[50%] bg-gradient-to-t from-black to-transparent text-white rounded-b-[15px] left-0 right-0 px-12 pt-36 pb-9 flex flex-col justify-between">
          <p className="text-[20px] font-semibold italic ml-5">Hello</p>
          <div className="flex flex-row items-center justify-between">
            <div className="w-[40%]">
              <Slider />
            </div>
            <div className="w-1/2 text-right text-[12px] flex flex-row items-center justify-end gap-2">
              <p className="font-medium">Name</p>
              <div className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="#FFAC33"
                    d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
                  />
                </svg>
                <p>(4.0)</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={signupDisplayImage}
          alt="display"
          className="h-full w-full object-cover object-right rounded-[15px]"
        />
      </div>
    </div>
  );
};

export default Signup;
