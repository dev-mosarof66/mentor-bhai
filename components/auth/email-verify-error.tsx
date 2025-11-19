"use client";
import { TiHome } from "react-icons/ti";

import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { MdOutlineRefresh } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";
import { Spinner } from "../ui/spinner";

export default function VerifyEmailError({
  title,
  page,
}: {
  title: string;
  page: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleResendEmail = async () => {
    const storedEmail = localStorage.getItem("xyz");

    const email = storedEmail ? JSON.parse(storedEmail) : null;

    if (!email) {
      toast.error("Please first signup and then try this feature.");
      return;
    }

    setLoading(true);
    if (page === "verify-email") {
      authClient.sendVerificationEmail(
        {
          email,
        },
        {
          onSuccess: () => {
            router.push(`/verify-email?message=check-your-mailbox`);
            setLoading(false);
          },
          onError: ({ error }) => {
            if (error.status === 500) {
              router.push("/error");
            } else {
              toast.error(error.message);
            }
            setLoading(false);
          },
        }
      );
    } else {
      authClient.requestPasswordReset(
        {
          email,
        },
        {
          onSuccess: () => {
            router.push(`/verify-email?message=check-your-mailbox`);
            setLoading(false);
          },
          onError: ({ error }) => {
            if (error.status === 500) {
              router.push("/error");
            } else {
              toast.error(error.message);
            }
            setLoading(false);
          },
        }
      );
    }
  };
  return (
    <div className="min-h-full flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 text-center space-y-4"
      >
        <AlertTriangle className="mx-auto h-12 w-12 text-red-600 animate-bounce" />
        <h1 className="text-2xl font-semibold text-red-700">{title}</h1>
        <p className="text-gray-500">
          This email verification link is invalid or has expired. Please request
          a new verification email.
        </p>

        <div className="w-full flex items-center justify-center gap-4">
          <Button
            onClick={handleResendEmail}
            className={`${loading && "w-32"}`}
          >
            {loading ? (
              <Spinner />
            ) : (
              <>
                <MdOutlineRefresh />
                <span>Resend Email</span>
              </>
            )}
          </Button>
          <Button
            disabled={loading}
            variant={"outline"}
            onClick={() => router.push("/")}
          >
            <TiHome />
            <span>Go Home</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
