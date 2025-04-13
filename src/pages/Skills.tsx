import React from "react";
import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGit,
  SiMysql,
  SiPython,
  SiExpress,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import GridBackground from "../components/GridBackground";

export default function MySkills() {
  return (
    <div
      id="skills"
      className="relative w-full mb-32 flex flex-col items-center justify-center font-mono text-white overflow-hidden"
    >
      <GridBackground />

      {/* Animated heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center mb-8"
      >
        <div className="text-green-400 text-sm mb-1">• Projects</div>
        <h1 className="text-4xl font-bold">My Skills</h1>
      </motion.div>

      {/* Animated content container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col md:flex-row items-start gap-16 z-10"
      >
        {/* Icon Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg grid grid-cols-5 gap-6 text-6xl border border-primary shadow-lg"
        >
          <SiNodedotjs className="text-green-500" />
          <SiAngular className="text-red-600" />
          <SiCss3 className="text-blue-500" />
          <SiHtml5 className="text-orange-500" />
          <SiReact className="text-cyan-400" />
          <SiGit className="text-red-500" />
          <SiMysql className="text-[#00758F]" />
          <FaCode className="text-white" />
          <SiPython className="text-yellow-400" />
          <SiExpress className="text-gray-300" />
        </motion.div>

        {/* Textual Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-md space-y-3 rounded-lg p-3 border border-primary max-w-md"
        >
          <p>
            <span className="text-gray-400">Front-End:</span> Next.js, React, CSS, JavaScript
          </p>
          <p>
            <span className="text-gray-400">Back-End:</span> Node.js, Express, Python, PHP
          </p>
          <p>
            <span className="text-gray-400">Mobile-Dev:</span> React Native, Expo
          </p>
          <p>
            <span className="text-gray-400">Databases:</span> MySQL, PostgreSQL, MongoDB, Firebase
          </p>
          <p>
            <span className="text-gray-400">Tools & Platforms:</span> Git, WordPress, AWS, Figma
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
