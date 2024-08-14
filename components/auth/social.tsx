"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Loader from "../loader";
import { useState } from "react";

const Social = () => {
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={`lg`}
        className="w-full"
        variant={`outline`}
        onClick={() => {
          setIsLoading(true)
          setIsGoogleLoading(true);
          onClick("google");
        }}
        disabled={isLoading}
      >
        {isGoogleLoading ? <Loader /> : <FcGoogle className="h-5 w-5" />}
      </Button>
      <Button
        size={`lg`}
        className="w-full"
        variant={`outline`}
        onClick={() => {
          setIsLoading(true)
          setIsGithubLoading(true);
          onClick("github");
        }}
        disabled={isLoading}
      >
        {isGithubLoading ? <Loader /> : <FaGithub className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default Social;
