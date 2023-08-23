import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "./components/Header/Header";
import NavLinks from "./components/Sidebar/NavLinks";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Bugel",
  description: "Daily News App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <div className="flex flex-row items-start">
          <NavLinks />
          {children}
        </div>
      </body>
    </html>
  );
}
