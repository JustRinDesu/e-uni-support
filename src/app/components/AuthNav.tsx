import Link from "next/link";
import { auth } from "@app/auth"; // Adjust this import to your actual auth config

export default async function AuthNav() {
  const session = await auth();

  return (
    <div className="flex items-center space-x-6 rtl:space-x-reverse">
      {session ? (
        <Link href="/my-account" className="items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center">
          My Account
        </Link>
      ) : (
        <Link href="/login" className="items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center">
          Login
        </Link>
      )}
    </div>
  );
}