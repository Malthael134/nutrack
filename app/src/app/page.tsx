"use server";
import Counter from "@/components/Counter";

export default async function Home() {
    async function getUsers(): Promise<string[]> {
        return [];
    }

    return (
        <main>
            <Counter />
        </main>
    );
}
