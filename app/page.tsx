"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// Add this content data outside the component
const featuresContent = [
  {
    id: "global-accounts",
    title: "Global accounts to send and receive payments",
    description:
      "You can open a US account in minutes to send and receive payments anytime and anywhere. Professionals can use their US account to receive payment in ACH or WIRE from platforms like Upwork, Fiverr, YouTube, Deel, etc. You can also send money directly into US accounts with your local currency without hassle.",
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
      "You get a Solana wallet when they sign up on Bucx making it possible to transact with stablecoins. When you receive USD payments, they are settled in stablecoins and you can also make payments with stablecoins directly into US accounts. You can also receive stablecoins on Solana from external wallets and send to external wallets as well.",
    active: false,
  },
];

// Add this near the top of your file
const fallbackImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState("global-accounts");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(
    "global-accounts"
  );
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        email: email,
        signup_date: new Date().toLocaleDateString(),
      };

      await emailjs.send(
        "service_j908tze",
        "template_u6m4e27",
        templateParams,
        "HbX6ZNCkLiZ5heY1K"
      );

      toast.success("Thanks for signing up!", {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#0C1B33",
          color: "#fff",
        },
      });

      setEmail("");
    } catch (error: unknown) {
      let errorMessage = "Failed to join waitlist. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }
      console.error("Error:", error);
      toast.error(errorMessage);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-4 sm:px-6 py-6 md:py-8 lg:py-10 border-b sm:border-b-0 border-gray-200 mb-8 md:mb-12 lg:mb-16">
          <div className="font-semibold text-3xl sm:text-4xl tracking-tight text-[#0C1B33]">
            bucx.
          </div>
          <div className="flex items-center gap-4 sm:gap-12">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-gray-900 font-normal cursor-pointer text-sm sm:text-base"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-[#0C1B33] text-white px-4 sm:px-8 py-2 sm:py-2.5 rounded-lg hover:bg-[#1e293b] font-normal transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Join waitlist
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 pt-12 pb-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-[#0C1B33] text-4xl sm:text-6xl font-medium leading-tight">
              Borderless
              <span className="inline-flex items-center gap-1.5 sm:gap-2 ml-2 sm:ml-0">
                <span className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/flags/nigeria.png"
                    alt="Nigeria flag"
                    width={75}
                    height={75}
                    className="object-cover"
                    onError={(e) => {
                      console.error("Failed to load flag:", e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </span>
                <span className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/flags/usa.png"
                    alt="USA flag"
                    width={75}
                    height={75}
                    className="object-cover"
                    onError={(e) => {
                      console.error("Failed to load flag:", e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </span>
                <span className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/flags/uk.png"
                    alt="UK flag"
                    width={75}
                    height={75}
                    className="object-cover"
                    onError={(e) => {
                      console.error("Failed to load flag:", e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </span>
                <span className="hidden sm:inline-flex w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 items-center justify-center overflow-hidden">
                  <Image
                    src="/flags/south-africa.png"
                    alt="South Africa flag"
                    width={75}
                    height={75}
                    className="object-cover"
                    onError={(e) => {
                      console.error("Failed to load flag:", e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </span>
                <span className="text-gray-500 text-base sm:text-lg font-normal">
                  +150
                </span>
                <br />
              </span>
              Banking for African Professionals
            </h1>

            <p className="text-gray-600 text-base sm:text-xl max-w-xl">
              Experience true borderless banking built for you to spend, send
              and receive payments in multiple currencies or stablecoins
              globally with lightening speed. Join our waitlist to be one of our
              early users.
            </p>

            <div className="flex items-center gap-3 sm:gap-6">
              <button
                onClick={() => scrollToSection("waitlist")}
                className="from-[#917AFD] to-[#6246EA] bg-gradient-to-r text-white px-6 sm:px-8 py-2.5 sm:py-3 font-medium rounded-lg hover:opacity-90 transition-all text-sm sm:text-base"
              >
                Join the waitlist
              </button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5 sm:-space-x-2">
                  <Image
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600">
                  Join 300+ professionals
                </span>
              </div>
            </div>

            {/* Image for mobile */}
            <div className="block lg:hidden mt-8">
              <Image
                src="/assets/frame-20.png"
                alt="Bucx Banking Interface"
                width={430}
                height={430}
                priority
                className="object-contain w-full"
                onError={(e) => {
                  console.error("Failed to load image:", e);
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
            </div>

            {/* Powered by Section */}
            <div className="mt-8 sm:mt-12 flex flex-col items-center sm:items-start">
              <p className="text-base sm:text-sm text-gray-500 mb-2">
                Powered by:
              </p>
              <Image
                src="/solana.png"
                alt="Solana"
                width={100}
                height={16}
                className="h-4 sm:h-4"
                onError={(e) => {
                  console.error("Failed to load Solana logo:", e);
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Right Column - Image (desktop only) */}
          <div className="hidden lg:flex items-center gap-4 justify-center">
            <Image
              src="/assets/frame-20.png"
              alt="Bucx Banking Interface"
              width={430}
              height={430}
              priority
              className="object-contain"
              onError={(e) => {
                console.error("Failed to load image:", e);
                const target = e.target as HTMLImageElement;
                target.src = fallbackImage;
              }}
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100">
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20"
        >
          <h2 className="text-2xl sm:text-5xl font-medium text-center mb-8 sm:mb-16 text-[#0C1B33]">
            Everything to make your money
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            lightening borderless
          </h2>

          <div className="flex flex-col gap-8 sm:gap-12">
            {/* Hide the navigation tabs on mobile */}
            <div className="hidden sm:flex justify-center mb-16">
              <div className="inline-flex bg-white p-1.5 rounded-xl">
                {[
                  "Global Accounts",
                  "Cards",
                  "P2P Payments",
                  "Stablecoins",
                ].map((text, index) => (
                  <button
                    key={featuresContent[index].id}
                    onClick={() => {
                      setActiveFeature(featuresContent[index].id);
                      setCurrentIndex(index);
                    }}
                    className={`px-10 py-3 rounded-lg transition-all text-base ${
                      activeFeature === featuresContent[index].id
                        ? "bg-[#0C1B33] text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Features List - Accordion Style */}
            <div className="flex flex-col gap-4 sm:hidden">
              {featuresContent.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() =>
                      setExpandedFeature(
                        expandedFeature === feature.id ? null : feature.id
                      )
                    }
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <h3 className="text-2xl font-medium text-[#0C1B33] pr-4">
                      {feature.title}
                    </h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transform transition-transform ${
                        expandedFeature === feature.id ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedFeature === feature.id
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-6 space-y-4">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="relative rounded-xl overflow-hidden mt-4">
                        <Image
                          src={`/assets/features-${feature.id}.png`}
                          alt={feature.title}
                          width={526}
                          height={420}
                          className="object-cover w-full"
                          quality={100}
                          priority
                          onError={(e) => {
                            console.error(
                              "Failed to load feature image:",
                              feature.id,
                              e
                            );
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Feature Content */}
            <div className="hidden sm:block rounded-[32px] border border-gray-100 bg-white p-12 shadow-sm">
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
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
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
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
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
                    priority
                    onError={(e) => {
                      console.error(
                        "Failed to load feature image:",
                        activeFeature,
                        e
                      );
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackImage;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative">
        {/* Left decorative image */}
        <div className="hidden sm:block absolute -left-4 md:-left-12 lg:-left-20 top-20 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
          <Image
            src="/assets/star.png"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Right decorative image */}
        <div className="hidden sm:block absolute -right-4 md:-right-12 lg:-right-20 top-20 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
          <Image
            src="/assets/spring.png"
            alt="Decorative element"
            width={300}
            height={300}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Content */}
        <div id="waitlist" className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0C1B33] mb-6 tracking-tightd b">
            The world has borders but your finances shouldn&apos;t
          </h2>
          <p className="text-gray-600 text-xl mb-12 tracking-tight">
            Your money should be where you want when you want it. Make your
            life, borderless. Make your money borderless. With Bucx the
            possibilities are endless.
          </p>

          {/* Email input and button */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border text-gray-700 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full from-[#917AFD] to-[#6246EA] bg-gradient-to-r text-white px-8 py-3 font-medium rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join the waitlist"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-950">
        {/* Add the borderless banking text section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-[60px] sm:text-[100px] font-semibold tracking-tight text-center leading-none">
              BORDERLESS BANKING
              <br />
              BUILT FOR YOU
            </h2>
          </div>
        </div>

        {/* Footer content */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
              <div className="text-white text-xl sm:text-2xl font-medium">
                bucx.
              </div>
              <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © {new Date().getFullYear()}, Bucx • All Rights Reserved
                <br />
                Bucx is a financial technology company, not a bank. All banking
                services are provided by our licensed banking partners.
              </div>
              <a
                href="https://twitter.com/bucxhq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-6 sm:h-6"
                >
                  <path
                    d="M14.2833 10.1571L21.9499 1H20.2103L13.5309 9.02542L8.20627 1H1.63647L9.67493 13.3264L1.63647 23H3.37613L10.4274 14.458L16.0503 23H22.6201L14.2822 10.1571H14.2833ZM11.3073 13.4361L10.4798 12.2372L4.04047 2.63873H7.19767L12.4219 10.4148L13.2494 11.6137L20.0199 21.7411H16.8627L11.3073 13.4372V13.4361Z"
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
