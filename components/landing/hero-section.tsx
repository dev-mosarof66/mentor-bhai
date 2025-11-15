"use client";
import { Badge } from "@/components/ui/badge";
import { FaSuperpowers } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import GradientBackground from "./gradient-background";

const HeroSection = () => {
  return (
    <section className="w-full relative">
      <GradientBackground />
      <div className="w-full  mx-auto min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center absolute top-0 left-0 backdrop-blur-3xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 px-3 py-1.5 bg-orange-300/20 hover:bg-orange-300/30 text-sm text-orange-600 dark:text-orange-400 rounded-full transition-all"
        >
          <FaSuperpowers className="text-xl" />
          <Badge className="bg-transparent text-gray-900 dark:text-gray-300">
            AI-Powered Mentorship Platform
          </Badge>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-200">
            Learn & Practice English Anywhere, Anytime
          </h1>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-xl">
            Improve your English skills with personalized AI-powered mentorship.
            Practice speaking, writing, and comprehension with real-time
            guidance tailored just for you.
          </p>
          {/* button  */}

          <div className="flex items-center justify-between px-12 py-2 border bg-orange-600 rounded-md font-semibold  hover:bg-orange-600 cursor-pointer transition-all duration-300 delay-75 -rotate-1  group">
            <p>Try Now</p>
            <MdKeyboardDoubleArrowRight className="text-2xl translate-x-5 animate-pulse group-hover:animate-none group-hover:translate-x-7 transition-all duration-300 delay-75" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
