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
    <html lang="en" className="bg-base">
      <body>
        <SessionProvider session={session}>
          <div className="min-h-screen">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}

// className="bg-extend-colors-bg"
