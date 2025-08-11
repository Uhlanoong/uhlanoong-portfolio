import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  
  {
    role: "Software Developer",
    company: "Agro Solution",
    period: "2021 – Present",
    description:
      "Built responsive web interfaces and collaborated with backend teams to integrate REST APIs.",
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0">
                <Briefcase className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {exp.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.company} — <span className="italic">{exp.period}</span>
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
