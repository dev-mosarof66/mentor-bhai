"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// Zod Schema
const signUpSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignUpData = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpData) => {
    console.log("Sign Up:", data);
    // API Request Here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <Input
          type="text"
          placeholder="John Doe"
          {...register("fullName")}
          className="mt-1"
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className="mt-1"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium">Password</label>
        <Input
          type="password"
          placeholder="••••••••"
          {...register("password")}
          className="mt-1"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button
        disabled={isSubmitting}
        className="w-full bg-orange-600 hover:bg-orange-700"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
};

export default SignUpForm;
