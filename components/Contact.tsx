"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="
          bg-[#111827]
          border border-gray-800
          rounded-3xl
          p-8 md:p-12
        "
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently open to internships,
            graduate programmes, learnerships and
            junior software development opportunities.
            Feel free to get in touch.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Email */}

          <a
            href="mailto:neo1monyebodi@gmail.com"
            className="
              bg-black/30
              border border-gray-800
              rounded-2xl
              p-6
              hover:border-blue-500
              transition
            "
          >
            <Mail
              size={28}
              className="text-blue-500 mb-4"
            />

            <h3 className="font-semibold">
              Email
            </h3>

            <p className="text-gray-400 mt-2">
              neo1monyebodi@gmail.com
            </p>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/HYENA98"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-black/30
              border border-gray-800
              rounded-2xl
              p-6
              hover:border-blue-500
              transition
            "
          >
            <FaGithub 
             size={28}
             className="text-blue-500 mb-4" />

            <h3 className="font-semibold">
              GitHub
            </h3>

            <p className="text-gray-400 mt-2">
              View My Projects
            </p>
          </a>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/neo-monyebodi"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-black/30
              border border-gray-800
              rounded-2xl
              p-6
              hover:border-blue-500
              transition
            "
          >
            <FaLinkedin
              size={28}
              className="text-blue-500 mb-4"
            />

            <h3 className="font-semibold">
              LinkedIn
            </h3>

            <p className="text-gray-400 mt-2">
              Connect With Me
            </p>
          </a>
        </div>

        {/* Action Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          <a
            href="/cv/Neo-Monyebodi-CV.pdf"
            download
            className="
              flex items-center gap-2
              bg-blue-600
              hover:bg-blue-700
              px-6 py-3
              rounded-xl
              transition
            "
          >
            <Download size={18} />
            Download CV
          </a>

          <a
            href="mailto:neo1monyebodi@gmail.com.com"
            className="
              border border-gray-700
              hover:border-blue-500
              px-6 py-3
              rounded-xl
              transition
            "
          >
            Send Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}