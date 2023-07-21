"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
// import "../css/global.css";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <div className="bg-wave-pattern bg-contain bg-repeat-x bg-bg-base bg-center h-screen p-8 font-albertsans font-extralight">
      <SessionProvider session={session}>
        <div className="h-full">{children}</div>
      </SessionProvider>
    </div>
  );
}
