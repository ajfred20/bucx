"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const OtpPage = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otpValues.join("");
    if (otpCode.length === 6) {
      toast.success("OTP verification successful");
      // Add verification logic here

      // Redirect after successful verification
      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 1500);
    } else {
      toast.error("Please enter all 6 digits");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Toaster position="top-center" />
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-4xl text-black font-semibold tracking-tight text-center mb-2">
          Verify Identity
        </h1>
        <p className="text-gray-600 text-center font-normal text-sm tracking-tight mb-8">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleVerify}>
          <div className="flex justify-between items-center mb-6">
            {otpValues.map((digit, index) => (
              <React.Fragment key={index}>
                {index === 2 || index === 4 ? (
                  <>
                    <span className="text-gray-400">—</span>
                    <input
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      className="w-10 h-10 text-center border border-gray-300 text-gray-900 rounded-md focus:outline-none"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </>
                ) : (
                  <input
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    className="w-10 h-10 text-center border border-gray-300 text-gray-900 rounded-md focus:outline-none"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-black text-white text-base tracking-tight py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
