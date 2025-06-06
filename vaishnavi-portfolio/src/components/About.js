import React from "react";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaJsSquare,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlask,
  SiNumpy,
  SiTableau,
  SiCplusplus,
  SiJupyter,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-green-500" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-400" /> },
  { name: "NLP", icon: <SiNumpy className="text-indigo-400" /> },
  { name: "ML/DL", icon: <SiNumpy className="text-pink-400" /> },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "Tableau", icon: <SiTableau className="text-orange-400" /> },
  { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-white via-purple-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400">
          About Me
        </h2>

        {/* 🎓 Education */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 mb-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-l-8 hover:border-purple-500">
          <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
            🎓 Education
          </h3>
          <ul className="space-y-2 text-gray-800 dark:text-gray-300">
            <li>B.Tech IT – DDU Gorakhpur University – <strong>8.67 CGPA</strong></li>
            <li>12th – Seth MR Jaipuria – <strong>90%</strong></li>
            <li>10th – Springer Loretto Girls – <strong>94.2%</strong></li>
          </ul>
        </div>

        {/* ⚙️ Skills */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 mb-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-l-8 hover:border-purple-500">
          <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
            ⚙️ Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm bg-purple-100 dark:bg-purple-800 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:bg-purple-200 dark:hover:bg-purple-700"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 💼 Experience */}
<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 mb-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-l-8 hover:border-purple-500">
  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
    💼 Experience
  </h3>

  {/* ITJobxs.com Internship */}
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
      SDE Intern – <span className="text-purple-600 dark:text-purple-400">ITJobxs.com</span>
    </h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-1">
      Feb 2025 – Present | Remote
    </p>
    <p className="text-sm text-gray-800 dark:text-gray-300 mb-1">
      <strong>Tech Stack:</strong> HTML, CSS, JavaScript, PHP, Bootstrap, MySQL
    </p>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
      <li>Designed and developed a fully responsive webpage for Desi QnA section.</li>
      <li>Worked on user verification/authentication and removed fake bots/posts.</li>
      <li>Integrated Google reCAPTCHA to add a secure protective layer.</li>
    </ul>
  </div>

  {/* SharpCareer Internship */}
  <div>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
      Machine Learning Intern – <span className="text-purple-600 dark:text-purple-400">SharpCareer Technologies</span>
    </h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-1">
      Sep 2024 – Oct 2024 | Remote
    </p>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
      <li>Scraped 1,000+ recipes using BeautifulSoup and structured critical fields like titles and ingredients.</li>
      <li>Enhanced ingredient recognition accuracy by 25% with NLP and NER techniques.</li>
      <li>Built and deployed a Flask REST API delivering real-time recipe recommendations to 500+ daily users.</li>
    </ul>
  </div>
</div>

        {/* 🏆 Achievements */}
<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-l-8 hover:border-purple-500">
  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
    🏆 Achievements
  </h3>
  <ul className="list-disc ml-6 text-gray-800 dark:text-gray-300 space-y-2 text-sm">
    <li>Scored <strong>1st Rank</strong> in IT Branch till 7th Semester in college</li>
    <li><strong>Top 1%</strong> in Cyber Security and Privacy – NPTEL, IIT Madras</li>
    <li><strong>Top 5%</strong> in Cloud Computing – NPTEL, IIT Kharagpur</li>
    <li>Solved <strong>500+ coding problems</strong> on multiple coding platforms</li>
  </ul>
</div>

      </div>
    </section>
  );
}
