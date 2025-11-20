"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Settings } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MdHome, MdLogout } from "react-icons/md";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";

const navItems = [
  { name: "Home", href: "/dashboard", icon: MdHome },
  { name: "Your Learning", href: "/learning", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
];

const SideBar = () => {
  const router = useRouter();
  const [active, setActive] = useState("/dashboard");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = () => {
    setLoading(true);
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setLoading(false);
          router.push("/");
        },
      },
    });
  };

  return (
    <>
      <aside className="hidden md:flex flex-col justify-between w-60 md:w-72 xl:w-80 h-screen border-r bg-background px-4 py-6 shadow-sm">
        <div>
          <h2 className="text-xl font-bold mb-8">User Panel</h2>

          <nav className="w-full flex flex-col gap-4 text-foreground">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActive(item.href)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted transition",
                    active === item.href
                      ? "bg-secondary/50 text-foreground hover:bg-secondary"
                      : "text-foreground"
                  )}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="w-full">
          <Button className="w-full" onClick={handleLogout}>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <MdLogout />
                <span>Logout</span>
              </>
            )}
          </Button>
        </div>
      </aside>

      {/* bottom bar  */}
      <div className="md:hidden fixed bottom-0 w-full bg-background border-t border-secondary/50 rounded-t-2xl shadow-lg z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className="flex flex-col items-center gap-1"
              >
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon
                    size={24}
                    className={cn(
                      "transition",
                      isActive
                        ? "text-secondary"
                        : "text-foreground"
                    )}
                  />
                </motion.div>
                <span
                  className={cn(
                    "text-xs",
                    isActive
                      ? "text-secondary"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
