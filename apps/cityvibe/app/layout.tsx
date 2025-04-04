import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CityVibe - Find events around you",
  description: "Browse more than 10,000 events worldwide",
  icons: {
    icon: "/cityvibe-favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cityvibe-favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-gray-900 text-white overflow-y-scroll`}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
