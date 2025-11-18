"use client";

import { CheckCircle } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MdLogin } from "react-icons/md";
import { motion } from "framer-motion";

const VerifySuccess = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl border border-green-300  backdrop-blur">
        <CardHeader className="text-center space-y-3">

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex justify-center animate-bounce"
          >
            <CheckCircle className="h-14 w-14 text-green-600 drop-shadow-md" />
          </motion.div>

          <CardTitle className="text-3xl font-semibold">
            Email Verified
          </CardTitle>

          <CardDescription className="text-base text-gray-600">
            Your account has been successfully verified.  
            You can now log in to continue.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <Button
            onClick={() => router.push("/auth")}
            className="w-full flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
          >
            <MdLogin className="text-lg" />
            Go to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifySuccess;
