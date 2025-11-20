"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const CTASection = () => {
  const router = useRouter();
  const { data } = authClient.useSession();
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 bg-linear-to-b to-background via-background from-primary/10 text-foreground">
      {/* Animated Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{ x: ["-10%", "10%", "-10%"], y: ["-10%", "10%", "-10%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-20 left-0 w-72 h-72 bg-orange-500/40 blur-3xl opacity-30 rounded-full"
        />
        <motion.div
          animate={{ x: ["10%", "-10%", "10%"], y: ["10%", "-10%", "10%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/40 blur-3xl opacity-30 rounded-full"
        />
        <motion.div
          animate={{ x: ["0%", "15%", "0%"], y: ["0%", "-15%", "0%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300 blur-[120px] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto text-foreground px-8 py-12 backdrop-blur-xl rounded-3xl text-center shadow-sm shadow-primary/50 flex flex-col items-center gap-4"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-xs sm:text-sm text-primary uppercase tracking-wide font-semibold"
        >
          <Sparkles className="size-5" />
          Upgrade Your English
        </motion.div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full max-w-xl  font-bold leading-snug">
          Ready to Level Up Your English Skills?
        </h2>

        <p className="text-foreground/60 max-w-xl text-sm sm:text-base">
          Join thousands of learners improving their English daily with
          AI-powered mentorship, personalized lessons, and real-time practice
          tools.
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            onClick={() =>
              data?.user ? router.push("/auth") : router.push("/auth")
            }
            className="px-4 py-2 text-sm font-semibold bg-primary text-background"
          >
            Start Learning Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
