import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Analytics Dashboard",
  description: "Premium AI-powered analytics and insights platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
