import Navbar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hrithik-Devfolio",
  description: "Hrithik's frontend developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
