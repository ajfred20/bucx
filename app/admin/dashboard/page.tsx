"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/breadcrumb";
import { useSidebar } from "@/store/sidebar-context";

const Dashboard = () => {
  let collapsed = false;
  let toggleSidebar = () => {};

  try {
    const context = useSidebar();
    collapsed = context.collapsed;
    toggleSidebar = context.toggleSidebar;
  } catch (error) {
    console.error("Sidebar context not available:", error);
  }

  return (
    <div className="text-black">
      <div className="flex items-center gap-4 mb-6 px-4 py-2 border-b text-black">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <path d="M9 3v18" />
          </svg>
        </button>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin" className="text-black">
              Admin
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-black">Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-2">Users</h3>
            <p className="text-gray-600">Manage your users and permissions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-2">Transactions</h3>
            <p className="text-gray-600">View and manage transaction history</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-2">Settings</h3>
            <p className="text-gray-600">Configure system settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
