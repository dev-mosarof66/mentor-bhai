"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { Eye, EyeOff } from "lucide-react";

const ResetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ResetPassWordBox({ token }: { token: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleResetPassword = async (
    data: z.infer<typeof ResetPasswordSchema>
  ) => {
    if (loading) return;

    setLoading(true);
    authClient.resetPassword(
      {
        newPassword: data.password,
        token,
      },
      {
        onSuccess: () => {
          router.push("/reset-password?success=true");
        },
        onError: ({ error }) => {
          if (error.status === 500) {
            router.push("/not-found");
          } else {
            router.push("/reset-password?invalid-token=true");
          }
        },
      }
    );
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto">
      <Card className="shadow-md">
        <CardHeader>
          <div className="w-full flex flex-col items-center gap-1 border-b pb-2 border-b-orange-400/20">
            <Image
              src={Logo}
              alt="Brand Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <p className="text-base font-semibold">Mentor Bhai</p>
          </div>
          <h2 className="text-xl font-semibold text-orange-600 text-center">
            Reset Password
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Enter your new password below.
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleResetPassword)}
              className="space-y-4"
            >
              {/* New Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Re-enter password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                type="submit"
                className="w-full flex items-center gap-2"
              >
                {loading ? <Spinner /> : "Reset Password"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
