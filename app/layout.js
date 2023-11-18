import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Context from "@/context/RefContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Synergia",
  description:
    "Synergia -  Where tech minds converge to spark innovation and drive the future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
