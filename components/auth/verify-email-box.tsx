"use client";

import { MailCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CheckEmail = ({ subject }: { subject: string }) => {
  return (
    <div className="flex items-center justify-center px-4">
      <Card className="max-w-md w-full shadow-lg border border-orange-200">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-3">
            <MailCheck className="w-12 h-12 text-orange-600 animate-bounce" />
          </div>
          <CardTitle className="text-2xl font-semibold">
            Check your email
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            {subject}
          </p>
          <p className="text-sm text-gray-500">
            Click the link inside the email to verify your account. If you don’t
            see it, check your spam folder.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckEmail;
