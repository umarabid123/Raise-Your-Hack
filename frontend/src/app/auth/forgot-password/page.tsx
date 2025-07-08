"use client";
import React, { useState } from "react";
import CustomInput from "@/components/shared/common/custom-input";
import CustomButton from "@/components/shared/common/custom-button";
import CustomHeading from "@/components/shared/common/heading";
import CustomLink from "@/components/shared/common/custom-link";
import toast from "react-hot-toast";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.error || "Something went wrong");
      } else {
        toast.success("Check your email for the reset link");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Go Back */}
      <CustomLink to="/auth/signin" styles="text-black text-start">
        <CustomButton btnText="<< Go Back" AdditionalStyle="py-3" />
      </CustomLink>

      <div className="w-full max-w-md bg-white shadow-lg p-6 space-y-4  ">
        <CustomHeading
          text="Forgot Password"
          className="text-center text-xl font-semibold text-red-400"
        />
        <form onSubmit={handleSubmit} className="space-y-4">
          <CustomInput
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <CustomButton
            btnText="Send Reset Link"
            loading={loading}
            AdditionalStyle="w-full bg-black text-white hover:bg-white hover:text-black hover:border py-3"
          />
        </form>

        {message && (
          <p className="text-center text-sm text-blue-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
