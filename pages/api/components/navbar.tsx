"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleTheme = () => setIsDarkMode(!isDarkMode);

	const textColor = isDarkMode ? "#E5E5CB" : "#1A120B";
	const bgColor = isDarkMode ? "#1A120B" : "#E5E5CB";

	return (
		<AnimatePresence>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				exit={{ y: -100 }}
				transition={{ type: "spring", stiffness: 200, damping: 30 }}
				style={{ backgroundColor: bgColor, color: textColor }}
				className="p-4 z-50 flex items-center justify-between sticky">
				<div className="brand-name text-xl font-medium">Abuzar</div>
				<div className="pages flex">
					<Link href="/">
						<motion.a
							className="text-lg mr-4 font-medium"
							style={{ color: textColor }}>
							Home
						</motion.a>
					</Link>
					<Link href="/portfolio">
						<motion.a
							className="text-lg mr-4 font-medium"
							style={{ color: textColor }}>
							Portfolio
						</motion.a>
					</Link>
					<Link href="/about">
						<motion.a
							className="text-lg mr-4 font-medium"
							style={{ color: textColor }}>
							About
						</motion.a>
					</Link>
					<Link href="/contact">
						<motion.a
							className="text-lg mr-4 font-medium"
							style={{ color: textColor }}>
							Contact
						</motion.a>
					</Link>
				</div>
				<motion.button
					onClick={toggleTheme}
					style={{ backgroundColor: bgColor, color: textColor }}
					className="p-2 rounded-lg"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}>
					Toggle Theme
				</motion.button>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Navbar;
