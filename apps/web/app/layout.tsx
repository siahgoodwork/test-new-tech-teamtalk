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
    <html>
      <body className="bg-slate-100">
        <SessionProvider session={session}>
          <div className="min-h-screen">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
