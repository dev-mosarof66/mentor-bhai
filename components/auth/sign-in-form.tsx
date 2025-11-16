"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Eye, EyeOff } from "lucide-react";

const signInSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* PASSWORD */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    {...field}
                  />
                </FormControl>

                {/* Toggle Password Visibility */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600 cursor-pointer transition-all duration-300 delay-75"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="w-full flex items-center justify-between">
                <FormMessage className="text-xs" />
                <span className="absolute right-0 -bottom-4 text-xs text-orange-600 cursor-pointer hover:underline">
                  Forgot password?
                </span>
              </div>
            </FormItem>
          )}
        />

        {/* SUBMIT BUTTON */}
        <div className="w-full pt-4">
          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700"
          >
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
