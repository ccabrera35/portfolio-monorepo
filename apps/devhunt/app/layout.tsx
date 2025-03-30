import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveIdContextProvider } from "contexts/ActiveIdContextProvider";
import { JobItemsContextProvider } from "contexts/JobItemsContextProvider";
import { BookmarksContextProvider } from "contexts/BookmarksContextProvider";
import { SearchTextContextProvider } from "contexts/SearchTextContextProvider";

import { Toaster } from "react-hot-toast";
import Header from "components/header";
import Footer from "components/footer";
import Background from "components/background";
import QueryProvider from "contexts/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHunt",
  description: "Find your next software engineering job.",
  icons: {
    icon: "/devhunt-favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/devhunt-favicon.ico" />
      </head>
      <body
        className={`${inter.className} leading-snug bg-[#dee3e9] text-[rgb(22, 24, 28)] min-h-screen relative`}
      >
        <QueryProvider>
          <BookmarksContextProvider>
            <ActiveIdContextProvider>
              <SearchTextContextProvider>
                <JobItemsContextProvider>
                  <Background />
                  <Header />
                  {children}
                </JobItemsContextProvider>
              </SearchTextContextProvider>
            </ActiveIdContextProvider>
          </BookmarksContextProvider>
        </QueryProvider>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
