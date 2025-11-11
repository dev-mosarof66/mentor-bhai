"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import ThemeSetter from "./theme";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isAuthRoutes =
    pathname === "/signin"
      ? true
      : pathname === "/signup"
      ? true
      : pathname === "/otp"
      ? true
      : false;

  return (
    <nav
      className={`w-full ${
        isAuthRoutes && "hidden"
      } flex items-center justify-center px-4 py-3 text-foreground fixed top-0 left-0 backdrop-blur-sm`}
    >
      <header
        key={"modal"}
        className="w-full max-w-7xl mx-auto flex items-center justify-between"
      >
        <ul>
          <li className="font-semibold">L2R</li>
        </ul>
        <ul className="hidden sm:flex items-center text-foreground opacity-90 text-sm gap-2">
          <li>Home</li>
          <li>Dictionary</li>
          <li>Courses</li>
          <li>Practice</li>
          <li>Exams</li>
        </ul>
        <ul className="flex items-center gap-2 sm:gap-4">
          <li>
            <ThemeSetter />
          </li>
          <li onClick={() => setSidebarOpen(true)} className="block sm:hidden">
            <Button size="icon" variant="outline">
              <FaBars />
            </Button>
          </li>
          <li className="hidden sm:block">
            <Button size="sm">Login</Button>
          </li>
        </ul>
      </header>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.header
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="w-full  h-screen flex items-end justify-end gap-4  fixed right-0 top-0 "
          >
            <nav className="w-64 h-full bg-background  shadow-sm shadow-black flex flex-col justify-between p-3">
              <div className="w-full flex flex-col gap-3">
                <ul className="w-full flex items-center justify-between">
                  <li className="font-semibold">L2R</li>
                  <Button
                    onClick={() => setSidebarOpen(false)}
                    size={"icon-sm"}
                    variant={"outline"}
                  >
                    <FaTimes />
                  </Button>
                </ul>
                <ul className="w-full flex flex-col gap-2">
                  <li>Home</li>
                  <li>Dictionary</li>
                  <li>Courses</li>
                  <li>Practice</li>
                  <li>Exams</li>
                </ul>
              </div>
              <ul className="flex items-center gap-2 mb-14">
                <li>
                  <Button size="sm">Login</Button>
                </li>
              </ul>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
