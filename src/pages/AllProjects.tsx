import { motion } from "framer-motion";
import BackgroundCircles from "../components/BackgroundCircles";

const testimonials = [
  {
    id: 1,
    name: "Larry Diamond",
    title: "Chief Executive Officer, Bertil",
    image: "/project4.png",
    link: "https://home-services-lovat.vercel.app/",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Product Manager, Acme Inc.",
    image: "/project7.png",
    link: "https://www.figma.com/design/I65SrSAuOTtdAksGY7Kpl2/home-remodeling?m=auto&t=YfmgzUzK6bvYh0XW-1",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "John Smith",
    title: "CTO, InnovateX",
    image: "/project5.png",
    link: "https://hospitly-seven.vercel.app/",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function AllProjects() {
  return (
    <section className="relative  space-y-28 overflow-hidden">
      <div className=" absolute inset-x-64 inset-32">
        <BackgroundCircles />
      </div>
      {testimonials.map((t, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={t.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="rounded-xl w-full h-auto object-cover shadow-lg"
              />
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-white"
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-4">
                My Satisfied Client
              </h2>
              <p className="text-[#aaaaaa] mb-6 max-w-md">{t.quote}</p>
              <div className="flex">
                <div>
                  <p className="font-semibold text-white text-lg">{t.name}</p>
                  <p className="text-[#aaaaaa] text-sm">{t.title}</p>
                </div>
                <button
                  onClick={() => window.open(t.link, "_blank")}
                  className=" relative  rounded-full font-medium hover:bg-[#202020] transition flex items-center gap-1 px-5 mx-auto"
                >
                  <span className="bg-[#202020] inset-x-2 z-10 absolute w-9 h-9 rounded-full"></span>
                  <h1 className="z-20">
                    View Project<span className="text-primary">→</span>
                  </h1>
                </button>
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Dot navigation */}
      <div className="absolute hidden md:flex top-1/2 right-4 transform -translate-y-1/2  flex-col gap-4">
        {testimonials.map((t) => (
          <span
            key={t.id}
            className="w-4 h-4 border-2 border-white rounded-full hover:scale-110 transition-transform bg-white/20"
          ></span>
        ))}
      </div>
    </section>
  );
}
