"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "2+",
    label: "Featured Projects",
  },
  {
    number: "18+",
    label: "Technologies",
  },
  {
    number: "3",
    label: "Certifications",
  },
  {
    number: "3",
    label: "Professional Roles",
  },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
                Professional Highlights
            </h2>

            <p className="text-gray-400 mt-3">
                A snapshot of my development journey,
                technical expertise and professional experience.
            </p>
        </div>
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-[#111827]
                border
                border-gray-800
                rounded-2xl
                p-8
                text-center
                hover:border-blue-500
                transition
              "
            >
              <h3
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-blue-500
                "
              >
                {stat.number}
              </h3>

              <p
                className="
                  mt-3
                  text-gray-400
                  text-sm
                  md:text-base
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}