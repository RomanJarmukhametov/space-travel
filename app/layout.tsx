import "@/app/ui/styles/globals.css";

import BackgroundWrapper from "@/app/ui/shared/BackgroundWrapper";
import TheNavbar from "@/app/ui/shared/TheNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BackgroundWrapper>
        <TheNavbar />
        {children}
      </BackgroundWrapper>
    </html>
  );
}
