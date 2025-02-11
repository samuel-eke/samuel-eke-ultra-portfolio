import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; //this themeprovider is used to manage the modes of the application from light to dark n vis-versa

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Samuel Eke portfolio",
  description: "Website and Webapp development that is for you",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} antialiased font-poppins`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
