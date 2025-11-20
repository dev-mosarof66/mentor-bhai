"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Sparkles, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-2">
          {pricingData.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Card
                className={`w-full h-96 flex flex-col justify-between gap-6 rounded-2xl shadow-md bg-secondary/5 dark:bg-secondary/10 border 
                  ${
                    plan.highlight
                      ? "border-secondary shadow-orange-600/20 scale-105"
                      : "border-background/20 dark:border-neutral-800"
                  }
                `}
              >
                <CardHeader className="flex flex-col items-center gap-2">
                  <CardTitle className="w-full flex items-center justify-center gap-2 text-xl font-semibold  text-primary">
                    {plan.icon}
                    {plan.title}
                  </CardTitle>
                  <p className="text-xl font-bold">{plan.price}</p>
                </CardHeader>

                <CardContent className="flex flex-col justify-between gap-4">
                  <ul className="space-y-3">
                    {plan.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="px-4">
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? "bg-secondary font-bold btn"
                        : "bg-primary font-semibold"
                    } text-background`}
                  >
                    {plan.button}
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
