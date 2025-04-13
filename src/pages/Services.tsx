import { motion } from "framer-motion";
import {
  LucideLayoutPanelLeft,
  LucidePenTool,
} from "lucide-react";
import BackgroundCircle from "../components/BackgroundCircle";
import { BiMobileVibration } from "react-icons/bi";
import { FaWordpressSimple } from "react-icons/fa";

export default function ServicesWithLines() {
  return (
    <section id="services"  className="relative  mt-32 flex flex-col items-center  text-white overflow-hidden">
      <div className="relative z-10 w-full">
        <BackgroundCircle />

        {/* Box 1 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative justify-start mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-full left-[calc(50%+1px)] w-px h-16 bg-primary/10"
          />
          <div className="border border-primary/10 rounded-xl p-6 max-w-2xl bg-[#11141c] z-10">
            <div className="flex items-center gap-3 mb-4">
              <LucideLayoutPanelLeft className="text-primary" />
              <h3 className="text-2xl font-semibold">Website Development</h3>
            </div>
            <p className="text-gray-400">
              I create websites based on your ready-made design. Whether it’s a
              landing page or a business card website, I will make it look great
              and work smoothly on any device.
            </p>
          </div>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative flex justify-end mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-full left-[calc(50%+1px)] w-px h-16 bg-primary/10"
          />
          <div className="border border-primary/10 rounded-xl p-6 w-full max-w-2xl bg-[#11141c] z-10">
            <div className="flex items-center gap-3 mb-4">
              <LucidePenTool className="text-primary" />
              <h3 className="text-2xl font-semibold">Web Design</h3>
            </div>
            <p className="text-gray-400">
              I can design your website from scratch. I create modern, simple,
              and user-friendly designs that match your brand and goals.
            </p>
          </div>
        </motion.div>

        {/* Box 3 */}
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative justify-start mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-full left-[calc(50%+1px)] w-px h-16 bg-primary/10"
          />
          <div className="border border-primary/10 rounded-xl p-6 max-w-2xl bg-[#11141c] z-10">
            <div className="flex items-center gap-3 mb-4">
              <BiMobileVibration className="text-primary h-7 w-7" />
              <h3 className="text-2xl font-semibold">Mobile Apps</h3>
            </div>
            <p className="text-gray-400">
            Crafting seamless, responsive mobile experiences that elevate your brand and engage users on any device.
            </p>
          </div>
        </motion.div>


           {/* Box 4*/}
           <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative flex justify-end mb-16"
        >
        
          <div className="border border-primary/10 rounded-xl p-6 w-full max-w-2xl bg-[#11141c] z-10">
            <div className="flex items-center gap-3 mb-4">
              <FaWordpressSimple className="text-primary h-7 w-7" />
              <h3 className="text-2xl font-semibold">Wordpress Design</h3>
            </div>
            <p className="text-gray-400">
            Custom-built WordPress sites that are fast, modern, and designed to convert visitors into customers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
