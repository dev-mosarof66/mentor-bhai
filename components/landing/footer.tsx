"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/logo.png";

const services = [
  { name: "AI Mentorship", href: "#" },
  { name: "Speaking Practice", href: "#" },
  { name: "Writing Lessons", href: "#" },
  { name: "Grammar Fixes", href: "#" },
];

const contact = [
  { name: "Help Center", href: "#" },
  { name: "Support Email", href: "mailto:support@example.com" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

const FooterSection = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-black dark:text-white py-10 px-6 font-roboto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2  font-bold">
            <Image
              src={Logo}
              className="w-6 transition-all duration-300 delay-75"
              width={30}
              height={25}
              alt="Logo"
            />
            <span>Mentor Bhai</span>
          </div>
          <p className="text-gray-700 dark:text-gray-400">
            Personalized AI-powered English mentorship to help you speak, write,
            and learn effectively.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-500 dark:text-gray-300">
            Services
          </h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            {services.map((service, idx) => (
              <li key={idx}>
                <a
                  href={service.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-500 dark:text-gray-300">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            {contact.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Email Subscription */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-gray-500 dark:text-gray-300">
            Subscribe
          </h3>
          <p className="text-gray-400">
            Get updates and tips straight to your inbox.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1  text-white border-neutral-700"
            />
            <Button className="bg-orange-600 hover:bg-orange-700">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center text-gray-500 text-sm"
      >
        &copy; {new Date().getFullYear()} AI Mentor. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default FooterSection;
