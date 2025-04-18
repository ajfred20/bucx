import React from "react";
import { Menu } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6 px-4 py-2 border-b">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Menu className="w-6 h-6" />
        </button>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <h2 className="text-7xl text-center tracking-tighter text-black font-semibold">
        This is the dashboard route
      </h2>
    </div>
  );
};

export default Dashboard;
