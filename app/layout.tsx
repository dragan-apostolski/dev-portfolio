import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React from 'react'


export const metadata: Metadata = {
  title: "Dragan Apostolski",
  description: "Full-stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Apostolski" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
    
        <meta property="og:image" content="/favicon/web-app-manifest-512x512.png" />
        <meta property="og:title" content="Dragan Apostolski" />
        <meta property="og:description" content="Full-stack web developer" />
        <meta property="og:url" content="https://apostolski-dragan.com" />
        <meta property="og:type" content="website" />

      </head>
      <body>
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
