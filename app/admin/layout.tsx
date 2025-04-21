"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/store/sidebar-context";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/admin/login" || pathname === "/admin/verify-otp";

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        {!isAuthPage && <Sidebar />}
        <main className={`overflow-y-auto ${isAuthPage ? "w-full" : "flex-1"}`}>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
