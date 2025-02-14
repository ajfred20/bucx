"use client";

import Image from "next/image";
import { useState } from "react";

// Add this content data outside the component
const featuresContent = [
  {
    id: "global-accounts",
    title: "Global accounts to send and receive payments",
    description:
      "You can open a global account in minutes to send and receive payments anytime and anywhere. Professionals can use their US account to receive payment in ACH or WIRE from platforms like Upwork, Fiverr, YouTube, Deel, etc or Euro accounts to receive payments. You can also send money directly into US and Euro accounts with your local currency without hassle.",
    active: true,
  },
  {
    id: "cards",
    title: "Spend your money online and physically anywhere in the world",
    description:
      "Get a virtual or physical card to make payments online and in-store at 130M+ merchants globally. Travellers can make payments anywhere without having to off-ramp to the local currency of their destination country.",
    active: false,
  },
  {
    id: "p2p",
    title: "Easily transfer money between friends and colleagues supafast",
    description:
      "Leverage the power of Bucx's lightening payment speed in multiple countries to transfer money between friends and colleagues at almost zero fees.",
    active: false,
  },
  {
    id: "stablecoins",
    title: "Experience the full power of Solana blockchain payments",
    description:
      "You get a Solana wallet when they sign up on Bucx making it possible to transact with stablecoins. All funds are held in stablecoins. You can accept USD/Euro payments, with this payment settled in stablecoins and also make payments with stablecoins directly into a US or Euro accounts. You can also receive stablecoins on Solana from external wallets.",
    active: false,
  },
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState("global-accounts");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuresContent.length);
    setActiveFeature(
      featuresContent[(currentIndex + 1) % featuresContent.length].id
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-4 sm:px-6 py-6">
          <div className="font-semibold text-4xl tracking-tight text-[#0C1B33]">
            bucx.
          </div>
          <div className="flex items-center gap-12">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-gray-900 font-normal cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-[#0C1B33] text-white px-8 py-2.5 rounded-lg hover:bg-[#1e293b] font-normal transition-colors"
            >
              Join waitlist
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 pt-20 pb-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[#0C1B33] text-5xl sm:text-6xl font-medium leading-none">
              Borderless{" "}
              <span className="inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/flags/nigeria.png"
                    alt="Nigeria flag"
                    width={75}
                    height={75}
                    className="object-cover"
                  />
                </span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/flags/usa.png"
                    alt="USA flag"
                    width={75}
                    height={75}
                    className="object-cover"
                  />
                </span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/flags/uk.png"
                    alt="UK flag"
                    width={75}
                    height={75}
                    className="object-cover"
                  />
                </span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/flags/south-africa.png"
                    alt="South Africa flag"
                    width={75}
                    height={75}
                    className="object-cover"
                  />
                </span>
                <span className="text-gray-500 text-lg font-normal">+150</span>
              </span>
              Banking for African Professionals
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-xl">
              Experience true borderless banking built for you to spend, send
              and receive payments in multiple currencies or stablecoins
              globally with lightening speed. Join our waitlist to be one of our
              early users.
            </p>

            <div className="flex items-center gap-6 mt-4">
              <button
                onClick={() => scrollToSection("waitlist")}
                className="from-[#917AFD] to-[#6246EA] bg-gradient-to-r text-white px-8 py-3 font-medium rounded-lg hover:opacity-90 transition-all"
              >
                Join the waitlist
              </button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-sm text-gray-600">
                  Join 300+ professionals
                </span>
              </div>
            </div>

            {/* Powered by Section */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-2">Powered by:</p>
              <img src="/solana.png" alt="Solana" className="h-4" />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:flex items-center gap-4 justify-center">
            <Image
              src="/assets/hero-img.png"
              alt="Bucx Banking Interface"
              width={430}
              height={430}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-4xl sm:text-5xl font-medium text-center mb-16 text-[#0C1B33]">
          Everything to make your money
          <br />
          lightening borderless
        </h2>

        <div className="flex flex-col gap-12">
          {/* Feature Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-100 p-1 rounded-xl">
              {["Global Accounts", "Cards", "P2P Payments", "Stablecoins"].map(
                (text, index) => (
                  <button
                    key={featuresContent[index].id}
                    onClick={() => {
                      setActiveFeature(featuresContent[index].id);
                      setCurrentIndex(index);
                    }}
                    className={`px-8 py-2.5 rounded-lg transition-all text-sm ${
                      activeFeature === featuresContent[index].id
                        ? "bg-[#0C1B33] text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {text}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Feature Content */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-5xl font-medium text-[#0C1B33] leading-tighter">
                  {featuresContent[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-xl tracking-tight">
                  {featuresContent[currentIndex].description}
                </p>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-4 pt-8">
                  <button
                    onClick={() => {
                      setCurrentIndex(
                        (prev) =>
                          (prev - 1 + featuresContent.length) %
                          featuresContent.length
                      );
                      setActiveFeature(
                        featuresContent[
                          (currentIndex - 1 + featuresContent.length) %
                            featuresContent.length
                        ].id
                      );
                    }}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Feature Image */}
              <div className="relative rounded-2xl overflow-hidden h-[420px]">
                <Image
                  src={`/assets/features-${activeFeature}.png`}
                  alt={featuresContent[currentIndex].title}
                  width={526}
                  height={420}
                  className="object-contain rounded-xl"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative">
        {/* Left decorative image */}
        <div className="absolute -left-20 top-20 w-[300px] h-[300px]">
          <Image
            src="/assets/star.png"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Right decorative image */}
        <div className="absolute -right-20 top-20 w-[300px] h-[300px]">
          <Image
            src="/assets/spring.png"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div id="waitlist" className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0C1B33] mb-6 tracking-tightd b">
            The world has borders but your finances shouldn&apos;t
          </h2>
          <p className="text-gray-600 text-lg mb-12 tracking-tight">
            Your money should be where you want when you want it. Make your
            life, borderless. Make your money borderless. With Bucx the
            possibilities are endless.
          </p>

          {/* Email input and button */}
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="w-full from-[#917AFD] to-[#6246EA] bg-gradient-to-r text-white px-8 py-3 font-medium rounded-lg hover:opacity-90 transition-all">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-950">
        {/* Add the borderless banking text section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-[120px] font-medium tracking-tight text-center leading-none">
              BORDERLESS BANKING
              <br />
              BUILT FOR YOU{" "}
              <div className="inline-flex flex-wrap items-center justify-center gap-1 mt-4">
                {/* First row */}
                <div className="flex gap-1">
                  <Image
                    src="/flags/canada.png"
                    alt="Canada"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/nigeria.png"
                    alt="Nigeria"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/usa.png"
                    alt="USA"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/uk.png"
                    alt="UK"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/south-africa.png"
                    alt="South Africa"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                {/* Second row */}
                <div className="flex gap-1">
                  <Image
                    src="/flags/canada.png"
                    alt="Canada"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/nigeria.png"
                    alt="Nigeria"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/usa.png"
                    alt="USA"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/uk.png"
                    alt="UK"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <Image
                    src="/flags/south-africa.png"
                    alt="South Africa"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span className="text-gray-400 text-xl tracking-tight">
                  +120
                </span>
              </div>
            </h2>
          </div>
        </div>

        {/* Footer content */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-white text-2xl font-medium">Bucx</div>
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()}, Bucx • All Rights Reserved
              </div>
              <a
                href="https://twitter.com/bucxhq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.07 4.19 20.76 3.13 21.09 1.92C20.13 2.52 19.05 2.98 17.92 3.22C16.89 2.16 15.42 1.5 13.83 1.5C10.76 1.5 8.26 4 8.26 7.07C8.26 7.52 8.31 7.96 8.41 8.37C4.69 8.14 1.39 5.91 -0.16 2.67C-0.66 3.53 -0.92 4.52 -0.92 5.58C-0.92 7.58 0.08 9.33 1.58 10.33C0.66 10.3 -0.22 10.04 -1 9.61V9.69C-1 12.39 0.94 14.67 3.44 15.19C2.95 15.32 2.44 15.39 1.91 15.39C1.54 15.39 1.17 15.36 0.82 15.3C1.56 17.54 3.66 19.17 6.13 19.21C4.19 20.72 1.77 21.61 -0.84 21.61C-1.37 21.61 -1.89 21.58 -2.4 21.53C0.11 23.14 3.07 24.07 6.27 24.07C13.83 24.07 17.96 17.46 17.96 11.79C17.96 11.54 17.95 11.3 17.94 11.06C18.92 10.33 19.76 9.41 20.4 8.35L22 4.01Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
