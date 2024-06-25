"use server";
import Users from "@/components/Users";

export default async function Home() {
    async function getUsers(): Promise<string[]> {
        return [];
    }

    return (
        <main className="h-full w-full bg-inherit px-6 py-4">
            <Users />
        </main>
    );
}
