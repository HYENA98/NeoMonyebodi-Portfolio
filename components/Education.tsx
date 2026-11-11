"use client";

import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="mb-16">
        <h2 className="text-4xl font-bold">
          Education & Certifications
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div
          className="
            bg-[#111827]
            border border-gray-800
            rounded-3xl
            p-8
          "
        >
          <GraduationCap
            size={40}
            className="text-blue-500 mb-4"
          />

          <h3 className="text-2xl font-semibold">
            Diploma in Information Technology
          </h3>

          <p className="text-gray-400 mt-3">
            University of South Africa (UNISA)
          </p>

          <p className="text-gray-400 mt-4">
            Developing expertise in software
            development, databases, networking,
            systems analysis and web technologies.
          </p>
        </div>

        <div
          className="
            bg-[#111827]
            border border-gray-800
            rounded-3xl
            p-8
          "
        >
          <Award
            size={40}
            className="text-purple-500 mb-4"
          />

          <h3 className="text-2xl font-semibold">
            Certifications
          </h3>

          <ul className="space-y-3 mt-6 text-gray-400">
            <li>Cisco Network Basics</li>
            <li>IBM IT Fundamentals</li>
            <li>Full Stack Web Development Bootcamp</li>
          </ul>
        </div>
      </div>
    </section>
  );
}