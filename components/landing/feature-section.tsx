"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageCircle, BrainCircuit, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Mentorship",
    description:
      "Get personalized guidance from an intelligent mentor that adapts to your skill level and goals.",
    icon: BrainCircuit,
  },
  {
    title: "English Practice",
    description:
      "Practice speaking, writing, and comprehension with instant feedback and suggestions.",
    icon: MessageCircle,
  },
  {
    title: "Learn Anywhere",
    description:
      "Access your lessons from mobile or desktop—study comfortably wherever you are.",
    icon: Globe,
  },
  {
    title: "Track Your Progress",
    description:
      "Monitor and track your improvement over time with smart analytics and achievement badges.",
    icon: CheckCircle,
  },
];

const FeatureSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto py-20 px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Features
        </h2>
        <p className="mt-2 text-foreground/90 max-w-2xl mx-auto">
          Everything you need to learn English effectively with the help of AI.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="border  shadow-sm hover:shadow-md transition-all duration-300 p-3">
                <div className="flex items-center justify-start gap-2">
                  <div className="p-3 rounded-full bg-primary/10 text-secondary">
                    <Icon className="size-6 sm:size-5" />
                  </div>
                  <CardTitle className="text-lg sm:text-base text-primary font-semibold">
                    {feature.title}
                  </CardTitle>
                </div>

                <p className="text-center text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureSection;
