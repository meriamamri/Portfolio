import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/header";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Meriam Amri | Front-End Developer",
  description:
    "Portfolio of Meriam Amri, a passionate front-end developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              {/* <Footer /> */}
            </div>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
