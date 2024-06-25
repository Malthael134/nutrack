"use server";
import Users from "@/components/Users";

export default async function Home() {
    async function getUsers(): Promise<string[]> {
        return [];
    }

    return (
        <main className="px-6 py-4">
            <Users />
        </main>
    );
}
