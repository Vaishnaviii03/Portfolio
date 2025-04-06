import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import LeetCodeIcon from "./LeetCodeIcon"; // Custom SVG for LeetCode
import myPic from "../assets/vaishnavi.png";
import { TypeAnimation } from "react-type-animation"; // 👈 make sure to install this

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-28 pb-20 bg-gradient-to-b from-purple-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-600 dark:text-purple-400">
            Hey, I'm Vaishnavi 👋
          </h1>

          {/* 🧠 Typewriter Effect */}
          <TypeAnimation
            sequence={[
              "Final year IT Student 🎓",
              2000,
              "Full Stack Developer 💻",
              2000,
              "ML & NLP Engineer 🤖",
              2000,
              "Data Analyst📊",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-4 block"
          />

          <p className="text-lg sm:text-xl mb-6 text-gray-700 dark:text-gray-300">
          I'm a passionate Machine Learning Engineer and Full Stack Developer, skilled in building intelligent systems and dynamic web applications.
From predictive models to sleek UIs, I love transforming data and ideas into impactful digital experiences.
Let's connect over innovation, code, and creativity!

💻✨
          </p>

          {/* Know Me More Button */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-full cursor-pointer 
                       transition-all duration-300 mb-4 hover:bg-purple-700 hover:scale-105 hover:shadow-md hover:-translate-y-0.5"
          >
            Know Me More <FaArrowRight />
          </Link>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-5">
            <a
              href="https://www.linkedin.com/in/vaishnavi-pandey-2704a5271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 text-3xl transition-transform transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Vaishnaviii03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 text-3xl transition-transform transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/vaishnavipandey7979/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
              title="LeetCode"
            >
              <LeetCodeIcon size={32} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={myPic}
            alt="Vaishnavi"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-400 shadow-lg 
                       transition-transform duration-300 hover:scale-105 hover:shadow-purple-400 hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
