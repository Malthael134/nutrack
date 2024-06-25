import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body className="min-h-screen w-screen bg-gradient-to-b from-primary-950 to-slate-800">
                <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
        </html>
    );
}
