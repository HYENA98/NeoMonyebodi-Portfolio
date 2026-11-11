"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiPostman,
  SiExpress,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 size={40} className="text-orange-500" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt size={40} className="text-blue-500" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={40} className="text-yellow-400" />,
      },
      {
        name: "React",
        icon: <FaReact size={40} className="text-cyan-400" />,
      },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={40} className="text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={40} className="text-gray-300" />,
      },
      {
        name: "C#",
        icon: (
          <div className="text-purple-500 text-3xl font-bold">
            C#
          </div>
        ),
      },
      {
        name: ".NET",
        icon: <SiDotnet size={40} className="text-purple-500" />,
      },
    ],
  },

  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb size={40} className="text-green-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql size={40} className="text-blue-400" />,
      },
      {
        name: "SQL Server",
        icon: (
          <div className="text-red-500 text-sm font-bold">
            SQL
          </div>
        ),
      },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt size={40} className="text-orange-500" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub size={40} />,
      },
      {
        name: "Postman",
        icon: <SiPostman size={40} className="text-orange-500" />,
      },
      {
        name: "Visual Studio",
        icon: (
          <div className="text-purple-500 text-lg font-bold">
            VS
          </div>
        ),
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="mb-20">
        <h2 className="text-4xl font-bold">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Technologies and tools I use to design,
          build, and deploy modern web applications.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          {[
            "React",
            "Node.js",
            "MongoDB",
            "MySQL",
            "C#",
            ".NET",
          ].map((item) => (
            <span
              key={item}
              className="
                px-4 py-2
                rounded-full
                bg-blue-500/10
                border border-blue-500/20
                text-blue-400
                text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">
              {category.title}
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    bg-[#111827]
                    border border-gray-800
                    rounded-2xl
                    p-6
                    flex flex-col
                    items-center
                    justify-center
                    gap-4
                    hover:border-blue-500
                    hover:shadow-lg
                    hover:shadow-blue-500/20
                    transition
                  "
                >
                  {skill.icon}

                  <h4 className="font-medium">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}