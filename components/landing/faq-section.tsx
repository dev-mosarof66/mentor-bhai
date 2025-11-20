"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI mentor help me learn English?",
    answer:
      "Our AI provides personalized lessons, corrects grammar and writing, and helps you practice real conversations in real time.",
  },
  {
    question: "Is this platform suitable for beginners?",
    answer:
      "Absolutely! Whether you're just starting or already fluent, our AI adapts to your skill level and goals.",
  },
  {
    question: "Can I practice speaking with the AI?",
    answer:
      "Yes! You can practice speaking, get pronunciation feedback, and simulate real-life conversations 24/7.",
  },
  {
    question: "Do you offer a free plan?",
    answer:
      "Yes, we offer a free Starter plan with daily practice and basic lessons. You can upgrade anytime.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes. You can cancel at any time with no hidden fees or contracts.",
  },
];

const FAQSection = () => {
  return (
    <section className="w-full min-h-screen pt-20 px-2 bg-linear-to-b from-background via-background to-primary/10 text-foreground">
      <div className="max-w-4xl h-full mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-foreground/80 text-center  max-w-xl"
        >
          Here are the most common questions people ask about our AI-powered
          English mentorship platform.
        </motion.p>

        {/* FAQ ACCORDION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full h-full flex flex-col gap-4"
          >
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border rounded-md px-4"
              >
                <AccordionTrigger className="text-base sm:text-lg font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-foreground/60">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
