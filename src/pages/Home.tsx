import {
  FaPinterest,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import TopBar from "../components/TopBar";
import { myStats } from "../lib/Constants";
import AnimatedHeroImage from "../components/AnimatedHeroImage";
import { useCountUp } from "../components/CountUpAnimation";
import InfinityBall from "../components/InfinityBall";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <TopBar />

      {/* Hero Section */}
      <section   className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <div className="absolute ">
            <InfinityBall />
          </div>
          <p className="text-sm text-[#a5a5a5] ">Software Developer</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mt-2">
            Hello I&apos;m <span className="text-primary">Siraj LK</span>
          </h2>

          <p className="text-[#a5a5a5] mt-4">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies.
          </p>

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <a
              href="/Siraj_LK_CV.pdf"
              download
              className="px-5 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-black transition-all"
            >
              DOWNLOAD CV
            </a>

            <div className="flex items-center gap-4 text-primary text-lg">
              <FaPinterest className="hover:scale-110 cursor-pointer" />
              <FaLinkedin className="hover:scale-110 cursor-pointer" />
              <FaGithub className="hover:scale-110 cursor-pointer" />
              <FaYoutube className="hover:scale-110 cursor-pointer" />
              <FaTwitter className="hover:scale-110 cursor-pointer" />
            </div>
          </div>
        </div>

        <AnimatedHeroImage />
      </section>

      {/* Stats Section */}
      <section className="mt-20 grid grid-cols-2 sm:grid-cols-4 text-center gap-10">
        {myStats.map((item, idx) => {
          const count = useCountUp(item.number, 1000 + idx * 300); // staggered
          return (
            <div key={item.name} className="flex items-center space-x-2">
              <p className="text-6xl font-bold text-white">{count}</p>
              <p className="text-[#a5a5a5] mt-1 max-w-14 text-start text-md">
                {item.name}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
}
