"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ForgetPasswordSchema = z.object({
  email: z.email("Email address is required."),
});

export default function ForgetPassword() {
  const rotuer = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ForgetPasswordSchema>>({
    resolver: zodResolver(ForgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSendResetLink = async (
    data: z.infer<typeof ForgetPasswordSchema>
  ) => {
    console.log(data);
    setLoading(true);
    authClient.requestPasswordReset(
      {
        email: data.email,
        redirectTo:"/reset-password"
      },
      {
        onSuccess: () => {
          setLoading(false);
          rotuer.push("/reset-password?message=check-your-mailbox");
        },
      }
    );
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto">
      <Card className="shadow-md">
        <CardHeader className="flex flex-col items-center gap-3">
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

          <h2 className="text-xl font-semibold text-orange-600">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Enter your email address and we’ll send you a password reset link.
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSendResetLink)}
              className="w-full flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {" "}
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
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
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <MdSend size={18} />
                    <span>Send Reset Link</span>
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
