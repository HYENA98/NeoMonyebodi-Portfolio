"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            {/* Availability Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-green-500/10
                border
                border-green-500/20
                text-green-400
                text-sm
                mb-6
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Available for Opportunities
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-blue-500 text-lg"
            >
              Hello, I am
            </motion.p>

            <motion.h1
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="text-5xl md:text-7xl font-bold mt-3"
            >
              Neo Monyebodi
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  ".NET Developer",
                  2000,
                  "IT Professional",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-gray-400
                "
              />
            </motion.div>

            <p
              className="
                text-gray-400
                mt-8
                text-lg
                leading-relaxed
                max-w-2xl
              "
            >
              I build modern full stack web applications using HTML, CSS, JavaScript, React, Typescript, Next.js, Node.js, Express.js, MongoDB, C#, .NET and SQL technologies.

              Currently in my final year pursuing a Diploma in
              Information Technology through UNISA
              while expanding my expertise in
              modern software development.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  px-8
                  py-3
                  rounded-xl
                  transition
                "
              >
                View Projects
              </a>

              <a
                href="/cv/Neo-Monyebodi-CV.pdf"
                download
                className="
                  border
                  border-gray-700
                  hover:border-blue-500
                  px-8
                  py-3
                  rounded-xl
                  transition
                "
              >
                Download CV
              </a>

            </div>

            {/* Social Icons */}

            <div className="flex gap-6 mt-8">

              <a
                href="https://github.com/HYENA98"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400
                  hover:text-white
                  transition
                "
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/neo-monyebodi"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400
                  hover:text-blue-500
                  transition
                "
              >
                <FaLinkedin size={24} />
              </a>

            </div>
          </div>

          {/* Right Content */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-blue-500/20
                  blur-3xl
                "
              />

              {/* Photo */}

              <Image
                src="/profile.png"
                alt="Profile photo"
                width={400}
                height={400}
                priority
                className="
                  relative
                  rounded-full
                  object-cover
                  w-[320px]
                  h-[320px]
                  md:w-[420px]
                  md:h-[420px]
                  border-4
                  border-blue-500/20
                "
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}