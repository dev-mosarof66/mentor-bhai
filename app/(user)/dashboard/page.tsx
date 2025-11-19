"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";

const UserDashboard = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full p-2">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        {/* User Info Card */}
        <Card className="flex items-center gap-4 p-6">
          <Avatar className="size-16">
            {user?.image ? (
              <AvatarImage src={user.image} alt={user.name} />
            ) : (
              <AvatarFallback>
                <Skeleton className="size-16 rounded-full" />
              </AvatarFallback>
            )}
          </Avatar>

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {user?.name || "Loading..."}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {user?.email || "Loading..."}
            </p>
          </div>
        </Card>

        {/* Stats / Additional Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <Card className="p-4 text-center">
            <CardHeader>
              <CardTitle>Account Created</CardTitle>
              <CardDescription>
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Loading..."}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-4 text-center">
            <CardHeader>
              <CardTitle>Last Updated</CardTitle>
              <CardDescription>
                {user?.updatedAt
                  ? new Date(user.updatedAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Loading..."}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-4 text-center">
            <CardHeader>
              <CardTitle>Email Status</CardTitle>
              <CardDescription>
                {user?.emailVerified ? "Verified ✅" : "Not Verified ❌"}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
