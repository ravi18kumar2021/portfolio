import { Link } from "react-router";
import MyResume from "../../public/ravi-kumar.pdf";
import { FaDownload } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";
import Preview1 from "../assets/cv-preview.png";
import Preview2 from "../assets/cv-preview2.png";

export default function About() {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-white">
      {/* Heading */}
      <SectionHeader sectionName={"About"} />

      {/* Bio paragraph */}
      <p className="text-lg leading-8 text-gray-300 mb-6">
        I'm Ravi Kumar, a self-taught developer who thrives at the intersection of creativity and logic.
        My journey began with simple HTML pages and has since evolved into building scalable full-stack applications,
        data science dashboards, and interactive UI experiences using modern tools like React, Django, and Python libraries.
      </p>

      {/* Career highlights */}
      <h2 className="text-2xl font-semibold text-violet-300 mt-10 mb-4">Career Highlights</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>🏗 Built 30+ projects during my 30DaysOfReact challenge</li>
        <li>📊 Developed multiple dashboards using Pandas, Seaborn & Streamlit</li>
        <li>🤖 Built ML models using Scikit-learn for data-driven apps</li>
        <li>🌐 Deployed full-stack applications using Django, Flask, and SQLite</li>
      </ul>

      {/* Tools & Strengths */}
      <h2 className="text-2xl font-semibold text-violet-300 mt-10 mb-4">My Toolbox</h2>
      <div className="flex flex-wrap gap-3">
        {["React", "Python", "Tailwind", "Django", "Pandas", "Git", "Flask", "SQL"].map((tool) => (
          <span key={tool} className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-sm">
            {tool}
          </span>
        ))}
      </div>

      {/* Personal note or fun fact */}
      <p className="mt-8 italic text-gray-400">
        I believe in continuous learning, open-source collaboration, and building tools that solve real-world problems.
        Outside of tech, I enjoy music, journaling, and exploring new ideas.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-row space-x-4">
        <Link to="/projects" className="bg-violet-600 px-4 py-2 rounded hover:bg-violet-700 transition">
          Explore My Projects
        </Link>
        <Link to="/contact" className="bg-violet-600 px-4 py-2 rounded hover:bg-violet-700 transition">
          Get in Touch
        </Link>
      </div>
      {/* cv section */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">View & Download My CV</h2>

        {/* CV preview with hover fade */}
        <div className="relative w-72 mx-auto mb-4 group hover:cursor-pointer"
        onClick={() => setShowPreview(true)}>
          <img
            src={Preview2}
            alt="Resume Preview"
            className="rounded-lg shadow-lg transition-opacity duration-300 opacity-50 group-hover:opacity-100 object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
            Click to Preview
          </div>
        </div>

        {/* Download button */}
        <a href={MyResume} download className="flex md:w-50 w-46 mx-auto justify-between items-center md:text-lg text-md bg-violet-600 p-2 rounded-md hover:bg-violet-700 transition">Download Resume <FaDownload/></a>
      </div>
        {showPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        onClick={() => setShowPreview(false)}
        className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400"
        title="Close"
      >
        &times;
      </button>
      <img
        src={Preview1}
        alt="CV Full Preview"
        className="max-w-4xl w-full h-auto rounded-lg shadow-lg border border-yellow-500"
      />
    </div>
        )}
    </section>
  );
}