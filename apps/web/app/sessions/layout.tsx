"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <div>
      <SessionProvider session={session}>
        <div className="bg-p-y-base w-[280px] h-screen p-8"></div>
        <div className="h-full">{children}</div>
      </SessionProvider>
    </div>
  );
}
