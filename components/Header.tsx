import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b  border-gray-200 ">
      {/* Logo/Brand */}
      <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 tracking-tight">
          HabiNote
        </h1>
        {/* <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
          Beta
        </span> */}
      </div>

      {/* Auth Section */}
      <div className="flex items-center gap-3">
        <ThemeToggler />
        <SignedOut>
          <SignInButton>
            <button className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 hover:bg-gray-50">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#6c47ff] hover:bg-[#5b3ce6] text-white rounded-lg font-medium text-sm px-5 py-2.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
              Get Started
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-lg",
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}
