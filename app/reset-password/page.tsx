"use client";

import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import VerifySuccess from "@/components/auth/email-verify-success";
import VerifyEmailError from "@/components/auth/email-verify-error";
import CheckEmail from "@/components/auth/verify-email-box";
import { Button } from "@/components/ui/button";
import { TiHome } from "react-icons/ti";
import ResetPassWordBox from "@/components/auth/reset-password-box";

const VerifyEmailPage = () => {
  const { isPending } = authClient.useSession();
  const params = useSearchParams();
  const router = useRouter();

  const success = params.get("success");
  const invalid = params.get("invalid-token");
  const isMailSent = params.get("message");
  const token = params.get("token");

  console.log(token)

  if (isPending) {
    return (
      <div className="w-full h-[98vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (success) {
    return (
      <VerifySuccess
        title="Password Reseted"
        body="Your password has been successfully reseted. You can now log in now."
      />
    );
  }
  if (invalid) {
    return (
      <VerifyEmailError title="Invalid Reset Link" page="reset-password" />
    );
  }

  if (isMailSent?.toLocaleLowerCase() === "check-your-mailbox") {
    return (
      <CheckEmail subject="We’ve sent a password reset link to your email" />
    );
  }

  if (token) {
    return <ResetPassWordBox token={token} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] px-4">
      <Card className="w-full max-w-md border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl text-center p-6">
        <CardHeader className="flex flex-col items-center mb-4">
          <AlertTriangle className="h-12 w-12 text-red-600 mb-2 animate-bounce" />
          <CardTitle className="text-xl font-bold text-red-700">
            Invalid Path
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-600 dark:text-gray-400">
          <p>You seem to be on an invalid page.</p>
        </CardContent>
        <Button onClick={() => router.push("/")}>
          <TiHome />
          Go Home
        </Button>
      </Card>
    </div>
  );
};

export default VerifyEmailPage;
