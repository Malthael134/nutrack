import { LibSQLAdapter } from '@lucia-auth/adapter-sqlite';
import { Lucia, generateIdFromEntropySize } from 'lucia';
import { t as turso } from './_nutrient__Bbf6fiKT.mjs';
import { hash } from '@node-rs/argon2';

const adapter = new LibSQLAdapter(turso, {
  user: "users",
  session: "sessions"
});
const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: true
    }
  }
});

function isValidEmail(email) {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}

const POST = async ({ request }) => {
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
  const userId = generateIdFromEntropySize(10);
  try {
    await turso.execute({
      sql: `INSERT INTO users (id, username, email, password_hash) VALUES (?, ?, ?, ?)`,
      args: [userId, username, email, passwordHash]
    });
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
    return new Response("Email already used", {
      status: 400
    });
  }
};

const signup = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

export { lucia as l, signup as s };
