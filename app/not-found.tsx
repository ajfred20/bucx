"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center max-w-md mx-auto">
        <div
        >
          <Link href="/" className="inline-block mb-8">
            <h2 className="text-gray-900 tracking-tighter text-4xl font-semibold">bucx.</h2>
          </Link>
        </div>

        <div
          className="mb-4"
        >
          <Image
            src="/assets/coming.png"
            alt="Avatar"
            width={80}
            height={80}
            className="mx-auto rounded-full"
          />
        </div>

        <h1
          className="text-4xl font-semibold tracking-tighter text-gray-800 mb-2"
        >
          Coming Soon!
        </h1>

        <p
          className="text-base text-gray-600 mb-8 font-normal tracking-tighter"
        >
          The Bucx Dev team are hard at work at getting this feature out. <br/>
          But once it&apos;s out you would be the first to know.chief we promise🫠
        </p>

        <div
        >
          <Link
            href="/admin/dashboard"
            className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium tracking-tight rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
