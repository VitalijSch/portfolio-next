import type { Metadata } from "next";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Portfolio",
};

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bricolage-grotesque">
        <Header />
        {children}
      </body>
    </html>
  );
}
