
"use client"

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 focus:ring-4 focus:bg-gray-400"
      onClick={() => signIn("github", { callbackUrl: "/my-account" })}
    >
      Login with GitHub
    </button>
  )
} 