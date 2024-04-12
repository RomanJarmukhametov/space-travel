import type { Metadata } from "next";

import "@/app/ui/shared/globals.css";

export const metadata: Metadata = {
  title: "Home - Space Travel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
