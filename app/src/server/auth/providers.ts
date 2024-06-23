import CredentialsProvider from "next-auth/providers/credentials";
import { type Provider } from "next-auth/providers/index";

/**
 * Refer to the NextAuth.js docs for the provider you want to use.
 *
 * @see https://next-auth.js.org/providers
 */
const providers = [
    CredentialsProvider({
        credentials: {
            username: { label: "username" },
            password: { label: "password", type: "password" }
        },
        async authorize(credentials, req) {
            return null;
        },
    })
] satisfies Provider[];

export default providers;
