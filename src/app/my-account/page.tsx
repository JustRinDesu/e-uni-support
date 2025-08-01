import { auth, signOut } from "@app/auth";
import React from "react";

async function page() {
    const session = await auth();

    if (!session) {
        return (
            <main
                className="max-w-5xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md"
                style={{ fontFamily: 'var(--font-sans)' }}
            >
                <div>Please login to view your account.</div>
            </main>
        );
    }

    const user = session.user;

    const userInfo = {
        name: user?.name,
        email: user?.email,
    };
    return (
        <main
            className="max-w-5xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md"
            style={{ fontFamily: 'var(--font-sans)' }}
        >
            <div>This is my account page</div>
            <pre className=" p-2 rounded-md">
                {JSON.stringify(userInfo, null, 2)}
            </pre>
            <form action={signOutAction}>
                <button
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gray-800 text-white ">
                    Logout
                </button>
            </form >
        </main>

    );
}

async function signOutAction() {
    "use server";
    await signOut();
}

export default page;