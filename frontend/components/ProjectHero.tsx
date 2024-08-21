"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { IconBack } from "./icons/IconBack";
import { Tag } from "./Tag";

const variants = {
	initial: {
		y: -20,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};
const tags = [
	"Interaction",
	"UX",
	"Development",
	"Behavioural",
	"NextJS",
	"React",
];
export const ProjectHero = () => {
	const router = useRouter();

	return (
		<div className="w-full px-2 md:px-6 relative flex flex-col gap-8">
			<div className="w-full h-[60vh]  md:h-auto overflow-hidden pt-28 flex justify-center items-center relative">
				<img
					src="/images/detail-hero-placeholder.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<motion.div
				variants={variants}
				initial="initial"
				animate="animate"
				className="w-full flex flex-col gap-2 md:flex-row justify-between">
				<h1 className="text-3xl sm:text-4xl md:text-8xl font-primary text-blue-primary uppercase">
					Discover
				</h1>
				<ul className="flex md:flex-row-reverse gap-0.5 grow-0 mt-2 max-w-[80vw] md:max-w-[40vw] flex-wrap">
					{tags.map((tag: string) => (
						<Tag text={tag} />
					))}
				</ul>
			</motion.div>
			<button
				onClick={() => router.back()}
				className="absolute top-12 left-2 md:left-6 -scale-x-100">
				<IconBack />
			</button>
		</div>
	);
};
