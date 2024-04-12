"use client";
import { apiLink } from "@/app/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ResetPasswordPage = ({ params }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password === "") {
      setError("Passwords do not match");
      alert("Please enter valid email");
      return;
    }

    try {
      const response = await fetch(apiLink + "/auth/forget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: password,
        }),
      });

      if (response.ok) {
        setSuccess(true);

        alert("Password reset link sent to your email");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to reset password");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Internal server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Your Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Enter your email
              </label>
              <input
                id="password"
                name="password"
                type="text"
                autoComplete="Email"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
