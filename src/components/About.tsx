"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaMedal } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCplusplus, SiGoogleanalytics } from "react-icons/si";

export default function About() {
    const achievements = [
        {
            title: "🏆 Hackathon Achievement",
            details: "Ranked **Top 5** out of 30+ teams in a college-level innovation hackathon.",
        },
        {
            title: "📜 Certifications",
            details: "Certified in **Full-Stack Web Development** and **Android Development**.",
        },
        {
            title: "💡 Competitive Programming",
            details:
                "Solved **1000+ DSA problems** (LeetCode 400+ & GFG 600+). Ranked **Top 20 / 5000+ (0.4%)** in college CP rankings.",
        },
        {
            title: "🎯 Contest Performance",
            details: "Regular participant on LeetCode & CodeChef with **consistent sub-2k rankings**.",
        },
        {
            title: "👨‍🏫 Leadership & Mentorship",
            details:
                "Vice President of **TechGeeks Club**. Organized coding contests, hackathons & workshops. Mentored **50+ juniors** in DSA & CP.",
        },
        {
            title: "🚀 Event Leadership",
            details:
                "Co-organized the **Annual 24-Hour Hackathon** for 150+ participants, managing logistics, judging & sponsorships.",
        },
    ];

    const techStack = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
        { name: "Python", icon: <FaPython className="text-blue-400 text-5xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600 text-5xl" /> },
    ];

    return (
        <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            >
                About Me ✨
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <FaMedal className="text-yellow-500" /> Achievements & Leadership
                    </h3>

                    <div className="space-y-5">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700"
                            >
                                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                                    {item.title}
                                </h4>
                                <p
                                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: item.details }}
                                ></p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-gray-200">💻 Technologies</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 
                           rounded-lg shadow-sm hover:shadow-lg transition"
                            >
                                {tech.icon}
                                <span className="text-gray-800 dark:text-gray-200 text-sm font-medium mt-2">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
