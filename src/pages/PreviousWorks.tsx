import React from "react";
import { motion } from "framer-motion";
import { projects, textVariants } from "../lib/Constants";
import { useNavigate } from "react-router-dom"; // Make sure it's react-router-dom

export default function ProjectShowcase() {
  const navigate = useNavigate();

  return (
    <div id="work" className="flex flex-col justify-center items-center px-4 py-12">
      <div className="w-full max-w-6xl">
        {projects.map((project) => (
          <motion.div
            key={project.number}
            initial="initial"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative border-t border-primary flex items-center justify-between py-24 px-4 group rounded-xl cursor-pointer"
          >
            {/* Text Section */}
            <motion.div
              className="flex items-center gap-6"
              variants={textVariants}
              transition={{ type: "easeOut", stiffness: 200 }}
            >
              <div className="text-sm text-gray-500 w-8">{project.number}</div>
              <div className="text-2xl font-semibold text-white">
                {project.title}
              </div>
              <div className="text-sm text-gray-400">{project.subtitle}</div>
            </motion.div>

            {/* Button */}
            <button
              onClick={() => window.open(project.link, "_blank")}
              className="text-sm z-20 font-semibold text-gray-700 bg-gray-200 px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
            >
              VIEW PROJECT →
            </button>

            {project.image && (
              <motion.div
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ scale: 1.4, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute rounded-lg -top-6 right-0 z-10 -translate-y-1/2 group-hover:opacity-100 group-hover:visible hidden group-hover:block"
              >
                <div className="w-64 h-36 absolute bg-[#6d6c6c] top-40 right-7 -translate-y-1/2 group-hover:opacity-100 group-hover:visible hidden group-hover:block z-0"></div>

                <div className="relative w-[250px] h-auto scale-95 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <div
                    className="overflow-hidden shadow-2xl relative"
                    style={{
                      clipPath: "polygon(0% 25%, 100% 10%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <img
                      src={project.image}
                      alt="project preview"
                      className="object-cover w-full h-[200px]"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
