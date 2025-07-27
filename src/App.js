// React Portfolio for Prashanth Biradar with Full Animations & Effects

import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "./prashanth_profile.jpg"; // Replace with actual profile image

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Prashanth Biradar" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Prashanth Biradar</h1>
        <p className="text-xl font-medium">CSE Graduate | Python | Java | SQL | AI Intern</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["summary", "skills", "projects", "education", "internships", "certifications", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-white transition capitalize"
            >
              {section.replace("-", " ")}
            </a>
          ))}
          <a
            href="/New Resume 1.pdf"
            download
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-yellow-500 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-300 pb-2 text-center">🧾 Professional Summary</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          Highly motivated Computer Science & Engineering graduate with academic and hands-on experience in programming and AI-based data analysis. Seeking an entry-level position to contribute, learn continuously, and grow professionally in an innovative environment.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 border-b-4 border-blue-400 pb-2">🎓 Education</h2>
        {[{
          title: "Bachelor of Engineering in CSE - 70.35%",
          desc: "ACS College of Engineering, Bengaluru",
          color: "from-indigo-100 via-white to-indigo-50"
        }, {
          title: "PUC – 75.88%",
          desc: "New Sri Chaitanya PU College, Ballari",
          color: "from-blue-100 via-white to-blue-50"
        }].map((edu, i) => (
          <div key={i} data-aos="fade-up" className={`bg-gradient-to-br ${edu.color} rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12 border-b-4 border-purple-400 pb-2">🧠 Technical Skills</h2>
        {[{
          title: "Languages",
          items: ["C", "Python", "Java", "SQL"],
          color: "from-yellow-100 via-white to-yellow-50",
          textColor: "text-yellow-800"
        }, {
          title: "Tools",
          items: ["Jupyter", "VS Code", "Eclipse", "MySQL", "Turbo C", "Code::Blocks"],
          color: "from-pink-100 via-white to-pink-50",
          textColor: "text-pink-800"
        }, {
          title: "Operating Systems",
          items: ["Windows", "Ubuntu", "Linux"],
          color: "from-green-100 via-white to-green-50",
          textColor: "text-green-800"
        }, {
          title: "Other Skills",
          items: ["Good communicator", "Fast Learner", "Exploring technologies", "Leadership"],
          color: "from-indigo-100 via-white to-indigo-50",
          textColor: "text-indigo-800"
        }].map((skill, i) => (
          <div key={i} data-aos="fade-up" className={`bg-gradient-to-r ${skill.color} rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className={`text-xl font-semibold ${skill.textColor} mb-2`}>{skill.title}</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-12 border-b-4 border-yellow-400 pb-2">🚀 Projects</h2>

        <div data-aos="fade-up" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl shadow p-6 mb-8 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">📌 E-commerce Fraud Detection</h3>
          <p className="text-gray-700 italic mb-2"><span class='text-blue-700 font-semibold'>Role</span> Fraud Detection | <span class='text-purple-700 font-semibold'>Technologies Used</span> Python, Machine Learning, HTML, Flask</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Used stacking classifiers to identify fraudulent transactions.</li>
            <li>Designed frontend with HTML and backend using Flask.</li>
          </ul>
        </div>

        <div data-aos="fade-up" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl shadow p-6 mb-8 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">📌 Restaurant Management System</h3>
          <p className="text-gray-700 italic mb-2"><span class='text-blue-700 font-semibold'>Role</span> Food Order System | <span class='text-purple-700 font-semibold'>Technologies Used</span> Python, Flask</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Developed a food ordering and delivery tracking application.</li>
            <li>Managed systematic order display and real-time tracking.</li>
          </ul>
        </div>
      </section>

      {/* Internship */}
      <section id="internships" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12 border-b-4 border-green-400 pb-2">🎓 Internship</h2>
        <div data-aos="fade-up" className="bg-gradient-to-br from-green-100 via-white to-green-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold mb-2">Artificial Intelligence Data Quality Analyst Intern</h3>
          <p className="text-gray-700"><span class='text-green-700 font-semibold'>Company</span> Rooman Technologies, Bangalore</p>
          <p className="italic text-gray-700">Duration: Sep 2024 – Feb 2025</p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12 border-b-4 border-indigo-400 pb-2">📜 Certifications</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-2" data-aos="fade-up">
          <li>Linux Training – Spoken Tutorial Project, IIT Bombay</li>
          <li>Certificate of Achievement – IT Ignite, Rooman Technologies</li>
          <li>OJT Training Certificate – Coderize Infotech Services</li>
          <li>Blockchain Completion Certificate – Infosys Springboard</li>
          <li>Internship Certificate – Rooman Technologies</li>
          <li>Certificate – Wadhwani Foundation, Rooman Technologies</li>
          <li>Java Development Intern Certificate – Code Clause</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:goudaprashanth4@gmail.com" className="hover:underline text-blue-300">goudaprashanth4@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+919535750005" className="hover:underline text-blue-300">+91 95357 50005</a></p>
        <p>📍 Chatnalli, Yadgir, Karnataka</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:goudaprashanth4@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:+919535750005" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
          <a href="http://linkedin.com/in/prashanth-biradar-9b293a27b" className="hover:text-yellow-300 transition" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
        </div>
      </section>
    </main>
  );
}
