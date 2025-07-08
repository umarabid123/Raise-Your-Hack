"use client";
import React, { useState } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
import { useParams } from "next/navigation";
import CustomInput from "@/components/shared/common/custom-input";
import CustomButton from "@/components/shared/common/custom-button";
import CustomHeading from "@/components/shared/common/heading";

const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  //   const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.error || "Reset failed");
      } else {
        setMessage("Password reset successful!");
        // setTimeout(() => navigate('/auth/signin'), 2000);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded p-6 space-y-6">
        <CustomHeading
          text="Reset Password"
          className="text-center text-xl font-bold"
        />
        <form onSubmit={handleSubmit} className="space-y-4">
          <CustomInput
            label="New Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
          <CustomInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />

          <CustomButton
            btnText="Reset Password"
            loading={loading}
            AdditionalStyle="w-full !bg-black !text-white hover:!bg-white hover:!text-black hover:!border py-3"
          />
        </form>

        {message && (
          <p className="text-center text-blue-600 text-sm">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
