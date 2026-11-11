"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "CLICKS",
    role: "Shop Assistant / Cashier",
    description:
      "Provided customer service, processed transactions, handled stock replenishment and maintained merchandising standards while working in a fast-paced retail environment.",
  },

  {
    company: "United Pharmaceutical Distributors (UPD)",
    role: "Dispatcher",
    description:
      "Coordinated dispatch operations, monitored deliveries, communicated with drivers and ensured the timely distribution of pharmaceutical products.",
  },

  {
    company: "Shoprite Distribution Centre",
    role: "Picker",
    description:
      "Prepared orders accurately, managed inventory and maintained efficiency within warehouse operations while meeting strict productivity targets.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="mb-16">
        <h2 className="text-4xl font-bold">
          Work Experience
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Professional experience that helped me develop
          communication, teamwork, problem-solving and
          organisational skills.
        </p>
      </div>

      <div className="relative border-l border-gray-800 ml-4">
        {experiences.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="mb-12 ml-8 relative"
          >
            <div
              className="
                absolute
                -left-[42px]
                top-2
                w-5
                h-5
                rounded-full
                bg-blue-500
              "
            />

            <div
              className="
                bg-[#111827]
                border border-gray-800
                rounded-2xl
                p-6
                hover:border-blue-500
                transition
              "
            >
              <h3 className="text-xl font-semibold">
                {job.role}
              </h3>

              <p className="text-blue-400 mt-1">
                {job.company}
              </p>

              <p className="text-gray-400 mt-4">
                {job.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}