"use client";
import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import Input from "@/components/shared/common/custom-input";
import CustomButton from "@/components/shared/common/custom-button";
import CustomLink from "@/components/shared/common/custom-link";
import CustomHeading from "@/components/shared/common/heading";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUp: React.FC = () => {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Minimum 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Use uppercase, lowercase, and number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data?.error === "Email already exists") {
          toast.error("Account already exists. Redirecting to sign in...");
          setTimeout(() => {
            router.push("/auth/signin");
          }, 2500);
        } else {
          toast.error(data?.error || "Signup failed");
        }
      } else {
        toast.success("Signup successful! Redirecting...");
        setTimeout(() => {
          router.push("/auth/signin");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Go Back */}
      <CustomLink to="/auth/signin" styles="text-black text-start w-full px-20">
        <CustomButton btnText="<< Go Back" AdditionalStyle="py-3" />
      </CustomLink>

      <div className="max-w-3/5 w-full bg-white shadow-xl overflow-hidden">
        <div className="flex flex-col items-center px-8 py-6 text-white bg-gradient-to-r from-purple-600 to-pink-600">
          <UserPlus className="h-8 w-8" />
          <CustomHeading
            text="Create Account"
            className="!text-2xl font-bold"
          />
          <p className="mt-2">Join us today</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              placeholder="Enter First Name "
              disabled={loading}
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              placeholder="Enter Last Name"
              disabled={loading}
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="store@example.com"
            disabled={loading}
          />

          <Input
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Create a strong password"
            isPassword
            disabled={loading}
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="Confirm your password"
            isPassword
            disabled={loading}
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              disabled={loading}
              required
            />
            <span className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-purple-600 hover:text-purple-500">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-purple-600 hover:text-purple-500">
                Privacy Policy
              </a>
            </span>
          </div>

          <CustomButton
            btnText="Create Account"
            loading={loading}
            AdditionalStyle="w-full !bg-black !text-white hover:!text-black hover:!bg-white hover:!border py-3"
          />

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <CustomLink
                to="/auth/signin"
                styles="text-purple-600 hover:text-purple-500 font-semibold transition-colors"
              >
                Sign in
              </CustomLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
