"use client";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Footer() {
    const icons = [
        {
            href: "mailto:devvsharmaa06@gmail.com",
            icon: <FaEnvelope size={28} />,
            label: "Gmail",
            color: "text-red-500",
        },
        {
            href: "https://github.com/Devvvvvvvvvv24",
            icon: <FaGithub size={28} />,
            label: "GitHub",
            color: "text-gray-900 dark:text-white",
        },
        {
            href: "https://www.geeksforgeeks.org/user/devdevioxvk/",
            icon: <SiGeeksforgeeks size={28} />,
            label: "Geeksforgeeks",
            color: "text-blue-600",
        },
        {
            href: "https://leetcode.com/u/devvsharma___/",
            icon: <SiLeetcode size={28} />,
            label: "LeetCode",
            color: "text-yellow-500",
        },
        {
            href: "https://codeforces.com/profile/Devvvvv",
            icon: <SiCodeforces size={28} />,
            label: "Codeforces",
            color: "text-blue-500",
        },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="contact"
            className="p-8 bg-gray-200 dark:bg-gray-800 text-center 
                       text-gray-800 dark:text-gray-200 transition-colors"
        >
            <p className="text-lg font-semibold mb-3">📬 Let’s Connect</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-4">
                {icons.map((item, idx) => (
                    <motion.a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`hover:opacity-80 transition ${item.color}`}
                        title={item.label}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>

            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} <span className="font-medium">Dev Sahrma</span>. All rights reserved.
            </p>
        </motion.footer>
    );
}
