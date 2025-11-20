/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { BadgeCheck, User } from "lucide-react";

const UserInfoCard = ({user}: any) => {
  return (
     <Card className="flex items-center gap-4 p-6 bg-primary/10 text-foreground shadow ">
          <Avatar className="size-16 lg:size-24">
            {user?.image ? (
              <AvatarImage src={user.image} alt={user.name} />
            ) : (
              <AvatarFallback className="bg-secondary text-foreground text-2xl">
                {user?.name?.charAt(0)?.toUpperCase() || <User />}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="flex flex-col items-center gap-1">
            <h2 className="text-2xl font-bold text-foreground">
              {user?.name || "Loading..."}
            </h2>
            <p className="text-foreground">
              {user?.email || "Loading..."}
            </p>
            <div className="w-full flex items-center justify-center gap-2 text-base">
              <p className="text-secondary">
                Joined :{" "}
                <span>
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "Loading..."}
                </span>
              </p>
              <div className="text-green-500">
                <BadgeCheck size={22} />
              </div>
            </div>
          </div>
        </Card>
  )
}

export default UserInfoCard