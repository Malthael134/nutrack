"use client"
import { getServerAuthSession } from "@/server/auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {

    return (
        <main>
            <div>
                <AccountAuthMenu />
            </div>
            Hello, T3
        </main>
    );
}

function AccountAuthMenu() {
    const { data } = useSession();

    return data ? (
        <>
            Signed in as {data.user.email} <br />
            <button onClick={() => signOut()} className="hover:bg-gray-100">Sign out</button>
        </>
    ) : (
        <>
            Not signed in <br />
            <button onClick={() => signIn()} className="hover:bg-gray-100">Sign in</button>
        </>
    )
}
