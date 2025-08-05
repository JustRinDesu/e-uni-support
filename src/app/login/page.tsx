import React from "react";
import SignIn from "../components/sign-in";

function page() {
    return (
        <main
            className="text-center max-w-xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md"
            style={{ fontFamily: 'var(--font-sans)' }}
        >
            <h1 className="text-2xl font-bold mb-4 text-indigo-700">Welcome Back</h1>
            <p className="text-gray-500 mb-6 text-center">Login with your favorite provider</p>

            <SignIn />

        </main>
    );
}

export default page;