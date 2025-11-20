"use client";

import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TiHome } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { Card } from "@/components/ui/card";

export default function ErrorPage() {
  const router = useRouter();

  function openEmail(email: string) {
    window.location.href = `mailto:${email}`;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md w-full bg-background shadow-xl rounded-2xl p-8 text-center space-y-4">
          <AlertCircle className="mx-auto h-14 w-14 text-primary animate-bounce" />
          <h1 className="text-2xl font-bold text-secondary">
            Oops! Something went wrong
          </h1>
          <p className="text-foreground opacity-75">
            The page you are looking for might not exist, or an internal error
            occurred. Please try again or go back home.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-foreground">
            <Button
              onClick={() => router.push("/")}
              className="text-background"
            >
              <TiHome />
              Go Home
            </Button>
            <Button
              onClick={() => openEmail("support@gmail.com")}
              className="border border-primary text-foreground bg-transparent hover:bg-primary hover:text-background transition-colors duration-300 delay-75"
            >
              <FaPhone />
              Contact Support
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
