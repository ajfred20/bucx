"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/breadcrumb";
import { useSidebar } from "@/store/sidebar-context";

interface WaitlistUser {
  id: number;
  email: string;
  dateJoined: string;
}

const WaitlistPage = () => {
  const [page, setPage] = useState(1);
  const usersPerPage = 10;

  // Mock data - replace with actual API call
  const mockUsers: WaitlistUser[] = Array(350)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      email: "slazengerjackson@gmail.com",
      dateJoined: "Aug 1, 2024, 03:43 AM",
    }));

  const totalUsers = mockUsers.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const startIndex = (page - 1) * usersPerPage;
  const currentUsers = mockUsers.slice(startIndex, startIndex + usersPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

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
    <div className="min-h-screen bg-white p-6">
      {/* Breadcrumb Navigation */}
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
            <BreadcrumbPage className="text-black">
              Waitlist Users
            </BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h1 className="text-3xl font-semibold text-black tracking-tighter text-center mb-12">
        Waitlist Users
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Total Waitlist Users Card */}
        <div className="bg-white text-black rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium">Total Waitlist Users</h2>
              <p className="text-5xl font-bold mt-2">350</p>
              <p className="text-sm text-gray-500 mt-1">All time</p>
            </div>
            <div className="text-gray-400">
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
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* New Waitlist Users Card */}
        <div className="bg-white text-black rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium">New Waitlist Users</h2>
              <p className="text-5xl font-bold mt-2">+150</p>
              <p className="text-sm text-gray-500 mt-1">
                Refreshes in 24 hours
              </p>
            </div>
            <div className="text-gray-400">
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
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white text-black rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-4 px-5 font-normal text-gray-600">S/N</th>
              <th className="py-4 px-5 font-normal text-gray-600">
                Email Address
              </th>
              <th className="py-4 px-5 font-normal text-gray-600">
                Date Joined
              </th>
              <th className="py-4 px-5 font-normal text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-4 px-5">{user.id}</td>
                <td className="py-4 px-5">{user.email}</td>
                <td className="py-4 px-5">{user.dateJoined}</td>
                <td className="py-4 px-5 text-right">
                  <button className="text-gray-500 hover:text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center py-4 border-t">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(1)}
              className="w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              «
            </button>
            <button
              onClick={() => handlePageChange(page - 1)}
              className="w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              ‹
            </button>
            <span className="px-4 text-gray-600">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              className="w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              ›
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              className="w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;
