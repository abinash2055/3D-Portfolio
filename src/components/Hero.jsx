import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Photo from "../assets/Photo.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-start gap-5`}
      >
        {/* Left side: vertical line + dot (unchanged) */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Middle: Text */}
        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} whitespace-nowrap`}>
            Hi, I'm <span className="text-[#915eff]">Abinash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in MERN Stack and Laravel development,
            <br className="block sm:hidden" />
            creating efficient, scalable, and dynamic web solutions.
          </p>
        </div>

        {/* Right side: Rounded Image */}
        <div className="flex-1 flex justify-end items-start">
          <motion.img
            src={Photo}
            alt="hero"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl border-4 border-[#915eff] mt-5 sm:mt-0 sm:mr-[-60px] lg:mr-[-100px] cursor-pointer"
            whileHover={{ scale: 1.15, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </div>

      {/* Optional canvas */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero