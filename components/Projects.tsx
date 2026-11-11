"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Bakari Health",

    description:
      "A healthcare platform built using the MERN stack that provides users with an intuitive and responsive interface for accessing healthcare-related services and information.",

    image: "/projects/bakari.png",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
    ],

    github: "https://github.com/HYENA98/bakari-health",
    demo: "https://bakari-health.co.za",

    live: true,
  },

  {
    title: "Old Age Home Grocery Ordering System",

    description:
      "A desktop application developed using VB.NET Windows Forms that streamlines grocery ordering and inventory management for elderly care facilities.",

    image: "/projects/grocery.png",

    technologies: [
      "VB.NET",
      "Windows Forms",
      "SQL Server",
    ],

    github: "https://github.com/HYENA98/Grocery-Ordering-System",

    live: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      {/* Section Heading */}

      <div className="mb-16">
        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl">
          A selection of projects that showcase my
          software development skills, problem-solving
          abilities and experience with modern
          technologies.
        </p>
      </div>

      {/* Project Cards */}

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              bg-[#111827]
              border
              border-gray-800
              rounded-3xl
              overflow-hidden
              hover:border-blue-500
              transition-all
              duration-300
            "
          >
            {/* Screenshot */}

            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}

            <div className="p-8">
              {/* Status */}

              {project.live ? (
                <span
                  className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    mb-5
                    rounded-full
                    bg-green-500/10
                    border
                    border-green-500/20
                    text-green-400
                    text-sm
                  "
                >
                  ● Live Project
                </span>
              ) : (
                <span
                  className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    mb-5
                    rounded-full
                    bg-yellow-500/10
                    border
                    border-yellow-500/20
                    text-yellow-400
                    text-sm
                  "
                >
                  ● Desktop Application
                </span>
              )}

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="flex flex-wrap gap-3 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-blue-500/10
                      border
                      border-blue-500/20
                      text-blue-400
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-8 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-gray-900
                    hover:bg-gray-800
                    transition
                  "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-blue-600
                      hover:bg-blue-700
                      transition
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}