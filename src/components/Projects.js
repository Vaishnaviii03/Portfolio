import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { SiFlask, SiTailwindcss, SiBootstrap, SiTableau, SiNumpy, SiScikitlearn } from "react-icons/si";
import { BsStars } from "react-icons/bs";

const techIcons = {
  React: <FaReact className="inline-block mr-1" />,
  Python: <FaPython className="inline-block mr-1" />,
  Flask: <SiFlask className="inline-block mr-1" />,
  Tailwind: <SiTailwindcss className="inline-block mr-1" />,
  Bootstrap: <SiBootstrap className="inline-block mr-1" />,
  Tableau: <SiTableau className="inline-block mr-1" />,
  "scikit-learn": <SiScikitlearn className="inline-block mr-1" />,
  "Naive Bayes": <BsStars className="inline-block mr-1" />,
  Excel: <BsStars className="inline-block mr-1" />,
  NLP: <BsStars className="inline-block mr-1" />,
  RNN: <BsStars className="inline-block mr-1" />,
  MovieLens: <BsStars className="inline-block mr-1" />,
  Pandas: <BsStars className="inline-block mr-1" />,
  Seaborn: <BsStars className="inline-block mr-1" />,
  Matplotlib: <BsStars className="inline-block mr-1" />,
  BeautifulSoup: <BsStars className="inline-block mr-1" />,
};

const projects = [
  {
    title: "FlickPick - Movie Recommendation System",
    description:
      "A Netflix-style movie recommendation system using content-based & collaborative filtering (SVD), with a stylish React & Flask-based frontend.",
    tech: ["React", "Tailwind", "Flask", "SVD", "Bootstrap", "MovieLens"],
    link: "https://github.com/Vaishnaviii03/FlickPick",
  },
  {
    title: "TransLingo - Language Translator",
    description:
      "Built using Bi-directional RNN for English to French/Spanish translation with a Tkinter GUI and Flask API backend.",
    tech: ["Python", "RNN", "NLP", "Tkinter", "Flask"],
    link: "https://github.com/Vaishnaviii03/TransLingo",
  },
  {
    title: "IngreDine - Recipe Recommendation System",
    description:
      "A smart recipe recommendation system that suggests dishes based on user-input ingredients using NLP and a Flask-based API.",
    tech: ["Python", "NLP", "Flask", "BeautifulSoup", "Pandas"],
    link: "https://github.com/Vaishnaviii03/IngreDine", // Replace with correct link if needed
  },
  
  {
    title: "Urban Traffic Density Analysis",
    description:
      "An EDA project visualizing urban traffic patterns using pandas, matplotlib, and seaborn to gain actionable insights.",
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    link: "https://github.com/Vaishnaviii03/Urban-Traffic-Analysis",
  },
  {
    title: "Restaurant Review Sentiment Analysis",
    description:
      "Analyzed restaurant reviews using Naive Bayes to classify sentiments with preprocessing and vectorization.",
    tech: ["Python", "Naive Bayes", "NLP", "scikit-learn"],
    link: "https://github.com/Vaishnaviii03/Restaurant-Review-Analysis",
  },
  {
    title: "Order Sales Dashboard",
    description:
      "Interactive Tableau dashboard for sales data, highlighting revenue, profit trends, and order breakdown.",
    tech: ["Tableau", "Data Visualization"],
    link: "#",
  },
  {
    title: "Internshala Web Scraper",
    description:
      "Web scraped internship listings from Internshala using BeautifulSoup and exported structured data to Excel.",
    tech: ["Python", "BeautifulSoup", "Excel"],
    link: "https://github.com/Vaishnaviii03/Internshala-WebScraping",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-purple-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-10">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl border border-purple-200 dark:border-purple-700"
            >
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-200 dark:bg-purple-600 text-purple-900 dark:text-white px-3 py-1 rounded-full flex items-center gap-1 transition duration-300 hover:scale-105 hover:bg-purple-300 dark:hover:bg-purple-500"
                  >
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
