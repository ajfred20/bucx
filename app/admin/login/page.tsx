"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    toast.success("Login attempt registered");

    // Use setTimeout to redirect after toast duration
    setTimeout(() => {
      router.push("/admin/verify-otp");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Toaster position="top-center" />
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 w-full max-w-sm">
        <h1 className="text-xl font-medium text-center mb-1">Login</h1>
        <p className="text-gray-500 text-center text-sm mb-6">
          Enter your login details below to proceed
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="m@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white text-sm py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
