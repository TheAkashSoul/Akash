import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Patro",
  description: "Akash Patro Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#18181B] text-[#000000] dark:text-[#FFFFFF]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
