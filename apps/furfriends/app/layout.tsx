import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FurFriends - Pet daycare software",
  description: "Take care of people's pets responsibly with FurFriends.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} text-sm text-zinc-900 bg-[#E5E8EC] min-h-screen`}
      >
        <SessionProvider basePath="/furfriends/api/auth">
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
