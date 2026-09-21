import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anmol-josan.github.io"),
  title: "Anmol Josan | Research, software, and systems",
  description:
    "Anmol Josan is a student researcher and software builder working across biomedical AI, educational access, and community infrastructure.",
  openGraph: {
    title: "Anmol Josan | Research, software, and systems",
    description:
      "Biomedical AI, educational access, and reliable systems for real people.",
    url: "https://anmol-josan.github.io",
    siteName: "Anmol Josan",
    type: "website"
  }
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
