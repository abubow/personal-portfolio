"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const AboutUs = (props: Props) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className="container mx-auto grid grid-cols-1 gap-4">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="text-2xl font-medium">
					About Me
				</motion.h1>
				<motion.p
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="text-lg">
					I am Syed Mohammad Abuzar, a full stack web developer with
					expertise in Next.js, Django, gRPC, and Golang. I am also a
					data scientist, with over a few projects under my belt.
					Currently, I am in my 5th semester at the University of
					Central Punjab, pursuing my Bachelors of Science in Computer
					Science.
				</motion.p>
				<motion.p
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className="text-lg">
					I have been programming since I was 13 and have experience
					in various programming languages including C++, C#, C, Java,
					Python, JavaScript, PHP, Kotlin, TypeScript, SQL, HTML, CSS,
					and RUST. I also have experience in embedded systems
					development and big data technologies such as Hadoop, Kafka,
					and Spark.
				</motion.p>
				<motion.p
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.5 }}
					className="text-lg">
					I have a solid understanding of web development, having
					received my Diploma of Computer Applications at the age of
					17, where I learned web development using HTML, CSS, and
					JavaScript. Additionally, I have experience in building
					games using Unity and Pygame.
				</motion.p>
				<motion.p
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1, duration: 0.5 }}
					className="text-lg">
					Currently, I am working as a full-stack web developer at a
					cloud platform named Gripo, where I am honing my skills in
					building scalable and high-performance web applications. I
					recently completed the Artificial Intelligence course by
					Samsung Innovation Campus, where I learned principles of
					data science, data engineering, machine learning and deep
					learning techniques.
				</motion.p>
				<motion.p
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1.2, duration: 0.5 }}
					className="text-lg">
					I am a highly motivated and dedicated individual, with a
					strong passion for technology. I am ready to take on new
					challenges and opportunities and I am confident that I would
					be an ideal candidate for any company looking for a highly
					skilled and dedicated full-stack web developer.
				</motion.p>
			</motion.div>
		</AnimatePresence>
	);
};

export default AboutUs;
