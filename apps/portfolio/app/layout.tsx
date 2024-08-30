import "./globals.css";
import Footer from "components/footer";
import { Inter } from "next/font/google";
import Header from "components/header";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "components/theme-switch";
import ThemeContextProvider from "contexts/ThemeContextProvider";
import ActiveSectionContextProvider from "contexts/ActiveSectionContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catherine | Personal Portfolio",
  description:
    "Catherine is a front-end engineer with several years of experience."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm-pt-36 dark:bg-slate-800 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f9f4b2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] xl:left-[5rem] dark:bg-[#9cfdf3] "></div>
        <div className="bg-[#fddae8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#ffb892]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  );
}
