"use client";

import { motion } from "framer-motion";
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

export const TheHeader = () => {
	return (
		<motion.header
			variants={headerVariants}
			initial={"initial"}
			animate={"animate"}
			className="z-max px-2 md:px-6 py-14 flex justify-between items-start md:items-center font-primary w-full fixed top-0 left-0">
			<h1 className="uppercase text-xl md:text-2xl text-blue-primary">
				Emile Kost
			</h1>
			<Menu />
		</motion.header>
	);
};
