"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Sparkles, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    title: "Starter",
    price: "Free",
    icon: <Sparkles className="w-8 h-8 text-orange-500" />,
    features: [
      "Basic Lessons",
      "AI Chat (Limited)",
      "Daily Practice",
      "Email Support",
    ],
    highlight: false,
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
  },
  {
    title: "Premium",
    price: "$14.99/mo",
    icon: <Crown className="w-8 h-8 text-orange-700" />,
    features: [
      "Everything in Pro",
      "1:1 AI Video Sessions",
      "Advanced Progress Tracking",
      "Custom Learning Path",
      "Exclusive Early Features",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="w-full min-h-screen px-4 py-6 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-gray-100"
          >
            Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Choose a plan that fits your learning journey. Upgrade anytime.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-2">
          {pricingData.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Card
                className={`w-full h-96 flex flex-col justify-between gap-6 rounded-2xl shadow-md border 
                  ${
                    plan.highlight
                      ? "border-orange-600 shadow-orange-600/20 scale-105"
                      : "border-gray-200 dark:border-neutral-800"
                  }
                `}
              >
                <CardHeader className="flex flex-col items-center gap-2">
                  <CardTitle className="w-full flex items-center justify-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {plan.icon}
                    {plan.title}
                  </CardTitle>
                  <p className="text-2xl font-bold text-orange-600">
                    {plan.price}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-col justify-between gap-4">
                  <ul className="space-y-3">
                    {plan.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-400"
                      >
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="px-4">
                  <Button
                    className={`w-full ${
                      plan.highlight ? "bg-orange-600 hover:bg-orange-700" : ""
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
