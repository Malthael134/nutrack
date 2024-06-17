import { lucia } from "@/auth.js";
import { generateIdFromEntropySize } from "lucia";
import { hash } from "@node-rs/argon2";
import type { APIRoute } from "astro";
import { isValidEmail } from "@/helpers";
import { turso } from "@/turso";

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    if (!email || typeof email !== "string" || !isValidEmail(email)) {
        return new Response("Invalid email", {
            status: 400
        });
    }
    const password = formData.get("password");
    if (!password || typeof password !== "string" || password.length < 6) {
        return new Response("Invalid password", {
            status: 400
        });
    }
    const username = formData.get("username");
    if (!username || typeof username !== "string" || username.length < 6) {
        return new Response("Invalid password", {
            status: 400
        });
    }

    const passwordHash = await hash(password, {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    });
    const userId = generateIdFromEntropySize(10); // 16 characters long

    try {
        await turso.execute({
            sql: `INSERT INTO users (id, username, email, password_hash) VALUES (?, ?, ?, ?)`,
            args: [userId, username, email, passwordHash]
        });

        // await db.table("user").insert({
        //     id: userId,
        //     email,
        //     password_hash: passwordHash
        // });

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        return new Response(null, {
            status: 302,
            headers: {
                Location: "/",
                "Set-Cookie": sessionCookie.serialize()
            }
        });
    } catch {
        // db error, email taken, etc
        return new Response("Email already used", {
            status: 400
        });
    }
};