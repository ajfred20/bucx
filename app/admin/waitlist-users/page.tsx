"use client";

import React, { useState } from "react";
import { useSidebar } from "@/store/sidebar-context";

interface WaitlistUser {
  id: number;
  email: string;
  dateJoined: string;
}

const WaitlistPage = () => {
  const [page, setPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<WaitlistUser | null>(null);
  const usersPerPage = 10;

  // Mock data - replace with actual API call
  const mockUsers: WaitlistUser[] = Array(350)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      email: "slazengerjackson@gmail.com",
      dateJoined: "Aug 1",
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

  const handleDeleteClick = (user: WaitlistUser) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    console.log(`Deleting user ${userToDelete?.id}`);
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  // Get sidebar context
  let collapsed = true; // Default to collapsed (sidebar hidden)
  let toggleSidebar = () => {};

  try {
    const context = useSidebar();
    collapsed = context.collapsed;
    toggleSidebar = context.toggleSidebar;
  } catch (error) {
    console.error("Sidebar context not available:", error);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top navigation bar with sidebar toggle */}
      <div className="border-b border-gray-200 py-2 px-4 flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg"
          aria-label={collapsed ? "Show sidebar" : "Hide sidebar"}
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
            className="text-gray-700"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <path d="M9 3v18" />
          </svg>
        </button>
        <span className="text-gray-700 font-medium">Waitlist Users</span>
      </div>

      <div className="p-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-black mb-6">
          Waitlist Users
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* Total Waitlist Users Card */}
          <div className="bg-white text-black rounded-xl p-4 md:p-6 shadow-sm border">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-base md:text-lg font-medium">
                  Total Waitlist Users
                </h2>
                <p className="text-4xl md:text-5xl font-bold mt-1 md:mt-2">
                  350
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  All time
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

          {/* New Waitlist Users Card */}
          <div className="bg-white text-black rounded-xl p-4 md:p-6 shadow-sm border">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-base md:text-lg font-medium">
                  New Waitlist Users
                </h2>
                <p className="text-4xl md:text-5xl font-bold mt-1 md:mt-2">
                  +150
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
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
        <div className="bg-white text-black rounded-xl overflow-hidden shadow-sm border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-4 px-4 font-normal text-gray-600">S/N</th>
                  <th className="py-4 px-4 font-normal text-gray-600">
                    Email Address
                  </th>
                  <th className="py-4 px-4 font-normal text-gray-600">Date</th>
                  <th className="py-4 px-4 font-normal text-gray-600"></th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-4 px-4">{user.id}</td>
                    <td className="py-4 px-4">{user.email}</td>
                    <td className="py-4 px-4">{user.dateJoined}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        className="text-gray-500 hover:text-gray-800"
                        onClick={() => handleDeleteClick(user)}
                      >
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
          </div>

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
                Page {page} of {Math.ceil(totalUsers / usersPerPage)}
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this entry? This will permanently
              erase this user from the waitlist database. This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelDelete}
                className="px-6 py-2 border border-gray-300 rounded-lg text-black hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistPage;
