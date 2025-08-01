"use client";
import { signIn } from "next-auth/react";
import React from "react";

function page() {
    return (
        <main
            className="text-center max-w-xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md"
            style={{ fontFamily: 'var(--font-sans)' }}
        >
            <h1 className="text-2xl font-bold mb-4 text-indigo-700">Welcome Back</h1>
            <p className="text-gray-500 mb-6 text-center">Login with your favorite provider</p>

            <button
                type="button"
                className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gray-800 text-white "
                onClick={() => signIn("github", { callbackUrl: "/my-account" })}
            >
                Login with GitHub
            </button>
        </main>
    );
}

export default page;