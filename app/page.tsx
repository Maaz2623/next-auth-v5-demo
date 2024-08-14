"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
import Loader from "@/components/loader";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg text-center">
          A simple authentication system
        </p>
        <div className="flex justify-center">
          <LoginButton mode="modal" asChild>
            <Button
              className=""
              size={`lg`}
              variant={`secondary`}
              onClick={() => setIsLoading(true)}
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : "Sign in"}
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
