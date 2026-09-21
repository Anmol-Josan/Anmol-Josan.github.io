import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A. Josan | Systems, Research, Impact",
  description:
    "A scroll-driven personal website for a biomedical AI researcher, systems builder, and student leader."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
