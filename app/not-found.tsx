"use client";

import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TiHome } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";

export default function ErrorPage() {
  const router = useRouter();

  function openEmail(email: string) {
    window.location.href = `mailto:${email}`;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center space-y-4"
      >
        <AlertCircle className="mx-auto h-14 w-14 text-red-600 animate-bounce" />
        <h1 className="text-2xl font-bold text-red-700">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          The page you are looking for might not exist, or an internal error
          occurred. Please try again or go back home.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Button onClick={() => router.push("/")}>
            <TiHome />
            Go Home
          </Button>
          <Button
            onClick={() => openEmail("support@gmail.com")}
            variant={"outline"}
            className="text-orange-500 hover:text-orange-600"
          >
            <FaPhone />
            Contact Support
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
