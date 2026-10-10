import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "SPARK — Find your people in the room", description: "A little chemistry, right where you are. Join the SPARK prototype." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
