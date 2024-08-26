"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Menu } from "./Menu";

const headerVariants = {
	initial: {
		opacity: 0,
		y: -15,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
		},
	},
};

export const TheHeader = ({ isBlue }: { isBlue: boolean }) => {
	return (
		<motion.header
			variants={headerVariants}
			initial={"initial"}
			animate={"animate"}
			className="z-max px-2 w-full md:px-6 py-14 flex justify-between items-start md:items-center font-primary fixed top-0 left-0">
			<h1
				className={twMerge(
					"uppercase text-xl md:text-2xl transition-colors",
					isBlue ? "text-white-primary" : "text-blue-primary"
				)}>
				Emile Kost
			</h1>
			<Menu isBlue={isBlue} />
		</motion.header>
	);
};
