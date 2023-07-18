"use client";
import { usePathname } from "next/navigation";
import { Sidebar } from "../../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex gap-3 w-full box-border min-h-screen">
      <Sidebar active={pathname.replaceAll("/", "")} />
      <div className="p-6 w-full">{children}</div>
    </div>
  );
}
