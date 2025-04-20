"use client";

import React, { useState } from "react";
import Image from "next/image";

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

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Waitlist Users</h1>

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
          <thead className="border-b">
            <tr className="text-left">
              <th className="p-5 font-medium">S/N</th>
              <th className="p-5 font-medium">Email Address</th>
              <th className="p-5 font-medium">Date Joined</th>
              <th className="p-5 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-5">{user.id}</td>
                <td className="p-5">{user.email}</td>
                <td className="p-5">{user.dateJoined}</td>
                <td className="p-5">
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
        <div className="flex justify-center items-center p-4 border-t">
          <div className="flex space-x-2">
            <button
              onClick={() => handlePageChange(1)}
              className="p-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              «
            </button>
            <button
              onClick={() => handlePageChange(page - 1)}
              className="p-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              ‹
            </button>
            <button
              onClick={() => handlePageChange(page + 1)}
              className="p-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              ›
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              className="p-2 rounded bg-gray-200 hover:bg-gray-300"
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
