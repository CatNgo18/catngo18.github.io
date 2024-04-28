import type { Metadata } from "next";
import { poppins, roboto_slab, shrikhand } from "./font";
import "./globals.css";
import NavBar from "@/components/NavBar";


export const metadata: Metadata = {
  title: "Cattien Ngo",
  description: "Cattien's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto_slab.variable} ${shrikhand.variable} w-screen`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
