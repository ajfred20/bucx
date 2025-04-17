import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  SquaresPlusIcon,
  ClockIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-100 flex flex-col">
      {/* Header */}
      <div className="p-4 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-black rounded-lg p-2 w-10 h-10 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-medium text-lg text-gray-900">Bucx</h1>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 overflow-y-auto">
        <p className="px-4 text-sm text-gray-500 font-normal">Home</p>
        <ul className="mt-2 mb-6">
          <li>
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <span>Dashboard</span>
            </Link>
          </li>
        </ul>

        <p className="px-4 text-sm text-gray-500 font-normal">Transactions</p>
        <ul className="mt-2 mb-6">
          <li>
            <Link
              href="/admin/deposits"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <SquaresPlusIcon className="w-5 h-5" />
              <span>Deposits</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/withdrawals"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <ClockIcon className="w-5 h-5" />
              <span>Withdrawals</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/transaction-logs"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <ClockIcon className="w-5 h-5 rotate-90" />
              <span>Transaction logs</span>
            </Link>
          </li>
        </ul>

        <p className="px-4 text-sm text-gray-500 font-normal">
          User Management
        </p>
        <ul className="mt-2 mb-6">
          <li>
            <Link
              href="/admin/users"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <SquaresPlusIcon className="w-5 h-5" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/withdrawals-users"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <ClockIcon className="w-5 h-5" />
              <span>Withdrawals</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/transaction-logs-users"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <ClockIcon className="w-5 h-5 rotate-90" />
              <span>Transaction logs</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/waitlist-users"
              className="flex items-center gap-3 px-4 py-2 bg-gray-900 text-white"
            >
              <UsersIcon className="w-5 h-5" />
              <span>Waitlist users</span>
            </Link>
          </li>
        </ul>

        <p className="px-4 text-sm text-gray-500 font-normal">
          Account Management
        </p>
        <ul className="mt-2 mb-6">
          <li>
            <Link
              href="/admin/usd-account"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <SquaresPlusIcon className="w-5 h-5" />
              <span>USD account</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/solana-wallet"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <ClockIcon className="w-5 h-5" />
              <span>Solana wallet</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/transaction-logs-account"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <ClockIcon className="w-5 h-5 rotate-90" />
              <span>Transaction logs</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/waitlist-users-account"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <ClockIcon className="w-5 h-5 rotate-90" />
              <span>Waitlist users</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="User Avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">Slazenger</h3>
            <p className="text-xs text-gray-500">slazenger@gmail.com</p>
          </div>
          <ArrowRightIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </aside>
  );
}
