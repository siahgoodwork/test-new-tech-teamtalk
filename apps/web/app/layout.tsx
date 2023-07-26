"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "../css/global.css";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,200;0,400;0,500;0,600;1,200;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-base h-screen">
        <SessionProvider session={session}>
          <div className="h-full">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}

// className="bg-extend-colors-bg"
