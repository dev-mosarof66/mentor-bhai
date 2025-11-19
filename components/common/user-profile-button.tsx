"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";
import { AnimatePresence, motion } from "framer-motion";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const UserProfileButton = ({ showMenu }: { showMenu: boolean }) => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <div className="relative flex items-center">
      {/* Avatar */}
      <Avatar className="size-[26px] sm:size-7  cursor-pointer">
        {isPending ? (
          <Skeleton className="size-[26px]  sm:size-7 bg-black rounded-full" />
        ) : (
          <>
            <AvatarImage src={data?.user?.image || ""} alt="User" />
            <AvatarFallback className="bg-orange-800 text-white">
              {data?.user?.name?.charAt(0)?.toUpperCase() || <User />}
            </AvatarFallback>
          </>
        )}
      </Avatar>

      <AnimatePresence>
        {showMenu && !isPending && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-10 w-56 rounded-md border border-gray-200 dark:border-neutral-800 shadow-lg bg-white dark:bg-neutral-900 p-4 flex flex-col gap-3 z-50"
          >
            <div
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2"
            >
              <Avatar className="size-7">
                <AvatarImage src={data?.user?.image || ""} />
                <AvatarFallback className="bg-orange-800 text-white">
                  {data?.user?.name?.charAt(0)?.toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <p className="font-semibold text-sm">{data?.user?.name}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-orange-600 hover:bg-red-100 dark:hover:bg-orange-950 dark:text-orange-500"
              onClick={handleLogout}
            >
              <LogOut className="size-4" />
              Logout
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfileButton;
