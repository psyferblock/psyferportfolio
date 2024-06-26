import "../styles/globals.css";

import { Inter } from "next/font/google";

import { ThemeProvider } from "./providers/ThemeProvider";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight:"400",
  variable:"--font-inter"
});
export const metadata: Metadata = {
  title: "Psyfer Inc ",
  description:
    "Digitization in Flow, Translate your existence to a digitallty relevant setup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={`${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
