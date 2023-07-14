"use client";
import { Sidebar } from "../../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 w-full box-border min-h-screen">
      <Sidebar />
      <div className="p-6 w-full">{children}</div>
    </div>
  );
}
