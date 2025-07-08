"use client";
import React, { useState } from "react";
import { LogIn } from "lucide-react";
import CustomInput from "@/components/shared/common/custom-input";
import CustomButton from "@/components/shared/common/custom-button";
import CustomLink from "@/components/shared/common/custom-link";
import CustomHeading from "@/components/shared/common/heading";
import toast from 'react-hot-toast';


const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // handle submit button 
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setLoading(true);
  try {
    const res = await fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data?.error || "Login failed");
    } else {
      // ✅ Save token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful! Redirecting...");

      // ✅ Redirect
      setTimeout(() => {
        // router.push("/dashboard");
      }, 2000);
    }
  } catch (err) {
    console.error("Login error:", err);
    toast.error("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};

// if user already login once 
// useEffect(() => {
//   const token = localStorage.getItem("token");
//   if (token) navigate("/dashboard");
// }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100   flex flex-col items-center justify-center p-4">

        {/* Go Back */}
      <CustomLink to="/" styles="text-black text-start w-full px-20">
        <CustomButton btnText="<< Go Back" AdditionalStyle="py-3"/>
      </CustomLink>
      <div className="max-w-md w-full bg-white overflow-hidden shadow-2xl">
        
        {/* login text div  */}
        <div className="flex flex-col items-center px-8 py-6 text-black bg-gradient-to-r from-blue-600 to-indigo-600">
            <LogIn className="h-8 w-8" />
          <CustomHeading
            text="Welcome"
            className="!text-2xl font-bold"
          />

          <p className="  mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 md:p-8 space-y-6">
          <div className="space-y-4">
            <CustomInput
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Enter your email"
              disabled={loading}
            />

            <CustomInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Enter your password"
              isPassword
              disabled={loading}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-black focus:ring-blue-500"
                disabled={loading}
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <CustomLink
              to="/auth/forgot-password"
              styles="text-sm text-blue-600 hover:text-blue-500 transition-colors"
            >
              Forgot password?
            </CustomLink>
          </div>

          <CustomButton
            btnText="Sign In"
            loading={loading}
            AdditionalStyle="w-full !bg-black !text-white hover:!text-black hover:!bg-white hover:!border py-3"
          />

          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <CustomLink
                to="/auth/signup"
                styles="text-blue-600 hover:text-blue-500 font-semibold transition-colors"
              >
                Sign up
              </CustomLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
