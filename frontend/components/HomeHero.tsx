"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { MovingImage } from "./MovingImage";

const heroText = ["Hi there,", "I love to", "develop", "websites"];
const spanVariants = {
	evenInitial: {
		x: -30,
	},
	oddInitial: {
		x: 30,
	},
	animate: {
		x: 0,
	},
};

export const HomeHero = () => {
	return (
		<div className="w-full relative h-screen flex items-start md:items-center">
			<h1 className="flex flex-col gap-2 md:gap-6 mt-[150px] md:mt-0">
				{heroText &&
					heroText.map((text: string, idx: number) => (
						<motion.span
							key={text}
							variants={spanVariants}
							initial={idx % 2 != 0 ? "oddInitial" : "evenInitial"}
							animate={"animate"}
							className={twMerge(
								"text-blue-primary block text-5xl sm:text-[60px] md:text-[90px] lg:text-[140px] font-normal font-primary uppercase",
								idx % 2 != 0 ? "ml-8 md:ml-[95px]" : "ml-0"
							)}>
							{text}
						</motion.span>
					))}
			</h1>
			<MovingImage />
		</div>
	);
};
