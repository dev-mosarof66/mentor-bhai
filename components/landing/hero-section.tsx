"use client";
import { Badge } from "@/components/ui/badge";
import { FaSuperpowers } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import GradientBackground from "./gradient-background";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { AuthButton } from "./animated-button";

const HeroSection = () => {
  const router = useRouter();
  const { data } = authClient.useSession();
  return (
    <section className="w-full relative">
      <GradientBackground />
      <div className="w-full  mx-auto min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center absolute top-0 left-0 backdrop-blur-3xl z-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 px-3 py-1.5 bg-primary/15 text-foreground font-semibold rounded-full transition-all"
        >
          <FaSuperpowers className="text-2xl text-secondary" />
          <Badge className="bg-transparent text-sm text-foreground font-semibold">
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Learn & Practice English Anywhere, Anytime
          </h1>

          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
            Improve your English skills with personalized AI-powered mentorship.
            Practice speaking, writing, and comprehension with real-time
            guidance tailored just for you.
          </p>
          {/* Auth Button  */}
          <AuthButton
            onClick={() =>
              data?.user ? router.push("/dashboard") : router.push("/auth")
            }
            className="w-fit py-3 px-6 cursor-pointer hover:scale-105 active:scale-100 transition-all duration-300 delay-75"
            gradient="bg-linear-to-r from-black via-red-400 to-blue-500"
          >
            <div className="w-full flex items-center px-6">
              <p> Try Now</p>
              <MdKeyboardDoubleArrowRight className="text-2xl translate-x-5 animate-pulse group-hover:animate-none group-hover:translate-x-7 transition-all duration-300 delay-75"
              />
            </div>
          </AuthButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
