"use client";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Crown } from "lucide-react";
import PricingCard from "./pricing-card";
import { ReactNode } from "react";
import { PricingCarousel } from "./pricing-corousel";

export type pricingDataProps = {
  title: string;
  price: string;
  icon: ReactNode;
  features: string[];
  highlight: boolean;
  button: string;
};

export const pricingData: pricingDataProps[] = [
  {
    title: "Starter",
    price: "Free",
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    features: [
      "Basic Lessons",
      "AI Chat (Limited)",
      "Daily Practice",
      "Email Support",
    ],
    highlight: false,
    button: "Try Free",
  },
  {
    title: "Pro",
    price: "$9.99/mo",
    icon: <Rocket className="w-8 h-8 text-orange-600" />,
    features: [
      "Unlimited Lessons",
      "Full AI Mentorship",
      "Speaking Practice",
      "Grammar & Writing Fixes",
      "Priority Support",
    ],
    highlight: true,
    button: "Get Pro",
  },
  {
    title: "Premium",
    price: "$14.99/mo",
    icon: <Crown className="w-8 h-8 text-secondary" />,
    features: [
      "Everything in Pro",
      "1:1 AI Video Sessions",
      "Advanced Progress Tracking",
      "Custom Learning Path",
      "Exclusive Early Features",
    ],
    highlight: false,
    button: "Purchase Now",
  },
];

const Pricing = () => {
  return (
    <section className="w-full min-h-screen px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-foreground/70 max-w-2xl"
          >
            Choose a plan that fits your learning journey. Upgrade anytime.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 w-full px-2">
          {pricingData.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* mobile sreen  */}
        <div className="w-[94%] mx-auto flex items-center justify-center lg:hidden px-4">
          <PricingCarousel />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
