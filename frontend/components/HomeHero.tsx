"use client";
import { useState } from "react";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { MovingImage } from "./MovingImage";
import { useRef } from "react";
import { getWindowSizes } from "@/src/utils/getWindowSizes";

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
	const refContainer = useRef<HTMLDivElement>(null);
	const getMousePosition = (e: any) => {
		if (!refContainer.current || !e) return;

		const { windowWidth, windowHeight } = getWindowSizes();
		const { clientX, clientY } = e;

		if (!windowWidth || !windowHeight) return;

		// Check which half mouse is
		if (clientX < windowWidth / 2) {
			// Logic here
		} else {
			// Logic here
		}
	};

	return (
		<div
			onMouseMove={(e) => getMousePosition(e)}
			ref={refContainer}
			className="w-full relative h-screen flex items-start md:items-center px-2 md:px-6">
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
